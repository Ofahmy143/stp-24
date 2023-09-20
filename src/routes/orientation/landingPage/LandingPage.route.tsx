// import waw from "../../../assets/orientation/landing-page/Vector-O.svg";
// import sel from "../../../assets/orientation/landing-page/sel.svg";
// import ltasel from "../../../assets/orientation/landing-page/ltasel.svg";
import wholeSlogan from "../../../assets/orientation/landing-page/whole-slogan.svg";
// import word from "../../../assets/orientation/landing-page/word.svg";
import puzzleUp from "../../../assets/orientation/landing-page/puzzle-up.svg";
// import puzzleDown from "../../../assets/orientation/landing-page/puzzle-down.svg";
import stpLogo from "../../../assets/orientation/landing-page/stp-logo.svg";
import levelUp from "../../../assets/orientation/landing-page/level-up.svg";
import ApplyBtn from "../../../assets/orientation/landing-page/apply-btn.svg";
import { useNavigate } from "react-router-dom";
import {
    ApplyButton,
    LandingNav,
    LandingPageWrap,
    LevelupSvg,
    PuzzleUpSvg,
    StpLogoSvg,
    WholeSloganSvg,
} from "./landingPage.styles";

export const LandingPage = () => {
    const navigate = useNavigate();

    const navigateToOrientationForm = (
        event: React.MouseEvent<HTMLImageElement>
    ) => {
        event.preventDefault();
        navigate("/orientation/form");
    };
    return (
        <LandingPageWrap>
            <LandingNav>
                <StpLogoSvg src={stpLogo} alt="stp logo" />
                <LevelupSvg src={levelUp} alt="level up" />
            </LandingNav>
            <PuzzleUpSvg src={puzzleUp} alt="puzzle piece up" />
            <WholeSloganSvg src={wholeSlogan} alt="orientation slogan" />
            <ApplyButton
                src={ApplyBtn}
                alt="apply button puzzle piece"
                onClick={navigateToOrientationForm}
            />
            {/* <PuzzleDownSvg src={puzzleDown} /> */}
            {/* <PuzzleUpSvg src={puzzleUp} /> */}
            {/* <SvgContainer> */}
            {/* <SloganSvg src={word} alt="waw" /> */}

            {/* <img src={sel} alt="waw" /> */}
            {/* <img src={ltasel} alt="waw" /> */}
            {/* <img src={puzzleDown} alt="waw" /> */}
            {/* <img src={puzzleUp} alt="waw" /> */}
            {/* <img src={stpLogo} alt="waw" /> */}
            {/* <img src={levelUp} alt="waw" /> */}
            {/* <img src={waw} alt="waw" /> */}
            {/* </SvgContainer> */}
        </LandingPageWrap>
    );
};
