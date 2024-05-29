import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    unipe,
    graficajb,
    swift,
    kotlin,
    jquery,
    sql,
    bootstrap,
    php,
    todo,
    dashboardApp,
    snet
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
    title: "Mobile Developer",
    icon: mobile,
    },
    {
    title: "Backend Developer",
    icon: backend,
    }
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
    name: "jQuery",
    icon: jquery,
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
    name: "git",
    icon: git,
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
    name: "Swift",
    icon: swift,
    },
    {
    name: "Kotlin",
    icon: kotlin,
    }
];

const experiences = [
    {
    title: "React.js Developer",
    company_name: "Software Factory - Unipê",
    icon: unipe,
    iconBg: "#383E56",
    date: "Feb 2023 - Jun 2023",
    points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
    },
    {
    title: "Full stack Developer",
    company_name: "Gráfica JB",
    icon: graficajb,
    iconBg: "#383E56",
    date: "Jun 2023 - Sep 2023",
    points: [
        "Developing and making several improvements to the web application",
        "Program with PHP using Laravel and deepen my knowledge in Javascript using jQuery, and several libraries for charts and other things",
        "Debugging different parts of the application, as the bugs kept coming",
        "Participating in daily meetings and providing constructive feedback to other developers.",
    ],
    },
    {
        title: "Frontend Developer",
        company_name: "Service Net",
        icon: snet,
        iconBg: "#383E56",
        date: "Fev 2024 - Present",
        points: [
            "Working with a big team and being exposed to new frameworks",
            "Programming with Nuxt.js and Vue.js, building a vue components library from scratch",
            "Guiding a intern with his studies and development",
            "Being since the beginning of a project, participating on his hole story.",
        ],
        },
];

const testimonials = [
    {
    title: "Fluent English",
    testimonial:
        "This feature makes it possible for me to go further in my studies and work",
    name: "",
    designation: "",
    company: "",
    image: "",
    },
    {
    title: "Volleyball player",
    testimonial:
        "Since i am a child i love to play beach volleyball and others sports, that made my social skills very good",
    name: "",
    designation: "",
    company: "",
    image: "",
    },
    {
    title: "Artist",
    testimonial:
        "I like to draw sometimes, that skill taught me how to be patient and more creative",
    name: "",
    designation: "",
    company: "",
    image: "",
    },
];

const projects = [
    {
    name: "Dashboard",
    description:
        "This project is a Dashboard with several functionalities and a incredible amount of pages and applications using the library syncfusion for react",
    tags: [
        {
            name: "tailwind",
            color: "blue-text-gradient",
        },
        {
            name: "react-js",
            color: "red-text-gradient",
        },
        {
            name: "syncfusion",
            color: "pink-text-gradient",
        },
    ],
    image: dashboardApp,
    source_code_link: "https://github.com/rafaelandrade-dev/adminDashboardApp",
    }
];

export { services, technologies, experiences, testimonials, projects };