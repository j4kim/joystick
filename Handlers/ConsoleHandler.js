const Handler = require("./Handler");

class ConsoleHandler extends Handler {
    index = 0;
    options = [
        { handler: "DomAtHomeHandler", title: "Dom At Home" },
        { handler: "VolumeHandler", title: "Volume" },
        { handler: "NumHandler", title: "Numbers" },
    ];

    constructor() {
        super();
        this.showMenu();
    }

    up() {
        this.index = (this.index + 1) % this.options.length;
        this.showMenu();
    }
    down() {
        const len = this.options.length;
        this.index = (this.index - 1 + len) % len;
        this.showMenu();
    }
    switch() {
        return this.options[this.index].handler;
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

module.exports = ConsoleHandler;
