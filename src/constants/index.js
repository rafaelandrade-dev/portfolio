import {
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    php,
    sql,
    jquery,
    bootstrap,
    unipe,
    graficajb,
    dashboardApp,
    todo,
    snet,
    authLogin,
    financeDashboard,
    rpgManager
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Full Stack Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node.js",
        icon: nodejs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "jQuery",
        icon: jquery,
    },
    {
        name: "Git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Web Developer Intern",
        company_name: "Gráfica JB",
        icon: graficajb,
        iconBg: "#383E56",
        date: "Feb 2023 – Apr 2023",
        points: [
            "Built and maintained web features using PHP (Laravel) and jQuery in an intern-led agile team.",
            "Applied Git version control and RESTful API integration on a real production codebase.",
            "Sharpened autonomous problem-solving skills by navigating complex technical challenges with limited senior oversight.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "ServiceNet Tecnologia",
        icon: snet,
        iconBg: "#383E56",
        date: "Feb 2024 – Present",
        points: [
            "Develop and maintain a machine control system in real production environments, implementing new features and resolving bugs across the application layer and an embedded virtual machine layer.",
            "Contributed to eliminating critical production incidents for multiple consecutive months — the first time the team reached this milestone on a widely-used enterprise system.",
            "Coordinate and mentor interns and junior developers on internal software projects, ensuring code quality and on-time delivery.",
            "Deliver features across frontend (React.js, Vue.js) and backend (Node.js, PHP) stacks in a multi-project software house environment.",
            "Responded with fast turnaround to high-priority demands from key enterprise clients while maintaining full system stability.",
        ],
    },
];

const testimonials = [
    {
        title: "3x National Champion",
        testimonial:
            "Competed at national level in Brazilian beach volleyball youth championships across multiple years, placing 1st each time. Built exceptional resilience, high-pressure composure, and elite teamwork skills through competitive sport.",
    },
    {
        title: "Zero Critical Incidents",
        testimonial:
            "Contributed to eliminating critical production incidents for multiple consecutive months at ServiceNet — the first time the team reached this milestone on a widely-used enterprise system.",
    },
    {
        title: "Early Graduate · C1/C2 English",
        testimonial:
            "Enrolled in Computer Science at 16, on track to earn a full 4-year bachelor's degree before turning 20. Fluent English speaker (C1/C2) — able to work, communicate, and collaborate in fully English-speaking environments.",
    },
];

const projects = [
    {
        name: "UserHub — Auth Platform",
        description:
            "Full-featured user management platform with JWT authentication, protected routes, and a premium dark UI. Built with React, TypeScript, React Query, Zod, and Axios interceptors for automatic token handling.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "react-query",
                color: "pink-text-gradient",
            },
        ],
        image: authLogin,
        source_code_link: "https://github.com/rafaelandrade-dev/auth-login-project",
    },
    {
        name: "Brazilian Fintech Dashboard",
        description:
            "High-performance financial dashboard for the Brazilian stock market (B3). Features live quotes via Brapi API, real-time sparkline charts, and a compound-interest 'Snowball' projection engine with DRIP toggle.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "recharts",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: financeDashboard,
        source_code_link: "https://github.com/rafaelandrade-dev/finance-dashboard-br",
    },
    {
        name: "RPG Initiative Manager",
        description:
            "Combat tracker for tabletop RPGs (D&D and others). Manage initiative order, HP, conditions, and turn flow with a medieval-themed UI. Features a virtual dice roller, battle queue strip, and local state persistence.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "css-modules",
                color: "pink-text-gradient",
            },
        ],
        image: rpgManager,
        source_code_link: "https://github.com/rafaelandrade-dev/rpg-initiative-manager",
    },
];

export { services, technologies, experiences, testimonials, projects };
