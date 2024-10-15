const Handler = require("./Handler");

class ConsoleHandler extends Handler {
    index = 0
    options = [
        "DomAtHomeHandler",
        "VolumeHandler",
        "NumHandler",
    ]

    constructor() {
        super();
        this.showMenu()
    }

    up() {
        this.index = (this.index + 1) % this.options.length;
        this.showMenu()
    }
    down() {
        this.index = (this.index - 1 + this.options.length) % this.options.length;
        this.showMenu()
    }
    switch() {
        return this.options[this.index];
    }

    showMenu() {
        console.clear();
        this.options.forEach((option, index) => {
            const pointer = index == this.index ? ">" : " ";
            console.log(pointer, option);
        });
    }
}

module.exports = ConsoleHandler;
