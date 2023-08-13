import "./theater-cards.css";
// import pic2 from "../../../assets/recruitment-page/landing/web-member-recrut-06.png";
// import pic2 from "../../../../assets/recruitment-page/landing/web-member-recrut-06.png";
import pic2 from "../../../../assets/recruitment-page/landing/web-member-recrut-back-curtain.png";

import pic3 from "../../../../assets/recruitment-page/landing/web-member-recrut-05.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function TheaterCard({ cardTitle, bulletPoints }: { cardTitle: string, bulletPoints: string[] }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    // console.log({bulletPoints});
    function navigateToForm(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        navigate("/recruitment-form");
    }
    function toggleCurtain(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        setIsOpen(true);
    }

    return (
        <div id="theater-card" onMouseOver={toggleCurtain}>
            {!isOpen ? (
                <>
                    <img
                        id="closed-curtain"
                        // className={isOpen ? "close" : ""}
                        src={pic3}
                        alt=""
                    />
                    <img id="card-title" src={cardTitle} alt="" />
                </>
            ) : (
                <>
                    <img
                        id="opened-curtain"
                        // className={isOpen ? "open" : ""}
                        src={pic2}
                        alt=""
                    />
                    <ul id="card-list">
                        {bulletPoints.map((bulletPoint: string, index: number) => (
                            <li key={index}>{bulletPoint}</li>
                        ))}
                        
                    </ul>
                    <button id="apply-btn" onClick={navigateToForm}>
                        Apply
                    </button>
                </>
            )}
        </div>
    );
}