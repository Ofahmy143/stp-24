import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
import "./landing-page.css";
import pic1 from "../../../assets/recruitment-page/landing/web member recrut-07.png";
import pic2 from "../../../assets/recruitment-page/landing/web member recrut-06.png";
import pic3 from "../../../assets/recruitment-page/landing/web member recrut-05.png";

// Committee Title images
import ER from "../../../assets/recruitment-page/landing/web member recrut00-06.png";
import IR from "../../../assets/recruitment-page/landing/web member recrut00-07.png";
import AC from "../../../assets/recruitment-page/landing/web member recrut00-08.png";
import MM from "../../../assets/recruitment-page/landing/web member recrut00-09.png";
import Events from "../../../assets/recruitment-page/landing/web member recrut00-10.png";

// Subdivision Title images
import TechnicalTeam from "../../../assets/recruitment-page/landing/web member recrut00-11.png";
import PublicRelations from "../../../assets/recruitment-page/landing/web member recrut00-12.png";
import BusinessDevelopment from "../../../assets/recruitment-page/landing/web member recrut00-13.png";
import Logistics from "../../../assets/recruitment-page/landing/web member recrut00-14.png";
import DCR from "../../../assets/recruitment-page/landing/web member recrut00-15.png";
import HRandQC from "../../../assets/recruitment-page/landing/web member recrut00-16.png";
import Juniors from "../../../assets/recruitment-page/landing/web member recrut00-17.png";
import Freelancing from "../../../assets/recruitment-page/landing/web member recrut00-18.png";
import Engineering from "../../../assets/recruitment-page/landing/web member recrut00-19.png";
import SocialMedia from "../../../assets/recruitment-page/landing/web member recrut00-20.png";
import Media from "../../../assets/recruitment-page/landing/web member recrut00-21.png";
import Software from "../../../assets/recruitment-page/landing/web member recrut00-22.png";
import GraphicDesign from "../../../assets/recruitment-page/landing/web member recrut00-23.png";
import Podcast from "../../../assets/recruitment-page/landing/web member recrut00-22.png";





// Type for theater card props
// Type for committee props

export function TheaterCard({ cardTitle }: { cardTitle: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
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
                    {/* <h1 id="card-title">{cardTitle}</h1> */}
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
                        <li>
                            Build and execute social media strategy to market
                            STP’s projects (in coordination with the Media and
                            Graphic design committees)
                        </li>
                        <li>
                            Generate, edit, publish and share engaging regular
                            content
                        </li>
                        <li>
                            Analyze engagement and reaction to posts in order to
                            constantly improve
                        </li>
                    </ul>
                    <button id="apply-btn" onClick={navigateToForm}>Apply</button>
                </>
            )}
        </div>
    );
}

export function Committee({
    committeeImg,
    titles,
}: {
    committeeImg: string;
    titles: string[];
}) {
    return (
        <div id="committee">
            {/* <h1>Committee</h1> */}
            <img id="committee-title-img" src={committeeImg} alt="" />
            <div id="committee-cards">
                {titles.map((title) => (
                    <TheaterCard cardTitle={title} />
                ))}
            </div>
        </div>
    );
}

function LandingPage() {
    
    return (
        <div id="recruitment-landing-page">
            <div id="header-contain">
                <img id="header" src={pic1} alt="header" />
            </div>
            <div id="contain">
                {/* <img id="grey-background" src={pic2} alt="background gray" /> */}
                <div id="foreground">
                    <Committee
                        committeeImg={MM}
                        titles={[
                            SocialMedia,
                            Media,
                            GraphicDesign,
                            Podcast,
                            Software
                        ]}
                    />
                    <Committee
                        committeeImg={AC}
                        titles={[Freelancing, Engineering, Juniors]}
                    />
                    <Committee
                        committeeImg={IR}
                        titles={[Logistics, DCR, HRandQC]}
                    />
                    <Committee
                        committeeImg={ER}
                        titles={[PublicRelations, BusinessDevelopment]}
                    />
                    <Committee
                        committeeImg={Events}
                        titles={[TechnicalTeam]}
                    />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
