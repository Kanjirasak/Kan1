import React from "react";

function Amenities() {
    return (
        <div style={{ width: "80%", margin: "30px 0", fontFamily: "'Arial', sans-serif" }}>
            
            <div
                style={{
                    width: "62%",
                    margin: "10px 45px",  // กำหนดให้กรอบชิดซ้าย (margin: 10px 0 จะทำให้กรอบไม่ถูกดันไปทางขวา)
                    padding: "20px",
                    border: "1px solid #e0e0e0",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#fff",
                    marginBottom: "30px",
                    textAlign: "left", // ทำให้เนื้อหาภายในกรอบชิดซ้าย
                }}
            >
                <h3 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "10px" }}>
                    ที่พักให้บริการข้อเสนอ Staycation
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "20px" }}>
                    รับสิทธิประโยชน์สุดพิเศษสำหรับการเข้าพักได้เลย
                </p>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                    }}
                >
                    <div style={{ flex: "1 1 30%", marginBottom: "10px" }}>
                        <h4 style={{ fontSize: "1rem", color: "#333", marginBottom: "10px" }}>
                            อาหารและเครื่องดื่ม
                        </h4>
                        <ul style={{ listStyleType: "none", padding: 0, fontSize: "0.9rem", color: "#555", textAlign: "left" }}>
                            <li>✔ รูมเซอร์วิส 24 ชั่วโมง</li>
                            <li>✔ คอฟฟี่ช็อป</li>
                            <li>✔ แชมเปญเซอร์วิสของที่พัก</li>
                        </ul>
                    </div>

                    <div style={{ flex: "1 1 30%", marginBottom: "10px" }}>
                        <h4 style={{ fontSize: "1rem", color: "#333", marginBottom: "10px" }}>
                            บริการด้านสุขภาพ
                        </h4>
                        <ul style={{ listStyleType: "none", padding: 0, fontSize: "0.9rem", color: "#555", textAlign: "left" }}>
                            <li>✔ ห้องฟิตเนส</li>
                            <li>✔ บริการนวด</li>
                            <li>✔ ห้องเล่นโยคะ</li>
                        </ul>
                    </div>

                    <div style={{ flex: "1 1 30%", marginBottom: "10px" }}>
                        <h4 style={{ fontSize: "1rem", color: "#333", marginBottom: "10px" }}>
                            กิจกรรม
                        </h4>
                        <ul style={{ listStyleType: "none", padding: 0, fontSize: "0.9rem", color: "#555", textAlign: "left" }}>
                            <li>✔ กิจกรรม</li>
                            <li>✔ สระว่ายน้ำ</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                style={{
                    width: "62%",
                    margin: "10px 45px",  // กำหนดให้กรอบชิดซ้าย (margin: 10px 0 จะทำให้กรอบไม่ถูกดันไปทางขวา)
                    padding: "20px",
                    border: "1px solid #e0e0e0",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#fff",
                    marginBottom: "30px",
                    textAlign: "left",
                }}
            >
                <h3 style={{ fontSize: "1.5rem", color: "#333", marginBottom: "10px" }}>
                    สิ่งอำนวยความสะดวก
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                    <ul
                        style={{
                            listStyleType: "none",
                            padding: 0,
                            fontSize: "0.9rem",
                            color: "#555",
                            flex: "1 1 30%",
                            textAlign: "left", // ชิดซ้าย
                        }}
                    >
                        <li>✔ แผนกต้อนรับ (24 ชั่วโมง)</li>
                        <li>✔ บริการรับส่งสนามบิน</li>
                        <li>✔ รักษาความให้เช่า</li>
                    </ul>
                    <ul
                        style={{
                            listStyleType: "none",
                            padding: 0,
                            fontSize: "0.9rem",
                            color: "#555",
                            flex: "1 1 30%",
                            textAlign: "left", // ชิดซ้าย
                        }}
                    >
                        <li>✔ สระว่ายน้ำกลางแจ้ง</li>
                        <li>✔ ห้องฟิตเนส</li>
                        <li>✔ บริการรถรับส่ง</li>
                    </ul>
                    <ul
                        style={{
                            listStyleType: "none",
                            padding: 0,
                            fontSize: "0.9rem",
                            color: "#555",
                            flex: "1 1 30%",
                            textAlign: "left", // ชิดซ้าย
                        }}
                    >
                        <li>✔ บริการนำรถไปจอดให้</li>
                        <li>✔ Wi-Fi ทุกห้อง (ฟรี)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Amenities;
