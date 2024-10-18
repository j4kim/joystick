const { options } = require("../config");
const Handler = require("./Handler");

class MenuHandler extends Handler {
    index = 0;
    eventToSwitch = "press";

    constructor() {
        super();
        this.showMenu();
    }

    up() {
        this.index = (this.index + 1) % options.length;
        this.showMenu();
    }

    down() {
        this.index = (this.index - 1 + options.length) % options.length;
        this.showMenu();
    }
    switch() {
        return options[this.index];
    }

    showMenu() {
        console.clear();
        console.log("--------------------");
        options.forEach((option, index) => {
            const pointer = index == this.index ? ">" : " ";
            console.log(pointer, option.title);
        });
        console.log("--------------------");
    }
}

module.exports = MenuHandler;
