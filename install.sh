# install for arch linux

#dependencies
sudo pacman -S --needed libsndfile php npm xdg-utils libpulse

# setup project npm
ROOT_DIR="$(dirname "${BASH_SOURCE[0]}")/"
cd "$ROOT_DIR"

npm install

# enable executing the two files
chmod +x deploy/*.sh