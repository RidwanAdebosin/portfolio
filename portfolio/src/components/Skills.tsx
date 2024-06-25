import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
import { skills } from "../assets/data";

const Skills = () => {
    return <section className="py-20 align-element" id='skills'>
        <SectionTitle text='tech stack'/>
        <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => {
                return <SkillsCard key={skill.id}{...skill}/>;
            })}
        </div>
    </section>
};

export default Skills;