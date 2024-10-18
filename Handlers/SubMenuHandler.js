const { options } = require("../config");
const MenuHandler = require("./MenuHandler");

class SubMenuHandler extends MenuHandler {
    constructor(options) {
        super([{ title: "Retour", handler: "MenuHandler" }, ...options]);
    }
}

module.exports = SubMenuHandler;
