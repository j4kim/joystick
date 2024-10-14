const { exec } = require("child_process");

function getCurrentVolume(callback) {
  exec(
    'osascript -e "output volume of (get volume settings)"',
    (err, stdout) => {
      if (err) {
        console.error(err.message);
        return;
      }
      callback(parseInt(stdout.trim()));
    }
  );
}

function setVolume(level) {
  if (level < 0) level = 0;
  if (level > 100) level = 100;
  currentVolume = level;

  exec(`osascript -e "set volume output volume ${level}"`, (err) => {
    if (err) {
      console.error(err.message);
    }
  });
}

var currentVolume = 0;

getCurrentVolume((level) => {
  currentVolume = level;
});

function increaseVolume() {
  setVolume(currentVolume + 6);
}

function decreaseVolume() {
  setVolume(currentVolume - 6);
}

module.exports = {
  increaseVolume,
  decreaseVolume,
};
