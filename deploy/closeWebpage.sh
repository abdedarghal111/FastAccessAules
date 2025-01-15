ROOT_DIR="$(dirname "${BASH_SOURCE[0]}")/../"
cd "$ROOT_DIR"

# shutdown server
pkill php
pkill stunnel3
pkill stunnel
# pkill -f "npm run sassCompile"

# notifiation sound
paplay ./deploy/res/notification\ down.wav &