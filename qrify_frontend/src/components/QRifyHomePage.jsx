import React from "react";
import '../style/QRifyHomePageDesign.css'
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const QRifyHomePage = () => {
    return (
        <div className="main-container">
            <div className="sidebar">
                <h1 className="title">QRify</h1>
                <ul className="nav flex-column">
                    <Link to="/qrcode" className="linkName">
                        <li className="nav-item">
                            <p className="nav-link">QR Code</p>
                        </li>
                    </Link>

                    <Link to="/barcode" className="linkName">
                        <li className="nav-item">
                            <p className="nav-link">Bar Code</p>
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="content">
                <div className="permenent-data">
                    <h1 className="content-title">Welcome to QRify</h1>
                    <p>QRify is a powerful and user-friendly web app for generating various types of QR codes and barcodes, including URLs, text, emails, contact details, geolocations, events, and more. With the ability to download and share your generated codes, QRify simplifies the process of creating scannable codes for personal or business use. Secure, efficient, and customizable, QRify is your go-to tool for all things related to QR and barcode generation.</p>
                </div>

                <div className="qr-barcode-section">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

export default QRifyHomePage