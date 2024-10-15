const Handler = require("./Handler");

class NumHandler extends Handler {
    level = 0

    up() {
        this.level++;
        console.log(this.level);
    }
    down() {
        this.level--;
        console.log(this.level);
    }
    switch() {
        return "ConsoleHandler";
    }
}

module.exports = NumHandler;
