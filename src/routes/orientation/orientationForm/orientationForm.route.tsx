import styled from "styled-components";

import puzzleUp from "../../../assets/orientation/Form/puxxle-up.svg";
import puzzleDown from "../../../assets/orientation/Form/puxxle-down.svg";
import SubmitBtn from "../../../assets/orientation/Form/Submit-Button.svg";
import { useRef, useState } from "react";
import { OrganizationUser } from "../../../types";
import axios from "axios";

const PuzzleUpForm = styled.img`
    position: absolute;
    right: 20%;
`;

const PuzzleDownForm = styled.img`
    position: absolute;
    left: 30%;
    bottom: 20%;
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
    &:hover {
        filter: drop-shadow(10px 5px 10px #f5e9c6);
    }
    &:active {
        transform: scale(0.9);
        filter: drop-shadow(7px 5px 10px #f5e9c6);
    }
`;

const OrientationFormBox = styled.div`
    width: 40%;
    z-index: 1;
    /* padding: 20px; */
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
`;
export const OrientationForm = () => {
    const [requestData, setRequestData] = useState<OrganizationUser>({});

    const submitHandle = async () => {
        const API_URL = "";
        console.warn(requestData);

        //     try {
        //         const response = await axios.post(API_URL, requestRef.current);
        //         console.warn(response.data);
        //     } catch (error) {
        //         console.error((error as Error).message);
        //     }
    };

    return (
        <OrientationFormWrap>
            <PuzzleUpForm src={puzzleUp} />
            <PuzzleDownForm src={puzzleDown} />
            <OrientationFormBox>
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
        </OrientationFormWrap>
    );
};
