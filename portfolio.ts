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
  title: "Hi all, I'm Atsushi",
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
  // linkedin: 'https://www.linkedin.com/in/atsushi-yamada-132449298',
  github: 'https://github.com/messiisgreat',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EDGE TECH STACK',
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
          '⚡ Experience in developing Smart Contract using Solidity & Rust'
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
    // {
    //   title: 'Artificial Intelligence',
    //   lottieAnimationFile: '/lottie/skills/ai.json',
    //   skills: [
    //     emoji('⚡ Proficient in programming and algorithms'),
    //     emoji('⚡ Designs intelligent systems for learning and improvement'),
    //     emoji('⚡ Expertise in machine learning, NLP, and computer vision'),
    //     emoji('⚡ Creates AI solutions for complex problems'),
    //     emoji('⚡ Drives business value through AI'),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'TensorFlow',
    //       fontAwesomeClassName: 'logos:tensorflow',
    //     },
    //     {
    //       skillName: 'Machine Learning',
    //       fontAwesomeClassName: 'vscode-icons:file-type-robots',
    //     },
    //     {
    //       skillName: 'Natural Language Processing',
    //       fontAwesomeClassName: 'vscode-icons:file-type-json-official',
    //     },
    //     {
    //       skillName: 'Neural Networks',
    //       fontAwesomeClassName: 'vscode-icons:file-type-jsonnet',
    //     },
    //     {
    //       skillName: 'Numpy',
    //       fontAwesomeClassName: 'logos:numpy',
    //     },
    //     {
    //       skillName: 'PyCharm',
    //       fontAwesomeClassName: 'logos:pycharm',
    //     },
    //   ],
    // },
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
  }
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
    role: 'Full Stack Developer',
    company: 'Opolis',
    companyLogo: '/img/icons/common/opolis.png',
    date: 'July 2022 - September 2023',
    desc: 'Experience working with third-party libraries, Geo Toolkit, html2Canvas, Material UI for the frontend development. Used React JS for templating for faster compilation and developing resuable components. And also used React JS in components like JSX, creating React components. Converting StripFan Angular to React + NextJS project (For speed imporvement and to give proper structure)',
  },
  {
    role: 'FullStack Developer',
    company: 'KodaDot - Creators Marketplace',
    companyLogo: '/img/icons/common/kodadot.png',
    date: 'March 2022 - June 2022',
    desc: 'Made front-end website including token management portal, dashboard, vesting UI using following skills • Developed ERC721, ERC1155, ERC20 smart contracts with solidity and some NFT projects based on EVM.',
  },
  {
    role: 'Web3 Frontend PM',
    company: 'Crystal Finance',
    companyLogo: '/img/icons/common/crystalfinance.png',
    date: 'June 2021 - February 2022',
    desc: 'have worked as a senior web developer and made both frontend and backend. Utilized ReactJS for its efficient data flow architecture to create a lightweight and render efficient web app that searched projects via the GitHub API through keywords. Developed Restful endpoints with node/express, PHP Frameworks. Integrated web-sockets and web hooks. Designed and deployed smart contracts for tokens and ICOs including token vesting, refund vaults and multi-signature wallets.',
  },
  {
    role: 'Blockchain Freelancer',
    company: 'Upwork',
    companyLogo: '/img/icons/common/upwork.png',
    date: 'September 2020 - June 2021 ',
    desc: 'Worked for almost 2 years as a senior blockchain developer on the upwork site. Acquired the new skills, abilities and knowledge on this site. Because there so many developers that acquire the high tech.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Techverx',
    companyLogo: '/img/icons/common/techverx.jpg',
    date: 'June 2019 - September 2020',
    desc: 'Worked as a full stack developer and made both frontend and backend. Involved in web application development for back-end system using AngularJS and Node.js with cutting edge Written Web Services using SOAP for sending and getting data from the external interface.',
  },
  {
    role: 'Frontend Developer',
    company: 'Caktus Group',
    companyLogo: '/img/icons/common/caktus.png',
    date: 'August 2017 - July 2019',
    desc: 'Worked on building new React components for the customer-facing web app which improved the time on page. Worked within an agile team and helped prioritize and scope feature requests to ensure that the biggest impact features were worked on first.',
  },
  {
    role: 'Intern',
    company: 'Alchemy',
    companyLogo: '/img/icons/common/alchemy.png',
    date: 'November 2016 - June 2017',
    desc: 'Took part in web3 platform development and built frontend using next.js implemented web3 integration using web3.js',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Trendingo',
    desc: 'The frontend of Trendingo - Ordering service related to crypto side',
    github: 'https://github.com/messiisgreat/trendingo-frontend',
    link: 'https://trendingo.cc/',
  },
  {
    name: 'Swappy',
    desc: 'Swappy is a full stack web project built with Next.js and MongoDB serverless development',
    github: 'https://github.com/messiisgreat/media-swap',
    link: 'https://https://www.swappy.jp',
  },
  {
    name: 'NETZERO',
    desc: 'NETZERO is a MERN website With vision of "Reverse climate change with the most transparent carbon removal marketplace"',
    github: 'https://github.com/messiisgreat/Netzero-frontend',
    link: 'https://netzerocarbontoken.com//',
  },
  {
    name: 'Ownboon',
    desc: 'Ownboon is Fully responsive community ewbsite with nextjs and tailwindCSS',
    github: 'https://github.com/messiisgreat/OwnBoon',
    link: 'http://ownboon.com/',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Steven Lee',
    feedback:
      'Atsushi is an exceptional full-stack developer who consistently delivers high-quality work. His expertise in both front-end and back-end development allowed him to create a seamless and visually appealing website.',
  },
  {
    name: 'Jacques Philips',
    feedback:
      "I had the pleasure of working with Atsushi on a complex web development project, and I was thoroughly impressed with his skills and professionalism. Atsushi's ability to understand and translate our requirements into a functional and user-friendly website was remarkable.",
  },
  {
    name: 'Venanda Mercy',
    feedback:
      'Atsushi is an incredibly talented full-stack developer who consistently exceeded our expectations. His ability to seamlessly integrate various technologies and frameworks into our website was impressive.',
  },
  {
    name: 'James Fernando',
    feedback:
      'I had the pleasure of working with Atsushi on a recent web development project, and I must say, he exceeded all expectations. As a full-stack developer, Atsushi showcased an exceptional level of expertise in both front-end and back-end technologies.',
  },
];

export const showContactUs: boolean = true;

export const seoData: SEODataType = {
  title: 'Anaconda',
  description:
    'A passionate Full Stack Web and Blockchain Developer.',
  author: 'Anaconda',
  avatar_url: 'https://avatars3.githubusercontent.com/u/135434950?v=4',
  url: 'https://developer-portfolio-Anaconda.vercel.app',
  keywords: [
    'Anaconda',
    'Anaconda',
    '@superonecoderman',
    'anaconda',
    'Portfolio',
    'Anaconda Portfolio ',
    'Anaconda Portfolio',
    'atsushi',
    'how is top developer',
    'front-end',
    'back-end',
    'full-stack',
    'engineer',
    'blockchain',
    'rust',
  ],
};
