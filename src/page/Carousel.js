import React from "react";
import "./Carousel.css";

function Carousel() {
    return (
        <div className="carousel-container">
            <div className="banner">
                <div className="banner-text">
                    <h2>KHUM PHUCOME</h2>
                    <p>CHIANG MAI</p>
                </div>
            </div>

            <div className="card-container">
                <div className="card">
                    <img
                        src="/img/2.jpg" // รูปภาพที่อยู่ใน public/img
                        className="card-img-top"
                        alt="เดินทางมาคุ้มภูคำง่ายนิดเดียว"
                    />
                    
                </div>

                <div className="card">
                    <img
                        src="/img/3.jpeg" // รูปภาพที่อยู่ใน public/img
                        className="card-img-top"
                        alt="สถานที่ใกล้สุดฮิตของคนชิคๆ"
                    />
                   
                </div>

                <div className="card">
                    <img
                        src="/img/4.jpg" // รูปภาพที่อยู่ใน public/img
                        className="card-img-top"
                        alt="มาเป็นเพื่อนกันเถอะ!"
                    />
                   
                </div>
            </div>
        </div>
    );
}

export default Carousel;
