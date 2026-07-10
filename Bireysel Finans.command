#!/bin/zsh
cd "$(dirname "$0")"
PORT=8787
URL="http://localhost:${PORT}/bireysel-dashboard.html"

echo "Bireysel Finans baslatiliyor..."
echo "Masaustu: ${URL}"
echo "Telefon icin ayni Wi-Fi aginda Mac IP adresini kullanin: http://MAC-IP:${PORT}/bireysel-dashboard.html"
python3 -m http.server "$PORT" --bind 0.0.0.0 &
SERVER_PID=$!
sleep 1
open "$URL"
wait "$SERVER_PID"
