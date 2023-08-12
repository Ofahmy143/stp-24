import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
import "./landing-page.css";
import pic1 from "../../../assets/recruitment-page/landing/web-member-recrut-07.png";
import pic2 from "../../../assets/recruitment-page/landing/web-member-recrut-06.png";
import pic3 from "../../../assets/recruitment-page/landing/web-member-recrut-05.png";

// Committee Title images
import ER from "../../../assets/recruitment-page/landing/web-member-recrut00-06.png";
import IR from "../../../assets/recruitment-page/landing/web-member-recrut00-07.png";
import AC from "../../../assets/recruitment-page/landing/web-member-recrut00-08.png";
import MM from "../../../assets/recruitment-page/landing/web-member-recrut00-09.png";
import Events from "../../../assets/recruitment-page/landing/web-member-recrut00-10.png";

// Subdivision Title image-
import TechnicalTeam from "../../../assets/recruitment-page/landing/web-member-recrut00-11.png";
import PublicRelations from "../../../assets/recruitment-page/landing/web-member-recrut00-12.png";
import BusinessDevelopment from "../../../assets/recruitment-page/landing/web-member-recrut00-13.png";
import Logistics from "../../../assets/recruitment-page/landing/web-member-recrut00-14.png";
import DCR from "../../../assets/recruitment-page/landing/web-member-recrut00-15.png";
import HRandQC from "../../../assets/recruitment-page/landing/web-member-recrut00-16.png";
import Juniors from "../../../assets/recruitment-page/landing/web-member-recrut00-17.png";
import Freelancing from "../../../assets/recruitment-page/landing/web-member-recrut00-18.png";
import Engineering from "../../../assets/recruitment-page/landing/web-member-recrut00-19.png";
import SocialMedia from "../../../assets/recruitment-page/landing/web-member-recrut00-20.png";
import Media from "../../../assets/recruitment-page/landing/web-member-recrut00-21.png";
import Software from "../../../assets/recruitment-page/landing/web-member-recrut00-22.png";
import GraphicDesign from "../../../assets/recruitment-page/landing/web-member-recrut00-23.png";
import Podcast from "../../../assets/recruitment-page/landing/web-member-recrut00-22.png";
import { jobDescription, specificJobDescription } from "./jobDescriptions";



// Type for theater card props
// Type for committee props


export function TheaterCard({ cardTitle, bulletPoints }: { cardTitle: string, bulletPoints: string[] }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    console.log({bulletPoints});
    function navigateToForm(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        navigate("/stp-24/recruitment-form");
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

export function Committee({
    committeeImg,
    titles,
    descriptions
}: {
    committeeImg: string;
    titles: string[];
    descriptions: specificJobDescription;
}) {
    const descriptionKeys: string[] = Object.keys(descriptions);

    return (
        <div id="committee">
            <img id="committee-title-img" src={committeeImg} alt="" />
            <div id="committee-cards">
                {titles.map((title: string, index: number) => (
                    <TheaterCard cardTitle={title} key={index} bulletPoints={(descriptions as any)[descriptionKeys[index]]}  />
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
                            Software,
                        ]}
                        descriptions={jobDescription.MM}
                    />
                    <Committee
                        committeeImg={AC}
                        titles={[Freelancing, Engineering, Juniors]}
                        descriptions={jobDescription.AC}
                    />
                    <Committee
                        committeeImg={IR}
                        titles={[Logistics, DCR, HRandQC]}
                        descriptions={jobDescription.IR}
                    />
                    <Committee
                        committeeImg={ER}
                        titles={[PublicRelations, BusinessDevelopment]}
                        descriptions={jobDescription.ER}
                    />
                    <Committee committeeImg={Events} titles={[TechnicalTeam]} descriptions={jobDescription.Events} />

                </div>
            </div>
        </div>
    );
}

export default LandingPage;
