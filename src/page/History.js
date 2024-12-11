import React from "react";

function HotelCard() {
    return (
        <div
            style={{
                width: "50%",
                margin: "10px 45px",
                padding: "20px",
                border: "1px solid #e0e0e0",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                fontFamily: "'Arial', sans-serif",
                backgroundColor: "#fff",
                textAlign: "left",
            }}
        >
            <div style={{ marginBottom: "15px" }}>
                <h3 style={{ margin: 0, fontSize: "1.5rem", color: "#333" }}>
                    โรงแรมคุ้มภูคำ (Khum Phucome Hotel)
                </h3>
                <p style={{ margin: "5px 0", color: "#888" }}>
                    14/23 ถนนคันคลองชลประทาน ตำบลช้างเผือก เมืองเชียงใหม่ 50300, พันธุ์ทิพย์, เชียงใหม่, ไทย, 50300
                </p>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#FF9800" }}>
                    ★★★★☆ <span style={{ color: "#555" }}>Agoda Preferred</span>
                </p>
            </div>

            <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#555" }}>
                พักที่โรงแรมไม่มีคำตอบ คุ้มค่า พร้อมห้องพักหรูหรา 180 ห้อง และห้องประชุม จนเหมือนเพลิดเพลินไปกับธรรมชาติกลางแจ้ง พร้อมบริการอินเทอร์เน็ต Wi-Fi ฟรี
                และสิ่งอำนวยความสะดวกสำหรับการเดินทางที่เหมาะสำหรับผู้มาเยือนในเชียงใหม่ โรงแรมตั้งอยู่ในทำเลสะดวก สถานที่สำคัญในระยะใกล้เคียง รวมถึงดอยสุเทพ 
                และวัดพระธาตุดอยคำ ให้การพักผ่อนที่ผ่อนคลาย พร้อมสิ่งอำนวยความสะดวกครบครัน
            </p>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.6", color: "#007BFF", cursor: "pointer" }}>
                อ่านเพิ่มเติม...
            </p>
            
        </div>
    );
}

export default HotelCard;
