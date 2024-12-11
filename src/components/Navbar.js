import React from "react";
import logo from "./img/1.jpg"; 

function Navbar() {
    return (
        <div className="row" style={{ padding: "0 20px" }}>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#2E1A83", padding: "0 20px" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" style={{ width: "50px", borderRadius: "5px" }} />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ justifyContent: "center", flex: 1 }}>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "white" }} href="#">งานแต่ง</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "white" }} href="#">ที่พัก</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "white" }} href="#">ร้านอาหาร</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ color: "white" }} href="#">ประชุมสัมมนา</a>
                            </li>
                        </ul>
                        <a
                            href="#"
                            className="btn btn-warning"
                            style={{ backgroundColor: "#FFD700", color: "black", fontWeight: "bold" }}
                        >
                            ดูห้องพัก
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
