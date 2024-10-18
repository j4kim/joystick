const { options } = require("../config");
const Handler = require("./Handler");

class MenuHandler extends Handler {
    index = 0;
    eventToSwitch = "press";

    constructor(args) {
        super();
        this.options = args?.options ?? options;
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
