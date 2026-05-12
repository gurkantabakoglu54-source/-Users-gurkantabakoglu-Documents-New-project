(() => {
  const hiddenKpiLabels = new Set(["Eksik Özlük", "Missing Documents"]);

  function removeHiddenKpis() {
    document.querySelectorAll(".kpi-card").forEach((card) => {
      const label = card.querySelector("span")?.textContent?.trim();
      if (hiddenKpiLabels.has(label)) card.remove();
    });
  }

  function startDashboardCleanup() {
    removeHiddenKpis();
    const target = document.querySelector("#pageContent");
    if (!target) return;

    const observer = new MutationObserver(removeHiddenKpis);
    observer.observe(target, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startDashboardCleanup);
  } else {
    startDashboardCleanup();
  }
})();
