import React from "react";
import "./HotelCard.css";

function HotelCard() {
    return (
        <div className="hotel-card">
            <div className="rating-section">
                <h2 className="rating">8.9 <span className="rating-label">ดีเยี่ยม</span></h2>
                <p className="reviews">2,592 รีวิว</p>
            </div>
            <div className="scores">
                <div className="score">
                    <span className="score-label">ความสะอาด</span>
                    <span className="score-value">8.5</span>
                </div>
                <div className="score">
                    <span className="score-label">การให้บริการของพนักงาน</span>
                    <span className="score-value">9.9</span>
                </div>
            </div>
            <div className="reviews-highlight">
                <button className="review-tag">“สระว่ายน้ำสะอาด เด็กๆ เล่นได้”</button>
                <button className="review-tag">“ห้องพักน่านอน”</button>
            </div>
        </div>
    );
}

export default HotelCard;
