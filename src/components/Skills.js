import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 80 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'React', percentage: 70 },
  ];

  const [initialized, setInitialized] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setInitialized(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      skillsObserver.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        skillsObserver.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div>
      {skillsData.map((skill, index) => (
        <div key={index} className="skills-title">
          {skill.name}
          <div ref={skillsRef} className="skills-box">
            <div className="fill" style={{ width: initialized ? `${skill.percentage}%` : 0 }}>
              {`${skill.percentage}%`}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
