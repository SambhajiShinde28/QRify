import React, { useRef, useState } from "react";
import '../style/QRCodeCompDesign.css'
import axios from "axios";

const QRCodeComp = () => {

    const encodeData=useRef()
    const qrsection=useRef()

    const [qrpath,setQRpath]=useState()

    const QRGenerateBTNClicked=async()=>{
        
        const data={qrdata:encodeData.current.value}
        if (encodeData.current.value !== "") {
            const response = await axios.post(
                "http://127.0.0.1:8000/qrcode",
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            
            if (response.status===200 && response.statusText==="OK") {
                qrsection.current.style.display="flex"
                setQRpath(response.data.FilePath)
            }
        }
    }

    return (
        <div className="qrcode-container">
            <p className="h3 qrheading">Generate QR-Code</p>
            <div className="mb-3 input-text">
                <label htmlFor="exampleInputEmail1" className="form-label text-label">Encode Data</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={encodeData} />
                <button type="button" className="qrGenerate-btn" onClick={QRGenerateBTNClicked}>QR Generate</button>
            </div>
            
            <div className="qr-display-section" ref={qrsection}>
                <a href="http://127.0.0.1:8000/qrcodedownload" download>download</a>
                <img src={qrpath} alt="qrcode" />
            </div>
        </div>
    )
}

export default QRCodeComp