export type JobDescriptionType = {
    MM: {
        SocialMedia: string[];
        Media: string[];
        GraphicDesign: string[];
        Software: string[];
        Podcast: string[];
    };
    AC: {
        Freelancing: string[];
        Engineering: string[];
        Juniors: string[];
    };
    IR: {
        Logistics: string[];
        DCR: string[];
        HRandQC: string[];
    };
    ER: {
        PublicRelations: string[];
        BusinessDevelopment: string[];
    };
    Events: {
        TechnicalTeam: string[];
    };
};

type MMJobDescription = JobDescriptionType['MM'];
type ACJobDescription = JobDescriptionType['AC'];
type IRJobDescription = JobDescriptionType['IR'];
type ERJobDescription = JobDescriptionType['ER'];
type EventsJobDescription = JobDescriptionType['Events'];
export type specificJobDescription = MMJobDescription | ACJobDescription | IRJobDescription | ERJobDescription | EventsJobDescription;

export const jobDescription: JobDescriptionType = {
    MM: {
        SocialMedia: [
            "Build and execute social media strategy to market STP’s projects (in coordination with the Media and Graphic design committees)",
            "Generate, edit, publish and share engaging regular content",
            "Analyze engagement and reaction to posts in order to constantly improve",
            "Participates in creating the theme for each of the marketing campaigns",
        ],
        Media: [
            "Media Coverage of all STP On-ground Events",
            "Choosing the posted photos in coordination with social media",
            "Scripting, shooting and editing videography material needed",
            "Writing, scripting and designing animation materials needed",
            "Editing any material needed (ex: podcast episodes)",
            "Year’s documentation video",
        ],
        GraphicDesign: [
            "Designing all needed online visual material (covers, posts, online invitations, etc.)",
            "Designing all needed Publications (flyers, rollups, notebooks, etc.)",
            "Participates in creating a physical theme for STP’s Marketing Campaign",
        ],
        Software: [
            "Creating, Developing, updating, and managing STP's Website or Mobile application.",
            "Translate UI/UX designs provided by the Graphic Design Committee into functional and visually appealing mobile app interfaces using React and Backend Technologies for web, or React Native for the Mobile App.",
            "Responsible for collecting the database of the target audience before events.",
            "Responsible for the recruitment phase, event and project registration data, and extracting data from it.",
        ],
        Podcast: [
            "Complete team can do podcast episodes.",
            "Focus on ideas to be outside the box with a new theme and vision.",
            "Responsible for contacting and finding speakers.",
            "Responsible for producing the episode.",
            "Choose the decor of the place.",
            "Script writing and content creation.",
        ],
    },
    AC: {
        Freelancing: [
            "As a moderator, you will teach participants technical or non-technical skills based on your desired workshop or committee.",
            "Designing the sessions flow and activities.",
            "Preparing and training to become more qualified as Moderators.",
            "Moderating workshops sessions (Graphic Design-Montage) and follow up with the participants.",
            "Holding interviews and making the election of the participants in coordination with the HR.",
            "Organizing and designing the project day.",
        ],
        Engineering: [
            "As a moderator, you will teach participants technical or non-technical skills based on your desired workshop or committee.",
            "Designing the sessions flow and activities.",
            "Preparing and training to become more qualified as Moderators.",
            "Moderating workshops sessions (Python-Machine-Front End) and follow up with the participants.",
            "Holding interviews and making the election of the participants in coordination with the HR.",
            "Organizing and designing the project day.",
        ],
        Juniors: [
            "Juniors are school students that will be taught by you as a moderator.",
            "Preparing and training to become more qualified as Moderators.",
            "Come up with different topics to discuss with the juniors.",
            "Design and prepare academic material for Junior sessions (School Students).",
            "Designing the sessions flow and activities.",
            "Follow up with the school students and track their personal growth.",
        ],
    },
    IR: {
        Logistics: [
            "Design & buy the materials and do woodwork to build the booths and info desks for the offline campaign.",
            "Provide materials for STP (printings, giveaways & catering).",
            "Do market-research to find the lowest prices with the best quality.",
            "Provide & manage transportation for the participants and materials at events.",
        ],
        DCR: [
            "Setting Coordination Plan for crowd management at any event in coordination with the PM.",
            "Creating teams with different roles (Registration, Backstage, Ushering participants and VIPs, etc.) in coordination with the PM.",
            "Using different materials to create handicrafts and decoratives and responsible for its distribution.",
            "Responsible for creating different activities and games to maintain a high spirit.",
            "Help in designing giveaways and activities for the sessions with AC members.",
        ],
        HRandQC: [
            "Responsible for anything related to interviews.",
            "Assisting the project managers in making plans for STP's Projects.",
            "Monitoring the execution of the Operational plans.",
            "Creating a documentation system for STP's Projects and events.",
            "Preparing members' profiles and evaluation template for STP's Projects.",
        ],
    },
    ER: {
        PublicRelations: [
            "Provide venues for events and sessions.",
            "Responsible for STP external and internal approvals",
            "Usher and host attendees in the sessions and events.",
            " Get STP shout outs from influencers",
        ],
        BusinessDevelopment: [
            "Lead funding acquisition and craft compelling events through innovative Business Development strategies.",
            "Your creativity drives session success, while your dedication ensures impeccable catering arrangements.",
        ],
    },
    Events: {
        TechnicalTeam: [
            "Make any required tools or platforms for the competition, like simulators, forms, cars, etc.",
            "Provide technical support throughout the competition phases.",
            "Hold supporting sessions for the competitors.",
            "Handle any technical problems related to the competition.",
            "Ensure the competitors' experience is fair and smooth.",
        ],
    },
};