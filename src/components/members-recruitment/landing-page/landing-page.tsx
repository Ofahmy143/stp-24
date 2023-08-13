
import "./landing-page.css";
import pic1 from "../../../assets/recruitment-page/landing/web-member-recrut-07.png";


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
import Software from "../../../assets/recruitment-page/landing/web-member-recrut00-24.png";
import GraphicDesign from "../../../assets/recruitment-page/landing/web-member-recrut00-23.png";
import Podcast from "../../../assets/recruitment-page/landing/web-member-recrut00-22.png";
import { jobDescription } from "./jobDescriptions";
import { Committee } from "./committee/committee";



// Type for theater card props
// Type for committee props





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
