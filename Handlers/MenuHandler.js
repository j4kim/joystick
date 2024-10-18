const config = require("../config");
const Handler = require("./Handler");

class MenuHandler extends Handler {
    index = 0;
    eventToSwitch = "press";

    constructor(options) {
        super();
        this.options = options ?? config.options;
        this.showMenu();
    }

    up() {
        this.index = (this.index + 1) % this.options.length;
        this.showMenu();
    }

    down() {
        this.index =
            (this.index - 1 + this.options.length) % this.options.length;
        this.showMenu();
    }
    switch() {
        return this.options[this.index];
    }

    showMenu() {
        console.clear();
        console.log("--------------------");
        this.options.forEach((option, index) => {
            const pointer = index == this.index ? ">" : " ";
            console.log(pointer, option.title);
        });
        console.log("--------------------");
    }
}

module.exports = MenuHandler;
