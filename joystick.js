const HID = require('node-hid')
const robot = require('robotjs')

const devices = HID.devices()

const mode = process.argv[2]

if (mode === 'list') {
    console.log(devices.length, "devices found")
    console.log(devices)
    process.exit()
}

try {
    var device = new HID.HID(121, 6)
} catch (error) {
    console.error("Joystick device not found")
    process.exit()
}

var state = ""

const logMode = mode === 'log'

function keyTap(key) {
    if (key) robot.keyTap(key)
}

const bindings = {
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
}

const defaultState = "127,127,15,0"

device.on("data", function(data) {
    let arr = Array.from(data)
    newData = [...arr.slice(0,2), ...arr.slice(5,7)].join()
    if (newData === state) return
    state = newData
    if (newData === defaultState) return
    const binding = bindings[newData]
    if (logMode) {
        console.log(newData, binding)
    } else {
        keyTap(binding)
    }
})