import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import Typography from '@mui/material/Typography'
import TableHead from '@material-ui/core/TableHead'
import Autocomplete from '@mui/material/Autocomplete'
import { Box } from '@material-ui/core'
import Select from '@mui/material/Select'
// or

import InputAdornment from '@mui/material/InputAdornment'
// or

import MenuItem from '@material-ui/core/MenuItem'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import TextField from '@mui/material/TextField'
import axios from 'axios'


import data from "./data"
import { useEffect } from 'react'
const styles = theme => ({
    root: {
        // width: '100%',
        // marginTop: theme.spacing.unit * 3,
        // overflowX: 'auto',
        display: 'flex',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        // overflowX: 'hide',
    },
    table: {
        minWidth: 700,
    }
})

const top100Films = [


]

let baseUrl = "http://localhost:4000"


function SimpleTable(props) {



    let id = 0
    function createData(first, second, third, fourth) {
        id += 1
        return { id, first, second, third, fourth }
    }
    const [first, setfirst] = useState(null)
    const [second, setsecond] = useState(null)
    const [options, setOptions] = useState([])
    const [products, setProducts] = useState([])


    const [search1, setSearch1] = useState(null)
    const [search2, setSearch2] = useState(null)

    useEffect(() => {
        console.log("in................................................................")
        // setfirst(data[0])
        // setsecond(data[1])

    }, [])




    let headerArray = ["Search", 'General Informations', 'Display Details', 'Performance', "Memory", "Storage", "Battery", "Networking", "Ports", "Multimedia", "Peripherals", "Others"]
    const rows = [

        createData('', "Search", "Search"),
        createData('General Informations'),
        createData('Images', first?.images[0], second?.images[0]),
        createData('Name', first?.name.substring(0, 20) + ".....", second?.name.substring(0, 20) + "....."),
        createData('Price', first?.price + " rs", second?.price + " rs"),
        createData('Brand', first?.brand, second?.brand),
        createData('Category', first?.category, second?.category),
        createData('Model', first?.generalInformation.model, second?.generalInformation.model),
        createData('Thickness', first?.generalInformation.thickness, second?.generalInformation.thickness),
        createData('Dimensions(WxDxH)', first?.generalInformation["dimensions(WxDxH)"], second?.generalInformation["dimensions(WxDxH)"]),
        createData('Weight', first?.generalInformation.weight, second?.generalInformation.weight),
        createData('Colour(s)', first?.generalInformation["colour(s)"], second?.generalInformation["colour(s)"]),
        createData('Operating System', first?.generalInformation.operatingSystem, second?.generalInformation.operatingSystem),
        createData('Display Details'),
        createData('Display Size', first?.displayDetails.displaySize, second?.displayDetails.displaySize),
        createData('Display Resolution', first?.displayDetails.displayResolution, second?.displayDetails.displayResolution),
        createData('Pixel Density', first?.displayDetails.pixelDensity, second?.displayDetails.pixelDensity),
        createData('Display Type', first?.displayDetails.displayType, second?.displayDetails.displayType),
        createData('Display Features', first?.displayDetails.displayFeatures, second?.displayDetails.displayFeatures),
        createData('TouchScreen', first?.displayDetails.touchScreen, second?.displayDetails.touchScreen),
        createData('Performance'),
        createData('Processor', first?.performance.processor, second?.performance.processor),
        createData('Clock Speed', first?.performance.clockSpeed, second?.performance.clockSpeed),
        createData('Graphic Processor', first?.performance.graphicProcessor, second?.performance.graphicProcessor),
        createData('Memory'),
        createData('Capacity', first?.memory.capacity, second?.memory.capacity),
        createData('Ram Type', first?.memory.ramType, second?.memory.ramType),
        createData('Memory Slots', first?.memory.memorySlots, second?.memory.memorySlots),
        createData('Memory Layout', first?.memory.memoryLayout, second?.memory.memoryLayout),
        createData('Storage'),
        createData('SSD Capacity', first?.storage.ssdCapacity, second?.storage.ssdCapacity),
        createData('Battery'),
        createData('Battery Cell', first?.battery.batteryCell, second?.battery.batteryCell),
        createData('Battery Type', first?.battery.batteryType, second?.battery.batteryType),
        createData('Power Supply', first?.battery.powerSupply, second?.battery.powerSupply),
        createData('Networking'),
        createData('Wireless LAN', first?.networking.wirelessLAN, second?.networking.wirelessLAN,),
        createData('WIFI Version', first?.networking.wifiVersion, second?.networking.wifiVersion),
        createData('Bluetooth', first?.networking.bluetooth, second?.networking.bluetooth),
        createData('Bluetooth Version', first?.networking.bluetoothVersion, second?.networking.bluetoothVersion),
        createData('Ports'),
        createData('USB 2.0 Slots', first?.ports["usb2.0slots"], second?.ports["usb2.0slots"]),
        createData('Headphone Jack', first?.ports.headphoneJack, second?.ports.headphoneJack),
        createData('Microphone Jack', first?.ports.microphoneJack, second?.ports.microphoneJack),
        createData('Multimedia'),
        createData('Web Cam', first?.multimedia.webcam, second?.multimedia.webcam),
        createData('Video Recording', first?.multimedia.videoRecording, second?.multimedia.videoRecording),
        createData('second?arycam (Rear-facing)', first?.multimedia["second?arycam(Rear-facing)"], second?.multimedia["second?arycam(Rear-facing)"]),
        createData('Speakers', first?.multimedia.speakers, second?.multimedia.speakers),
        createData('Inbuilt Microphone', first?.multimedia.inbuiltMicrophone, second?.multimedia.inbuiltMicrophone),
        createData('Microphone Type ', first?.multimedia.microphoneType, second?.multimedia.microphoneType),
        createData('Peripherals'),
        createData('Pointing Device', first?.peripherals.pointingDevice, second?.peripherals.pointingDevice),
        createData('Keyboard', first?.peripherals.keyboard, second?.peripherals.keyboard),
        createData('Backlit Keyboard', first?.peripherals.backlitKeyboard, second?.peripherals.backlitKeyboard),
        createData('Fingerprint Scanner', first?.peripherals.fingerprintScanner, second?.peripherals.fingerprintScanner),
        createData('Others'),
        createData('Warranty', first?.others.warranty, second?.others.warranty),
        createData('Sales Package', first?.others.salesPackage, second?.others.salesPackage),
    ]

    const comp = (item) => {
        // console.log("row.second?", item)
        if (item && typeof item === 'string') {
            if (item.startsWith("https://yashyahiya-ecommerce")) {
                return true
            }
        } else {
            return false
        }
    }

    const handleSearch1 = (e) => {
        setSearch1(e.target.value)
    }

    const handleSearch2 = (e) => {
        setSearch2(e.target.value)
    }

    const submitSearch1 = async (e) => {
        // console.log("submitSearch", e)
        try {

            if (e.code == "Enter") {
                console.log("search1", search1)
                const res = await axios.get(`${baseUrl}/search-product?searchBy=name&value=${search1}`)
                console.log("data from searc api1", res)
                if (res.status == 200) {
                    // setfirst(res?.data?.data[0])

                    let names = res?.data?.data.map(prod =>
                        prod.name
                    )
                    setOptions(names)
                    setProducts(res?.data?.data)
                    console.log("options", options)
                } else {
                    alert("No products Founds")
                }
                console.log("setted search1", search1)
            }
        } catch (err) {
            console.log(err)
            alert("Somrthing went wrong ")
        }
    }

    const submitSearch2 = async (e) => {
        // console.log("submitSearch", e)
        try {

            if (e.code == "Enter") {
                console.log("search2", search2)
                const res = await axios.get(`${baseUrl}/search-product?searchBy=name&value=${search2}`)
                console.log("data from searc api2", res)
                if (res.status == 200) {
                    // setsecond(res?.data?.data[0])
                    let names = res?.data?.data.map(prod =>
                        prod.name
                    )
                    setOptions(names)
                    setProducts(res?.data?.data)
                    console.log("options", options)
                } else {
                    alert("No products Founds")
                }
                console.log("setted search2", search2)
            }
        } catch (err) {
            console.log(err)
            alert("Somrthing went wrong ")
        }
    }

    const handleAutocomplete1 = (e) => {
        // console.log("handleAutocomplete1", e.target)

        setfirst(products[e?.target?.dataset?.optionIndex])
        setOptions([])
        setProducts([])
    }

    const handleAutocomplete2 = (e) => {
        // console.log("handleAutocomplete2", e)
        setsecond(products[e?.target?.dataset?.optionIndex])
        setOptions([])
        setProducts([])
    }
    const classes = styles
    // console.log("first?", first)
    // console.log("second?", second)
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "75%", overflow: "auto", backgroundColor: "#fff", display: "flex", justifyContent: "center" }}>
                <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
                    <Table className={classes.table} sx={{ backgroundColor: "#fff", padding: "1rem", marginTop: "1rem", height: "auto" }}>

                        {/* <TableHead>
                    <TableRow>

                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat (g)</TableCell>
                        <TableCell align="right">Carbs (g)</TableCell>
                        <TableCell align="right">Protein (g)</TableCell>
                    </TableRow>
                </TableHead> */}
                        <TableBody
                        // sx={{
                        //     display: "flex",
                        //     backgroundColor: "",
                        //     flexWrap: "wrap",
                        // }}
                        >
                            {rows.map(row => (
                                <TableRow key={row.id}>
                                    {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" >ads</TextField> */}
                                    <TableCell align="left">

                                    </TableCell>
                                    <TableCell align="left">{

                                        row.first == "Search" ? (<TextField id="outlined-basic" label="Outlined" variant="outlined" >



                                        </TextField>) : headerArray.includes(row.first) ?
                                            <Typography style={{ color: '#00BFFF' }} variant="h5">{row.first}</Typography>
                                            : row.first}
                                    </TableCell>
                                    <TableCell align="left">{
                                        row.second == "Search" ? (

                                            <Autocomplete

                                                disablePortal
                                                id="combo-box-demo"
                                                options={options}
                                                sx={{ width: 300 }}
                                                renderInput={(params) => <TextField {...params} onChange={handleSearch1} onKeyDown={submitSearch1} label="Product" />}
                                                onChange={handleAutocomplete1}
                                                onKeyDown={submitSearch1}
                                            ></Autocomplete>)

                                            : comp(row.second) ? <img
                                                className='images'
                                                height={200}
                                                width={200}
                                                src={row.second}
                                            /> : row.second

                                    }</TableCell>
                                    <TableCell align="left">{
                                        row.third == "Search" ?
                                            (
                                                <Autocomplete

                                                    disablePortal
                                                    id="combo-box-demo"
                                                    options={options}
                                                    sx={{ width: 300 }}
                                                    renderInput={(params) => <TextField {...params} onChange={handleSearch2} onKeyDown={submitSearch2} label="Product" />}
                                                    onChange={handleAutocomplete2}
                                                    onKeyDown={submitSearch2}
                                                ></Autocomplete>
                                            ) : comp(row.third) ? <img
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
                </Box >
            </Box >
        </div>
    )
}



export default SimpleTable
