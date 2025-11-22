import { useState, useEffect } from 'react';
import { Container } from './styles';
import ScrollAnimation from 'react-animate-on-scroll';
import {
    SiTensorflow, SiPytorch, SiOpenai, SiChainlink, SiHuggingface,
    SiScikitlearn, SiPandas, SiNumpy, SiReact, SiNextdotjs,
    SiAngular, SiVuedotjs, SiTypescript, SiJavascript, SiNodedotjs,
    SiPython, SiFastapi, SiExpress, SiPhp, SiMongodb,
    SiPostgresql, SiMysql, SiRedis, SiDocker, SiAmazon, SiGit
} from 'react-icons/si';
import { FaClock } from 'react-icons/fa';
import { getCategorizedTechnologies, categoryNames } from '../../data/technologies';

const iconMap: { [key: string]: any } = {
    SiTensorflow, SiPytorch, SiOpenai, SiChainlink, SiHuggingface,
    SiScikitlearn, SiPandas, SiNumpy, SiReact, SiNextdotjs,
    SiAngular, SiVuedotjs, SiTypescript, SiJavascript, SiNodedotjs,
    SiPython, SiFastapi, SiExpress, SiPhp, SiMongodb,
    SiPostgresql, SiMysql, SiRedis, SiDocker, SiAmazon, SiGit
};

export function Skills() {
    const [activeCategory, setActiveCategory] = useState<string>('ai-ml');
    const [animateBars, setAnimateBars] = useState(false);
    const categorizedTechs = getCategorizedTechnologies();

    useEffect(() => {
        // Trigger animation after component mounts
        const timer = setTimeout(() => setAnimateBars(true), 300);
        return () => clearTimeout(timer);
    }, [activeCategory]);

    const currentTechs = categorizedTechs[activeCategory as keyof typeof categorizedTechs];

    return (
        <Container id="skills">
            <ScrollAnimation animateIn="fadeInUp">
                <h2>Technical Expertise</h2>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
                <p className="section-subtitle">
                    Comprehensive skill set spanning AI/ML, Full Stack Development, and Cloud Technologies
                </p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
                <div className="category-tabs">
                    {Object.entries(categoryNames).map(([key, name]) => (
                        <button
                            key={key}
                            className={activeCategory === key ? 'active' : ''}
                            onClick={() => {
                                setActiveCategory(key);
                                setAnimateBars(false);
                                setTimeout(() => setAnimateBars(true), 50);
                            }}
                        >
                            {name}
                        </button>
                    ))}
                </div>
            </ScrollAnimation>

            <div className="skills-grid">
                {currentTechs.map((tech, index) => {
                    const IconComponent = iconMap[tech.icon];

                    return (
                        <ScrollAnimation
                            key={tech.name}
                            animateIn="fadeInUp"
                            delay={index * 0.1 * 1000}
                        >
                            <div className="skill-card">
                                <div className="skill-header">
                                    <div className="skill-icon">
                                        {IconComponent && <IconComponent />}
                                    </div>
                                    <div className="skill-name">{tech.name}</div>
                                </div>

                                <div className="skill-details">
                                    {tech.yearsOfExperience && (
                                        <div className="experience">
                                            <FaClock />
                                            <span>{tech.yearsOfExperience}+ years of experience</span>
                                        </div>
                                    )}

                                    <div className="proficiency-bar">
                                        <div className="proficiency-label">
                                            <span>Proficiency</span>
                                            <span>{tech.proficiency}%</span>
                                        </div>
                                        <div className="bar-container">
                                            <div
                                                className="bar-fill"
                                                style={{
                                                    width: animateBars ? `${tech.proficiency}%` : '0%'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    );
                })}
            </div>
        </Container>
    );
}
