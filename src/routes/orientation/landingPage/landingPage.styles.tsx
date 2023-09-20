import styled from "styled-components";

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

// NAV
export const StpLogoSvg = styled.img`
    width: 5%;
    height: auto;
    object-fit: contain;
    @media ${devices.laptop} {
        width: 12%;
    }
    @media ${devices.tablet} {
        width: 20%;
    }
    @media ${devices.mobile} {
        width: 25%;
    }
`;
export const LevelupSvg = styled.img`
    width: 15%;
    height: auto;
    object-fit: contain;
    @media ${devices.laptop} {
        width: 35%;
    }
    @media ${devices.tablet} {
        width: 50%;
    }
    @media ${devices.mobile} {
        width: 70%;
    }
`;
export const LandingPageWrap = styled.div`
    width: 100%;
    /* padding: 20px; */
    display: flex;
    justify-content: center;
    background-color: #fcf3d7;
    @media ${devices.laptop} {
    }
    @media ${devices.tablet} {
    }
    @media ${devices.mobile} {
    }
`;
export const LandingNav = styled.div`
    width: calc(100% - 40px);
    position: absolute;
    top: 0;
    padding: 20px;
    display: flex;
    flex-direction: row;
    @media ${devices.laptop} {
    }
    @media ${devices.tablet} {
    }
    @media ${devices.mobile} {
    }
`;
// Puzzle up
export const PuzzleUpSvg = styled.img`
    width: 10%;
    height: auto;
    object-fit: contain;
    position: absolute;
    top: 8%;
    left: 8%;
    z-index: 2;
    @media ${devices.laptop} {
        width: 12%;
        left: 12%;
    }
    @media ${devices.tablet} {
        width: 20%;
        left: 20%;
    }
    @media ${devices.mobile} {
        width: 20%;
        left: 25%;
    }
`;

// SLOGAN
export const WholeSloganSvg = styled.img`
    height: 100vh;
    width: 70%;
    /* height: auto; */
    object-fit: contain;
    z-index: 1;
    @media ${devices.laptop} {
        width: 100%;
    }
    @media ${devices.tablet} {
        transform: scale(1.2);

        /* width: 100%; */
        /* transform: scale(1.5); */
    }
    @media ${devices.mobile} {
    }
`;

// BUTTON

export const ApplyButton = styled.img`
    width: 15%;
    position: absolute;
    bottom: 5%;
    cursor: pointer;
    z-index: 3;
    && :hover {
        filter: drop-shadow();
    }
    @media ${devices.laptop} {
        width: 25%;
    }
    @media ${devices.tablet} {
        width: 40%;
        bottom: 10%;
        /* transform: scale(1.5); */
    }
    @media ${devices.mobile} {
        /* transform: scale(1.5); */
        width: 50%;
        bottom: 15%;
    }
`;
