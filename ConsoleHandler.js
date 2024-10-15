class ConsoleHandler {
    up() {
        console.log("up")
    }
    down() {
        console.log("down")
    }
    enter() {
        return "DefaultHandler";
    }
}

module.exports = ConsoleHandler