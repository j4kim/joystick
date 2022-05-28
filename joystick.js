const HID = require('node-hid')
const robot = require('robotjs')

console.log(HID.devices())

/*
{
    vendorId: 121, // 0x79
    productId: 6,
    path: 'IOService:/AppleARMPE/arm-io@10F00000/AppleT810xIO/usb-drd1@2280000/AppleT8103USBXHCI@01000000/usb-drd1-port-hs@01100000/Generic   USB  Joystick  @01100000/IOUSBHostInterface@0/AppleUserUSBHostHIDDevice',
    serialNumber: '',
    manufacturer: 'DragonRise Inc.  ',
    product: 'Generic   USB  Joystick  ',
    release: 263,
    interface: 0,
    usagePage: 1,
    usage: 4
}
*/

try {
    var device = new HID.HID(121, 6)
} catch (error) {
    console.error("Joystick device not found")
    process.exit()
}

var state = {
    joystick: undefined,
    button: undefined,
    money: undefined
}

const logMode = process.argv[2] === 'log'

function keyTap(key) {
    if (key) robot.keyTap(key)
}

const partsConfig = [
    {
        type: "joystick",
        slice: [0, 2],
        bindings: {
            "0,127": "left",
            "127,0": "up",
            "255,127": "right",
            "127,255": "down"  
        }
    },
    {
        type: "button",
        slice: [5, 6],
        bindings: {
            "47": "a",
            "79": "b"
        }
    },
    {
        type: "money",
        slice: [6, 7],
        bindings: {
            "32": "c",
            "64": "m",
            "128": "enter"
        }
    }
]

device.on("data", function(data) {
    partsConfig.forEach(part => {
        let newData = data.slice(...part.slice).join()
        if (newData !== state[part.type]) {
            state[part.type] = newData
            if (logMode) {
                console.log({ type: part.type, newData })
            } else {
                keyTap(part.bindings[newData])
            }
        }
    })
})