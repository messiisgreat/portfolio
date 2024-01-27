import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Anaconda',
  title: "Hi all, I'm Anaconda",
  description:
    "I'm passionate Full Stack Web Engineer having rich experience of web applications with React.js, Next.js,Vue.js, Nuxt.js, Laravel, Django and Blockchain development on Solidity, Rust, Web3.js, Ether.js for Ethereum and Solana etc.",
  resumeLink: 'https://drive.google.com/file/d/1i2nkDvpDN68KEvNnz0Q2usMIXrMeDYhb/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'Anaconda',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: '#',
  linkedin: 'https://www.linkedin.com/in/atsushi-yamada-132449298',
  github: 'https://github.com/messiisgreat',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json',
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Angularjs',
          fontAwesomeClassName: 'vscode-icons:file-type-angular',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json',
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json',
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassName: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassName: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassName: 'logos:web3js',
        },
      ],
    },
    {
      title: 'Artificial Intelligence',
      lottieAnimationFile: '/lottie/skills/ai.json',
      skills: [
        emoji('⚡ Proficient in programming and algorithms'),
        emoji('⚡ Designs intelligent systems for learning and improvement'),
        emoji('⚡ Expertise in machine learning, NLP, and computer vision'),
        emoji('⚡ Creates AI solutions for complex problems'),
        emoji('⚡ Drives business value through AI'),
      ],
      softwareSkills: [
        {
          skillName: 'TensorFlow',
          fontAwesomeClassName: 'logos:tensorflow',
        },
        {
          skillName: 'Machine Learning',
          fontAwesomeClassName: 'vscode-icons:file-type-robots',
        },
        {
          skillName: 'Natural Language Processing',
          fontAwesomeClassName: 'vscode-icons:file-type-json-official',
        },
        {
          skillName: 'Neural Networks',
          fontAwesomeClassName: 'vscode-icons:file-type-jsonnet',
        },
        {
          skillName: 'Numpy',
          fontAwesomeClassName: 'logos:numpy',
        },
        {
          skillName: 'PyCharm',
          fontAwesomeClassName: 'logos:pycharm',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '90',
  },
  {
    Stack: 'Programming',
    progressPercentage: '80',
  },
  {
    Stack: 'Blockchain',
    progressPercentage: '70',
  },
  {
    Stack: 'AI',
    progressPercentage: '50',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Okinawa International University',
    subHeader: 'Bachelor of Science in Computer Science',
    duration: 'September 2012 - August 2016',
    desc: 'Participated in the research of algorithm and published 2 papers.',
    grade: 'Grade B',
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Senior Full-Stack Engineer',
    company: 'Pear Computers',
    companyLogo: '/img/icons/common/pearcomputers.png',
    date: 'Feb 2021 – Jun 2023',
    desc: 'Developed backend services using Spring boot framework and front end using React or Vue.\n\
Reviewed, analyzed, and optimized server performance by 50%, substituting EJS with React, NodeJS, Mongo DB, and Express.\n\
Resolved 300+ critical bugs in the product to improve performance and helped customers launch a seamless experience.',
  },
  {
    role: 'Junior Full-Stack Developer',
    company: 'Duseca Software',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Mar 2019 – Jan 2021',
    desc: 'Designed and developed 10 web applications using React, Node.js, and SQL databases, resulting in a 25% increase in user engagement and a 20% increase in revenue\n\
Conducted 50 code reviews and participated in 10 continuous integration and deployment processes, resulting in a 40% reduction in bugs and a 50% increase in deployment frequency\n\
Maintained and updated 5 existing applications, and provided technical support to 50 users as needed',
  },
  {
    role: 'Front-End Developer',
    company: 'DSV ISS',
    companyLogo: '/img/icons/common/DSV.jpg',
    date: 'Jan 2017 - Feb 2019',
    desc: 'Conducted over 60 successful tastings to identify bugs that resulted in over 500 UI improvements.\n\
Collaborated with colleagues from the research and design department making sure the web pages are user-friendly.\n\
Coded and implemented over 40 HTML email templates for the Marketing Department.',
  },
  {
    role: 'Backend Developer',
    company: 'Wapidu',
    companyLogo: '/img/icons/common/wapidu.jpg',
    date: 'Jan 2016 - Dec 2016',
    desc: 'Rapidly prototyped new data processing capabilities to confirm integration feasibility into existing systems.\n\
Developed conversion and system implementation plans.\n\
Tested functional compliance of company products.',
  },
  {
    role: 'Freelancer',
    company: 'Upwork',
    companyLogo: '/img/icons/common/upwork.jpg',
    date: 'Sept 2014 - Nov 2015',
    desc: 'Worked with 15 clients to design and develop 20 web applications using React, Node.js, and SQL databases, resulting in a 30% increase in user engagement and a 25% increase in revenue for clients\n\
Maintained and updated 10 existing applications, and provided technical support to 100 clients as needed',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'anaconda-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: '#/portfolio-full-stack-dev',
    link: 'https://portfolio-Anaconda7.vercel.app/',
  },
  {
    name: 'Smart-app ',
    desc: 'Smart-app is a client-side web application built using the React.js library for fetching and displaying data from APIs or local JSON files. The application features a simple and intuitive user interface that allows users to view data in a variety of formats.',
    github: '#/smart-app',
    link: 'https://complete-smart-app.vercel.app/',
  },
  {
    name: 'MERN Blog',
    desc: 'MERN Blog is a MERN Blog is a full-stack web application for creating and sharing blog posts. It is built using the MERN stack. The application provides a simple, intuitive user interface and features such as authentication, authorization, and CRUD operations.',
    github: '#/blog-mern',
  },
  {
    name: 'Shop-Vue',
    desc: 'E-shop with Vue.js is a full-stack web application for building and managing an online store. The application is built using the Vue.js framework and features a modern and responsive user interface that provides a seamless shopping experience for customers.',
    github: '#/shop-Vue',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'James Fernando',
    feedback:
      'Anaconda is an exceptional full-stack developer who consistently delivers high-quality work. His expertise in both front-end and back-end development allowed him to create a seamless and visually appealing website.',
  },
  {
    name: 'Jacques Philips',
    feedback:
      "I had the pleasure of working with Anaconda on a complex web development project, and I was thoroughly impressed with his skills and professionalism. Anaconda's ability to understand and translate our requirements into a functional and user-friendly website was remarkable.",
  },
  {
    name: 'Venanda Mercy',
    feedback:
      'Anaconda is an incredibly talented full-stack developer who consistently exceeded our expectations. His ability to seamlessly integrate various technologies and frameworks into our website was impressive.',
  },
  {
    name: 'James Fernando',
    feedback:
      'I had the pleasure of working with Anaconda on a recent web development project, and I must say, he exceeded all expectations. As a full-stack developer, Anaconda showcased an exceptional level of expertise in both front-end and back-end technologies.',
  },
];

export const showContactUs: boolean = true;

export const seoData: SEODataType = {
  title: 'Anaconda',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Anaconda',
  avatar_url: 'https://avatars3.githubusercontent.com/u/135434950?v=4',
  url: 'https://developer-portfolio-Anaconda.vercel.app',
  keywords: [
    'Anaconda',
    'Anaconda',
    '@shine7star',
    'shine7star',
    'Portfolio',
    'Anaconda Portfolio ',
    'Anaconda Portfolio',
    'shine',
    'how is top developer',
    'front-end',
    'back-end',
    'full-stack',
    'engineer',
  ],
};
