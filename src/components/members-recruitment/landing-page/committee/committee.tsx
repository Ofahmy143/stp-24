import './committee.css';
import { specificJobDescription } from "../jobDescriptions";
import { TheaterCard } from "../theater-cards/theater-cards";

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