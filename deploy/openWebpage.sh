ROOT_DIR="$(dirname "${BASH_SOURCE[0]}")/.."
SERVER_ADDR="127.0.0.1:8082"
cd "$ROOT_DIR/src"

# compile
npm run prepareWeb

# set up server
php \
    -S $SERVER_ADDR \
    -t . \
    -c php.ini &

# notification sound
paplay ../deploy/res/notification\ up.wav &

# open webpage
xdg-open "http://$SERVER_ADDR/index.php" &



