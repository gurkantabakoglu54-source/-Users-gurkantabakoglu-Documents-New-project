from __future__ import annotations

import csv
import re
import shutil
import unicodedata
from pathlib import Path


DESKTOP = Path("/Users/gurkantabakoglu/Desktop")
ROOT = DESKTOP / "Firma_Bazli_Sozlesme_IsEmri_Teklif_Arsivi_2026-06-25"
CANDIDATES = Path("/tmp/firma_evrak_candidates.txt")

DOC_EXTS = {".pdf", ".docx", ".doc", ".xlsx", ".xls", ".eml", ".zip"}
KEY_RE = re.compile(
    r"s[oö]zle[sş]me|fiyat|teklif|i[sş][ _-]*emri|sipari[sş]|sat[ _-]*no|"
    r"purchase|contract|offer|quotation|work[ _-]*order",
    re.IGNORECASE,
)


def ascii_fold(value: str) -> str:
    value = value.replace("ı", "i").replace("İ", "I")
    return unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode()


def clean_name(value: str) -> str:
    value = value.strip().strip("._- ")
    value = re.sub(r"^\d+\s*[-_]\s*", "", value)
    value = re.sub(r"\s+", " ", value)
    value = value.replace("/", "-").replace(":", "-")
    return value[:90] or "Firma Belirsiz"


def category(path: Path) -> str:
    text = ascii_fold(str(path)).lower()
    name = ascii_fold(path.name).lower()
    if any(k in name for k in ["is emri", "isemri", "work order", "purchase order", "siparis", "sat no"]):
        return "Is Emirleri"
    if any(k in name for k in ["sozlesme", "contract"]):
        return "Sozlesmeler"
    if any(k in name for k in ["fiyat", "teklif", "offer", "quotation"]):
        return "Fiyat Teklifleri"
    if any(k in text for k in ["is emri", "isemri", "work order", "purchase order", "siparis", "sat no"]):
        return "Is Emirleri"
    if any(k in text for k in ["sozlesme", "contract"]):
        return "Sozlesmeler"
    if any(k in text for k in ["fiyat", "teklif", "offer", "quotation"]):
        return "Fiyat Teklifleri"
    return "Diger Ilgili Belgeler"


def firm_from_parent_structure(path: Path) -> str | None:
    parts = list(path.parts)
    folded = [ascii_fold(p).lower() for p in parts]
    markers = [
        "10-teklif ve sozlesmeler",
        "3-fiyat teklifi ve sozlesmeler",
        "8-firmalar",
        "23-fiyat teklifi",
    ]
    for marker in markers:
        for idx, part in enumerate(folded):
            if marker in part and idx + 1 < len(parts):
                candidate = parts[idx + 1]
                if candidate.lower() not in {"sozlesmeler", "fiyat teklifi"}:
                    return clean_name(candidate)
    return None


def firm_from_filename(path: Path) -> str:
    stem = path.stem
    paren = re.findall(r"\(([^)]+)\)", stem)
    if paren:
        return clean_name(paren[-1])
    simplified = re.split(
        r"(?i)\b(fiyat|teklif|sozlesme|sözleşme|contract|offer|quotation|is emri|iş emri)\b",
        stem,
    )[0]
    simplified = simplified.replace("Global Kalite", "").replace("Glotem", "")
    simplified = simplified.replace("B&B KPI", "").replace("GK KALİTE", "")
    return clean_name(simplified or path.parent.name)


def infer_firm(path: Path) -> str:
    return firm_from_parent_structure(path) or firm_from_filename(path)


def unique_dest(dest: Path) -> Path:
    if not dest.exists():
        return dest
    stem, suffix = dest.stem, dest.suffix
    for index in range(2, 1000):
        candidate = dest.with_name(f"{stem} ({index}){suffix}")
        if not candidate.exists():
            return candidate
    raise RuntimeError(f"Could not create unique name for {dest}")


def main() -> None:
    if ROOT.exists():
        shutil.rmtree(ROOT)
    ROOT.mkdir(parents=True)

    rows: list[dict[str, str]] = []
    copied = 0
    skipped = 0

    for raw in CANDIDATES.read_text().splitlines():
        source = Path(raw)
        if not source.exists() or not source.is_file():
            skipped += 1
            continue
        if source.name.startswith("~$") or source.suffix.lower() not in DOC_EXTS:
            skipped += 1
            continue
        if not KEY_RE.search(ascii_fold(str(source))):
            skipped += 1
            continue

        firm = infer_firm(source)
        cat = category(source)
        target_dir = ROOT / firm / cat
        target_dir.mkdir(parents=True, exist_ok=True)
        target = unique_dest(target_dir / source.name)
        shutil.copy2(source, target)
        copied += 1
        rows.append(
            {
                "firma": firm,
                "kategori": cat,
                "dosya_adi": target.name,
                "kaynak": str(source),
            }
        )

    with (ROOT / "Dosya_Listesi.csv").open("w", newline="", encoding="utf-8-sig") as f:
        writer = csv.DictWriter(f, fieldnames=["firma", "kategori", "dosya_adi", "kaynak"])
        writer.writeheader()
        writer.writerows(sorted(rows, key=lambda r: (r["firma"], r["kategori"], r["dosya_adi"])))

    print(f"copied={copied}")
    print(f"skipped={skipped}")
    print(f"root={ROOT}")


if __name__ == "__main__":
    main()
