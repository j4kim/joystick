const { options } = require("../config");
const MenuHandler = require("./MenuHandler");

class SubMenuHandler extends MenuHandler {
    constructor({ options }) {
        const backOption = { title: "Retour", handler: "MenuHandler" };
        super({ options: [backOption, ...options] });
    }
}

module.exports = SubMenuHandler;
