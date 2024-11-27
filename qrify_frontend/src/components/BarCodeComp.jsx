import React, { useRef, useState } from "react";
import '../style/BarCodeCompDesign.css'
import axios from "axios";

const BarCodeComp = () => {
    const encodeData = useRef()
    const barcodesection = useRef()

    const [barcodepath, setBarCodepath] = useState()
    const [selectedType,setSelectedType] = useState("EAN13")
    
    const BarCodeTypeSelected=(e)=>{
        const selectedValue = e.target.value;
        setSelectedType(selectedValue)
    }

    const BarCodeGenerateBTNClicked = async () => {
        
        const data = { barData: encodeData.current.value, barType: selectedType, }
    
        if (encodeData.current.value !== "" && selectedType !== "") {
            const response = await axios.post(
                "http://127.0.0.1:8000/barcode",
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.status === 200 && response.statusText === "OK") {
                barcodesection.current.style.display = "flex"
                setBarCodepath(response.data.FilePath)
            }
        }
    }

    return (
        <div className="barcode-container">
            <p className="h3 barheading">Generate BarCode</p>
            <div className="mb-3 input-text-section">
                <p className="form-label text-label">It can create BarCode of different kids such as EAN8, EAN13, UPC, Code39, Code128, ITF.</p>
                <label htmlFor="exampleInputEmail1" className="form-label text-label">Encode Data</label>
                <input type="text" placeholder="Ex : 647362882773" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={encodeData} />
                <div className="dropdown-container">
                    <p className="form-label text-label">Select Type</p>
                    <select className="dropdown" value="EAN13" onChange={BarCodeTypeSelected}>
                        <option value="EAN13">EAN13</option>
                        <option value="EAN8">EAN8</option>
                        <option value="UPC">UPC</option>
                        <option value="Code39">Code39</option>
                        <option value="Code128">Code128</option>
                        <option value="ITF">ITF</option>
                    </select>
                </div>
                <button type="button" className="barcodeGenerate-btn" onClick={BarCodeGenerateBTNClicked}>BarCode Generate</button>
            </div>

            <div className="bar-display-section" ref={barcodesection}>
                <a href="http://127.0.0.1:8000/barcodedownload" download>download</a>
                <img src={barcodepath} alt="barcode" />
            </div>
        </div>
    )
}

export default BarCodeComp