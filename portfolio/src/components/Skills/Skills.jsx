import React, { useState } from 'react';
import './Skills.css';
import { SKILLS } from '../../utils/data';
import SkillCard from './SkillCard/SkillCard';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

const Skills = () => {
  const [selectedSkill, setselectedSkill] = useState(SKILLS[0]);
  const handleSelectSkill = (data) => {
      setselectedSkill(data)
  };
  return (
    <section className="skills-cont">
      <h5>Technical Proficiency</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item, index) => (
            <SkillCard
              key={index}
              title={item.title}
              iconUrl={item.icon}
              isActive={selectedSkill.title === item.title} // Adjust this as per your logic
              onClick={() => {
                handleSelectSkill(item);
              }}
            />
          ))}
        </div>
        <div className='skills-info'>
          <SkillsInfoCard 
            heading = {selectedSkill.title}
            skills = {selectedSkill.skills}
            />

        </div>
      </div>
    </section>
  );
};

export default Skills;
