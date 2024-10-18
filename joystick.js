const HID = require("node-hid");
const robot = require("robotjs");

class Joystick {
    state = "127,127,15,0";
    defaultState = "127,127,15,0";

    bindings = {
        "127,127,47,0": "a",
        "127,127,79,0": "b",
        "127,0,15,0": "up",
        "127,255,15,0": "down",
        "0,127,15,0": "left",
        "255,127,15,0": "right",
        "127,127,15,1": "tab",
        "127,127,15,2": "x",
        "127,127,15,4": "y",
        "127,127,143,0": "enter",
        "127,127,15,32": "m",
        "127,127,15,8": "r",
        "127,127,15,64": "l",
    };

    constructor(logMode = false) {
        this.logMode = logMode;
        this.device = this.connect();
        this.device.on("data", (data) => this.onData(data))
    }

    connect() {
        try {
            return new HID.HID(121, 6);
        } catch (error) {
            console.error("Joystick device not found");
        }
    }

    dataToString(data) {
        const arr = Array.from(data)
        return [arr[0], arr[1], arr[5], arr[6]].join();
    }

    onData(data) {
        const newData = this.dataToString(data)
        if (newData === this.state) return
        this.state = newData
        if (newData === this.defaultState) return
        const binding = this.bindings[newData]
        if (this.logMode) {
            console.log(newData, binding)
        } else {
            this.keyTap(binding)
        }
    }

    keyTap(key) {
        if (key) robot.keyTap(key)
    }
}

module.exports = Joystick;
