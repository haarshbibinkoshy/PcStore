import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import Typography from '@mui/material/Typography'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import data from "./data"
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    }
})

console.log("dataArray", data)
let id = 0
function createData(first, second, third, fourth) {
    id += 1
    return { id, first, second, third, fourth }
}

// {
//     "_id": "63de5f5a2a98c27336649841",
//     "name": "Apple MacBook Air M1 MGN93HN/A Ultrabook (Apple M1/8 GB/256 GB SSD/macOS Big Sur)",
//     "price": "86990",
//     "brand": "Apple\n",
//     "category": [
//         "Laptop"
//     ],
//     "images": [
//         "https://yashyahiya-ecommerce.s3.ap-south-1.amazonaws.com/1675517513212apple-m1-mgn93hn-a-141586-v1-large-1.webp",
//         "https://yashyahiya-ecommerce.s3.ap-south-1.amazonaws.com/1675517513212apple-m1-mgn93hn-a-141586-v1-large-2.webp",
//         "https://yashyahiya-ecommerce.s3.ap-south-1.amazonaws.com/1675517513212apple-m1-mgn93hn-a-141586-v1-large-3.webp"
//     ],
//     "generalInformation": {
//         "brand": "Apple\n",
//         "model": "M1 MGN93HN/A\n",
//         "thickness": "10.9 Millimeter thickness (Slim)\n",
//         "dimensions(WxDxH)": "304.1 x 212.4 x 10.9  mm\n",
//         "weight": "1.29 Kg weight (Light-weight)\n",
//         "colour(s)": "Silver\n",
//         "operatingSystem": "macOS Big Sur"
//     },
//     "displayDetails": {
//         "displaySize": "13.3 Inches (33.78 cm)\n",
//         "displayResolution": "2560 x 1600 Pixels\n",
//         "pixelDensity": "227 ppi\n",
//         "displayType": "LED\n",
//         "displayFeatures": "Quad LED Backlit IPS Display (227 PPI\n400 nits Brightness\nWide Colour (P3)\nTrue Tone Technology)",
//         "touchScreen": "No"
//     },
//     "performance": {
//         "processor": "Apple M1",
//         "clockSpeed": "",
//         "graphicProcessor": ""
//     },
//     "memory": {
//         "capacity": "8 GB\n",
//         "ramType": "DDR4\n",
//         "memorySlots": "1",
//         "memoryLayout": "1x8 Gigabyte"
//     },
//     "storage": {
//         "ssdCapacity": "256 GB"
//     },
//     "battery": {
//         "batteryCell": "",
//         "batteryType": "Li-Po\n",
//         "powerSupply": "30 W AC Adapter W\n"
//     },
//     "networking": {
//         "wirelessLAN": "802.11 b/g/n/ax\n",
//         "wifiVersion": "6",
//         "bluetooth": "Yes",
//         "bluetoothVersion": "5.0"
//     },
//     "ports": {
//         "usb2.0slots": "2",
//         "headphoneJack": "Yes",
//         "microphoneJack": "Yes"
//     },
//     "multimedia": {
//         "webcam": "Yes",
//         "videoRecording": "720p HD\n",
//         "Secondarycam(Rear-facing)": "",
//         "speakers": "Built-in Speakers\n",
//         "inbuiltMicrophone": "Yes\n",
//         "microphoneType": "Three-mic Array with Directional Beamforming",
//         "secondarycam(Rear-facing)": "No"
//     },
//     "peripherals": {
//         "pointingDevice": "Touchpad with Multi-Touch Gestures Enabled\n",
//         "keyboard": "Magic Keyboard\n",
//         "backlitKeyboard": "Yes",
//         "fingerprintScanner": "No"
//     },
//     "others": {
//         "Warranty": "",
//         "salesPackage": "Laptop, Battery, AC Adapter, User Guide\n",
//         "warranty": "1 Year\n"
//     },
//     "createdAt": "2023-02-02T13:53:22.908Z"
// }
let headerArray = ['General Informations', 'Display Details', 'Performance', "Memory", "Storage", "Battery", "Networking", "Ports", "Multimedia", "Peripherals", "Others"]
const rows = [
    createData('General Informations'),
    createData('Images', data[0].images[0], data[1].images[0], data[2].images[0], data[3].images[0]),
    createData('Name', data[0].name.substring(0, 20) + ".....", data[1].name.substring(0, 20) + ".....", data[2].name.substring(0, 20) + ".....", data[3].name.substring(0, 20) + "....."),
    createData('Price', data[0].price + " rs", data[1].price + " rs", data[2].price + " rs", data[3].price + " rs"),
    createData('Brand', data[0].brand, data[1].brand, data[2].brand, data[3].brand),
    createData('Category', data[0].category, data[1].category, data[2].category, data[3].category),
    createData('Model', data[0].generalInformation.model, data[1].generalInformation.model, data[2].generalInformation.model, data[3].generalInformation.model),
    createData('Thickness', data[0].generalInformation.thickness, data[1].generalInformation.thickness, data[2].generalInformation.thickness, data[3].generalInformation.thickness),
    createData('Dimensions(WxDxH)', data[0].generalInformation["dimensions(WxDxH)"], data[1].generalInformation["dimensions(WxDxH)"], data[2].generalInformation["dimensions(WxDxH)"], data[3].generalInformation["dimensions(WxDxH)"]),
    createData('Weight', data[0].generalInformation.weight, data[1].generalInformation.weight, data[2].generalInformation.weight, data[3].generalInformation.weight),
    createData('Colour(s)', data[0].generalInformation["colour(s)"], data[1].generalInformation["colour(s)"], data[2].generalInformation["colour(s)"], data[3].generalInformation["colour(s)"]),
    createData('Operating System', data[0].generalInformation.operatingSystem, data[1].generalInformation.operatingSystem, data[2].generalInformation.operatingSystem, data[3].generalInformation.operatingSystem),
    createData('Display Details'),
    createData('Display Size', data[0].displayDetails.displaySize, data[1].displayDetails.displaySize, data[2].displayDetails.displaySize, data[3].displayDetails.displaySize),
    createData('Display Resolution', data[0].displayDetails.displayResolution, data[1].displayDetails.displayResolution, data[2].displayDetails.displayResolution, data[3].displayDetails.displayResolution),
    createData('Pixel Density', data[0].displayDetails.pixelDensity, data[1].displayDetails.pixelDensity, data[2].displayDetails.pixelDensity, data[3].displayDetails.pixelDensity),
    createData('Display Type', data[0].displayDetails.displayType, data[1].displayDetails.displayType, data[2].displayDetails.displayType, data[3].displayDetails.displayType),
    createData('Display Features', data[0].displayDetails.displayFeatures, data[1].displayDetails.displayFeatures, data[2].displayDetails.displayFeatures, data[3].displayDetails.displayFeatures),
    createData('TouchScreen', data[0].displayDetails.touchScreen, data[1].displayDetails.touchScreen, data[2].displayDetails.touchScreen, data[3].displayDetails.touchScreen),
    createData('Performance'),
    createData('Processor', data[0].performance.processor, data[1].performance.processor, data[2].performance.processor, data[3].performance.processor),
    createData('Clock Speed', data[0].performance.clockSpeed, data[1].performance.clockSpeed, data[2].performance.clockSpeed, data[3].performance.clockSpeed),
    createData('Graphic Processor', data[0].performance.graphicProcessor, data[1].performance.graphicProcessor, data[2].performance.graphicProcessor, data[3].performance.graphicProcessor),
    createData('Memory'),
    createData('Capacity', data[0].memory.capacity, data[1].memory.capacity, data[2].memory.capacity, data[3].memory.capacity),
    createData('Ram Type', data[0].memory.ramType, data[1].memory.ramType, data[2].memory.ramType, data[3].memory.ramType),
    createData('Memory Slots', data[0].memory.memorySlots, data[1].memory.memorySlots, data[2].memory.memorySlots, data[3].memory.memorySlots),
    createData('Memory Layout', data[0].memory.memoryLayout, data[1].memory.memoryLayout, data[2].memory.memoryLayout, data[3].memory.memoryLayout),
    createData('Storage'),
    createData('SSD Capacity', data[0].storage.ssdCapacity, data[1].storage.ssdCapacity, data[2].storage.ssdCapacity, data[3].storage.ssdCapacity),
    createData('Battery'),
    createData('Battery Cell', data[0].battery.batteryCell, data[1].battery.batteryCell, data[2].battery.batteryCell, data[3].battery.batteryCell),
    createData('Battery Type', data[0].battery.batteryType, data[1].battery.batteryType, data[2].battery.batteryType, data[3].battery.batteryType),
    createData('Power Supply', data[0].battery.powerSupply, data[1].battery.powerSupply, data[2].battery.powerSupply, data[3].battery.powerSupply),
    createData('Networking'),
    createData('Wireless LAN', data[0].networking.wirelessLAN, data[1].networking.wirelessLAN, data[2].networking.wirelessLAN, data[3].networking.wirelessLAN),
    createData('WIFI Version', data[0].networking.wifiVersion, data[1].networking.wifiVersion, data[2].networking.wifiVersion, data[3].networking.wifiVersion),
    createData('Bluetooth', data[0].networking.bluetooth, data[1].networking.bluetooth, data[2].networking.bluetooth, data[3].networking.bluetooth),
    createData('Bluetooth Version', data[0].networking.bluetoothVersion, data[1].networking.bluetoothVersion, data[2].networking.bluetoothVersion, data[3].networking.bluetoothVersion),
    createData('Ports'),
    createData('USB 2.0 Slots', data[0].ports["usb2.0slots"], data[1].ports["usb2.0slots"], data[2].ports["usb2.0slots"], data[3].ports["usb2.0slots"]),
    createData('Headphone Jack', data[0].ports.headphoneJack, data[1].ports.headphoneJack, data[2].ports.headphoneJack, data[3].ports.headphoneJack),
    createData('Microphone Jack', data[0].ports.microphoneJack, data[1].ports.microphoneJack, data[2].ports.microphoneJack, data[3].ports.microphoneJack),
    createData('Multimedia'),
    createData('Web Cam', data[0].multimedia.webcam, data[1].multimedia.webcam, data[2].multimedia.webcam, data[3].multimedia.webcam),
    createData('Video Recording', data[0].multimedia.videoRecording, data[1].multimedia.videoRecording, data[2].multimedia.videoRecording, data[3].multimedia.videoRecording),
    createData('Secondarycam (Rear-facing)', data[0].multimedia["secondarycam(Rear-facing)"], data[1].multimedia["secondarycam(Rear-facing)"], data[2].multimedia["secondarycam(Rear-facing)"], data[3].multimedia["secondarycam(Rear-facing)"]),
    createData('Speakers', data[0].multimedia.speakers, data[1].multimedia.speakers, data[2].multimedia.speakers, data[3].multimedia.speakers),
    createData('Inbuilt Microphone', data[0].multimedia.inbuiltMicrophone, data[1].multimedia.inbuiltMicrophone, data[2].multimedia.inbuiltMicrophone, data[3].multimedia.inbuiltMicrophone),
    createData('Microphone Type ', data[0].multimedia.microphoneType, data[1].multimedia.microphoneType, data[2].multimedia.microphoneType, data[3].multimedia.microphoneType),
    createData('Peripherals'),
    createData('Pointing Device', data[0].peripherals.pointingDevice, data[1].peripherals.pointingDevice, data[2].peripherals.pointingDevice, data[3].peripherals.pointingDevice),
    createData('Keyboard', data[0].peripherals.keyboard, data[1].peripherals.keyboard, data[2].peripherals.keyboard, data[3].peripherals.keyboard),
    createData('Backlit Keyboard', data[0].peripherals.backlitKeyboard, data[1].peripherals.backlitKeyboard, data[2].peripherals.backlitKeyboard, data[3].peripherals.backlitKeyboard),
    createData('Fingerprint Scanner', data[0].peripherals.fingerprintScanner, data[1].peripherals.fingerprintScanner, data[2].peripherals.fingerprintScanner, data[3].peripherals.fingerprintScanner),
    createData('Others'),
    createData('Warranty', data[0].others.warranty, data[1].others.warranty, data[2].others.warranty, data[3].others.warranty),
    createData('Sales Package', data[0].others.salesPackage, data[1].others.salesPackage, data[2].others.salesPackage, data[3].others.salesPackage),
]


const comp = (item) => {
    console.log("row.second", item)
    if (item && typeof item === 'string') {
        if (item.startsWith("https://yashyahiya-ecommerce")) {
            return true
        }
    } else {
        return false
    }
}
function SimpleTable(props) {
    const { classes } = props

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                {/* <TableHead>
                    <TableRow>

                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat (g)</TableCell>
                        <TableCell align="right">Carbs (g)</TableCell>
                        <TableCell align="right">Protein (g)</TableCell>
                    </TableRow>
                </TableHead> */}
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{
                                headerArray.includes(row.first) ?
                                    <Typography style={{ color: '#00BFFF' }} variant="h5">{row.first}</Typography>
                                    : row.first}
                            </TableCell>
                            <TableCell align="left">{
                                comp(row.second) ? <img
                                    className='images'
                                    height={200}
                                    width={200}
                                    src={row.second}
                                /> : row.second

                            }</TableCell>
                            <TableCell align="left">{
                                comp(row.third) ? <img
                                    className='images'
                                    height={200}
                                    width={200}
                                    src={row.third}
                                /> : row.third
                            }</TableCell>
                            <TableCell align="left">{
                                comp(row.fourth) ? <img
                                    className='images'
                                    height={200}
                                    width={200}
                                    src={row.fourth}
                                /> : row.fourth
                            }</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleTable)
