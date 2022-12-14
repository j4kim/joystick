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

var state = ""

const logMode = process.argv[2] === 'log'

function keyTap(key) {
    if (key) robot.keyTap(key)
}

const bindings = {
    "127,127,127,127,47,0,192": "a",
    "127,127,127,127,79,0,192": "b",
    "127,0,127,127,15,0,192": "up",
    "127,255,127,127,15,0,192": "down",
    "0,127,127,127,15,0,192": "left",
    "255,127,127,127,15,0,192": "right",
    "127,127,127,127,15,1,192": "tab",
    "127,127,127,127,15,2,192": "x",
    "127,127,127,127,15,4,192": "y",
    "127,127,127,127,143,0,192": "enter",
    "127,127,127,127,15,32,192": "m",
}


device.on("data", function(data) {
    let arr = Array.from(data)
    newData = [...arr.slice(0,2), ...arr.slice(3,8)].join()
    if (newData !== state) {
        state = newData
        if (logMode) {
            console.log(newData)
        } else {
            keyTap(bindings[newData])
        }
    }
})