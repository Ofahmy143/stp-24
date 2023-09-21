import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import puzzleUp from "../../../assets/orientation/Form/puxxle-up.svg";
import puzzleDown from "../../../assets/orientation/Form/puxxle-down.svg";
import SubmitBtn from "../../../assets/orientation/Form/Submit-Button.svg";
import Success from "../../../assets/orientation/Form/success.png";
import StpLogo from "../../../assets/orientation/landing-page/stp-logo.svg";
import LevelUp from "../../../assets/orientation/Form/levelup-yellow.svg";

import {
    StpLogoSvg,
    LevelupSvg,
    LandingNav,
} from "../landingPage/landingPage.styles";
import { useState } from "react";
import { OrganizationUser } from "../../../types";
import axios from "axios";

export const sizes = {
    mobile: "320px",
    tablet: "768px",
    laptop: "1024px",
    desktop: "2560px",
};

export const devices = {
    mobile: `(max-width: ${sizes.mobile})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(max-width: ${sizes.laptop})`,
    desktop: `(max-width: ${sizes.desktop})`,
};

const PuzzleUpForm = styled.img`
    position: absolute;
    right: 20%;
    @media ${devices.laptop} {
        width: 25%;
        right: 10%;
        bottom: 30%;
    }
    @media ${devices.tablet} {
        width: 25%;
    }
`;

const PuzzleDownForm = styled.img`
    position: absolute;
    left: 30%;
    bottom: 20%;
    @media ${devices.laptop} {
        width: 25%;
        left: 10%;
    }
    @media ${devices.tablet} {
        width: 25%;
    }
`;

const OrientationFormWrap = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #7d142e;
    display: flex;
    gap: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const OrientationFormInput = styled.input`
    width: 80%;
    padding: 10px;
    background-color: #b1c5cd;
    font-size: 24px;
    border: 3px solid #1b1c1d;
    &::placeholder {
        font-family: "Be Vietnam Pro Light";
        color: #1b1c1d;
        /* font-size: 1em; */
        text-align: center;
    }
`;
const PhoneInput = styled.div`
    width: calc(80% + 23px);
    margin: 0;
    display: flex;
    border: 3px solid #1b1c1d;
    align-items: center;
    font-size: 24px;
    font-family: "Be Vietnam Pro Light";
    & span {
        /* width: 5%; */
        padding: 10px;
        height: auto;
        background-color: #f5e9c6;
    }
    & input {
        border-bottom: none;
        border-top: none;
        border-right: none;
        border-left: 3px solid #1b1c1d;

        font-size: 24px;
        background-color: #b1c5cd;
        width: 100%;
        padding: 10px;
        &::placeholder {
            font-family: "Be Vietnam Pro Light";
            color: #1b1c1d;
            /* font-size: 1em; */
            text-align: left;
        }
    }
`;

const SubmitButton = styled.img`
    width: 15%;
    z-index: 2;
    &:hover {
        filter: drop-shadow(10px 5px 10px #f5e9c6);
    }
    &:active {
        transform: scale(0.9);
        filter: drop-shadow(7px 5px 10px #f5e9c6);
    }
    @media ${devices.laptop} {
        width: 25%;
    }
    @media ${devices.tablet} {
        width: 40%;
    }
`;

const OrientationFormBox = styled.div`
    width: 45%;
    z-index: 1;
    /* padding: 20px; */
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    @media (max-width: 1600px) {
        width: 60%;
    }
    @media ${devices.laptop} {
        width: 90%;
    }
`;

const SuccessMessage = styled.img`
    z-index: 10;
`;

export const OrientationForm = () => {
    const [requestData, setRequestData] = useState<OrganizationUser>({
        name: "",
        phoneNumber: "",
        email: "",
        areaOfResidency: "",
    } as OrganizationUser);
    const [success, setSuccess] = useState<boolean>(false);

    const showErrorToastMessage = () => {
        toast.error("Error: can't register twice", {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    const submitHandle = async () => {
        const API_URL =
            "https://stp-24.onrender.com/member-registration/add-user";
        // console.warn(requestData);

        try {
            const response = await axios.post(API_URL, requestData);
            console.warn({ data: response });
            setSuccess(true);
        } catch (error) {
            showErrorToastMessage();
            console.error((error as Error).message);
        }
    };

    return (
        <OrientationFormWrap>
            <LandingNav>
                <StpLogoSvg src={StpLogo} />
                <LevelupSvg src={LevelUp} />
            </LandingNav>
            <PuzzleUpForm src={puzzleUp} />
            <PuzzleDownForm src={puzzleDown} />
            {!success && (
                <>
                    <OrientationFormBox>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                        
                        
                        <OrientationFormInput
                            type="text"
                            placeholder="Name"
                            onChange={(e) => {
                                setRequestData({
                                    ...requestData,
                                    name: e.target.value,
                                });
                            }}
                        />
                        <PhoneInput>
                            <span>+20</span>
                            <input
                                pattern=""
                                type="text"
                                placeholder="phone"
                                onChange={(e) => {
                                    setRequestData({
                                        ...requestData,
                                        phoneNumber: e.target.value,
                                    });
                                }}
                            />
                        </PhoneInput>
                        <OrientationFormInput
                            type="email"
                            placeholder="email"
                            onChange={(e) => {
                                setRequestData({
                                    ...requestData,
                                    email: e.target.value,
                                });
                            }}
                        />
                        <OrientationFormInput
                            type="text"
                            placeholder="area of residence"
                            onChange={(e) => {
                                setRequestData({
                                    ...requestData,
                                    areaOfResidency: e.target.value,
                                });
                            }}
                        />
                    </OrientationFormBox>
                    <SubmitButton src={SubmitBtn} onClick={submitHandle} />
                </>
            )}
            {success && (
                <>
                    <SuccessMessage src={Success} />
                </>
            )}
        </OrientationFormWrap>
    );
};
