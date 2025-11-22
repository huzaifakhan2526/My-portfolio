// AI/ML and Full Stack Technology Stack Data

export interface Technology {
    name: string;
    icon: string;
    category: 'ai-ml' | 'frontend' | 'backend' | 'database' | 'devops' | 'mobile';
    proficiency: number; // 1-100
    yearsOfExperience?: number;
}

export const technologies: Technology[] = [
    // AI/ML Technologies
    {
        name: 'OpenAI',
        icon: 'SiOpenai',
        category: 'ai-ml',
        proficiency: 95,
        yearsOfExperience: 2
    },
    {
        name: 'NLP',
        icon: 'SiPython',
        category: 'ai-ml',
        proficiency: 90,
        yearsOfExperience: 2
    },
    {
        name: 'Machine Learning',
        icon: 'SiTensorflow',
        category: 'ai-ml',
        proficiency: 85,
        yearsOfExperience: 2
    },
    {
        name: 'LangChain',
        icon: 'SiChainlink',
        category: 'ai-ml',
        proficiency: 88,
        yearsOfExperience: 1
    },
    {
        name: 'Python',
        icon: 'SiPython',
        category: 'ai-ml',
        proficiency: 92,
        yearsOfExperience: 2
    },
    {
        name: 'FastAPI',
        icon: 'SiFastapi',
        category: 'ai-ml',
        proficiency: 90,
        yearsOfExperience: 2
    },

    // Frontend Technologies
    {
        name: 'Angular',
        icon: 'SiAngular',
        category: 'frontend',
        proficiency: 95,
        yearsOfExperience: 2
    },
    {
        name: 'React',
        icon: 'SiReact',
        category: 'frontend',
        proficiency: 92,
        yearsOfExperience: 2
    },
    {
        name: 'Next.js',
        icon: 'SiNextdotjs',
        category: 'frontend',
        proficiency: 90,
        yearsOfExperience: 2
    },
    {
        name: 'React Native',
        icon: 'SiReact',
        category: 'frontend',
        proficiency: 88,
        yearsOfExperience: 2
    },
    {
        name: 'TypeScript',
        icon: 'SiTypescript',
        category: 'frontend',
        proficiency: 90,
        yearsOfExperience: 2
    },
    {
        name: 'JavaScript',
        icon: 'SiJavascript',
        category: 'frontend',
        proficiency: 93,
        yearsOfExperience: 2
    },

    // Backend Technologies
    {
        name: 'Node.js',
        icon: 'SiNodedotjs',
        category: 'backend',
        proficiency: 90,
        yearsOfExperience: 2
    },
    {
        name: 'PHP',
        icon: 'SiPhp',
        category: 'backend',
        proficiency: 88,
        yearsOfExperience: 2
    },

    // Database Technologies
    {
        name: 'SQL Server',
        icon: 'SiMysql',
        category: 'database',
        proficiency: 90,
        yearsOfExperience: 2
    },
    {
        name: 'PostgreSQL',
        icon: 'SiPostgresql',
        category: 'database',
        proficiency: 88,
        yearsOfExperience: 2
    },
    {
        name: 'MongoDB',
        icon: 'SiMongodb',
        category: 'database',
        proficiency: 85,
        yearsOfExperience: 2
    },
    // DevOps & Cloud
    {
        name: 'AWS',
        icon: 'SiAmazon',
        category: 'devops',
        proficiency: 85,
        yearsOfExperience: 2
    },
    {
        name: 'Google Cloud',
        icon: 'SiGooglecloud',
        category: 'devops',
        proficiency: 82,
        yearsOfExperience: 2
    },
    {
        name: 'Docker',
        icon: 'SiDocker',
        category: 'devops',
        proficiency: 80,
        yearsOfExperience: 2
    },
    {
        name: 'Git',
        icon: 'SiGit',
        category: 'devops',
        proficiency: 92,
        yearsOfExperience: 2
    },

    // Mobile
    {
        name: 'React Native',
        icon: 'SiReact',
        category: 'mobile',
        proficiency: 88,
        yearsOfExperience: 2
    },
];

export const getCategorizedTechnologies = () => {
    const categories = {
        'ai-ml': technologies.filter(t => t.category === 'ai-ml'),
        'frontend': technologies.filter(t => t.category === 'frontend'),
        'backend': technologies.filter(t => t.category === 'backend'),
        'database': technologies.filter(t => t.category === 'database'),
        'devops': technologies.filter(t => t.category === 'devops'),
        'mobile': technologies.filter(t => t.category === 'mobile'),
    };

    return categories;
};

export const categoryNames = {
    'ai-ml': 'AI/ML & Data Science',
    'frontend': 'Frontend Development',
    'backend': 'Backend Development',
    'database': 'Databases',
    'devops': 'DevOps & Cloud',
    'mobile': 'Mobile Development',
};
