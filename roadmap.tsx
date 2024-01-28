import { BiLogoJavascript, BiLogoMongodb, BiLogoReact, BiLogoYoutube, BiSolidSchool } from "react-icons/bi";
import { FaCode, FaFreeCodeCamp, FaGithub, FaNode, FaPaperclip, FaSquareShareNodes } from "react-icons/fa6";
import { IoBuildOutline } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { GiHammerNails } from "react-icons/gi";

export const roadmapData = [
    {
        number: '01',
        title: <p>Basics</p>,
        description: 'Learn the basics of programming & how computers work',
        resources: [
            {
                title: <p>Basics</p>,
                link: 'https://youtu.be/zOjov-2OZ0E?si=7Y_LnQZ_mj10SfhG',
                icon: <BiLogoYoutube className="text-red-500"/>
            },
            {
                title: 'cs50',
                link: 'https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science?utm_source=google&utm_campaign=19315581336&utm_medium=cpc&utm_term=cs50&hsa_acc=7245054034&hsa_cam=19315581336&hsa_grp=144242542723&hsa_ad=642052609431&hsa_src=g&hsa_tgt=kwd-296840910&hsa_kw=cs50&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiA9dGqBhAqEiwAmRpTC1knf9hYdaVMlE5mOdfTYfbbCW1kFNlkMka0vZ0XDe-kCGTsRW3HMRoCq9wQAvD_BwE',
                icon: <BiSolidSchool className="text-blue-600"/>
            }
        ]           
    },
    {
        number: '02',
        title: 'HTML & CSS',
        description: 'It is time to learn the basics of web development using the building blocks of the web (HTML & CSS).',
        resources: [
            {
                title: 'FCC',
                link: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
                icon: <FaFreeCodeCamp className="text-green-800"/>
            },
            {
                title: 'Git',
                link: 'https://youtu.be/RGOj5yH7evk?si=I-fu026AFLILSRbS',
                icon: <BiLogoYoutube className="text-red-500"/>
            },
            {
                title: 'Project',
                link: 'https://youtu.be/p0bGHP-PXD4?si=s08EKVPT3caNgzxN/',
                icon: <IoBuildOutline className="text-purple-500"/>
            }
        ]

    },
    {
        number: '03',
        title: 'JavaScript | Data Structures',
        description: 'It is time to get functional! Learn JavaScript & how to use it to make your websites interactive.',
        resources: [
            {
                title: 'FCC',
                link: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
                icon: <FaFreeCodeCamp className="text-green-800"/>
            },
            {
                title: 'JavaScript',
                link: 'https://youtu.be/PkZNo7MFNFg?si=iYfLsiYjPP2h7DN5',
                icon: <BiLogoJavascript className="text-yellow-400" />
            },
            {
                title: 'Project',
                link: 'https://youtu.be/RGOj5yH7evk?si=I-fu026AFLILSRbS',
                icon: <IoBuildOutline className="text-purple-500"/>
            },
        ]

    },
    {
        number: '04',
        title: 'Frameworks',
        description: 'Learn how to use JavaScript frameworks to build better & faster websites.',
        resources: [
            {
                title: 'React',
                link: 'https://fullstackopen.com/en/',
                icon: <BiLogoReact className="text-cyan-500" />
            },
            {
                title: 'React Project',
                link: "https://youtu.be/b9eMGE7QtTk?si=HPCbJHJaBkGZq3OS",
                icon: <IoBuildOutline className="text-purple-500"/>
            },
            {
                title: 'Next',
                link: 'https://www.youtube.com/watch?v=wm5gMKuwSYk',
                icon: <TbBrandNextjs className="text-black"/>
            },
            {
                title: 'Next Project',
                link: "https://youtu.be/pUNSHPyVryU?si=pyuPmFD1qQVUcSs-",
                icon: <GiHammerNails className="text-purple-500"/>
            },
           
        ]
    },
    {
        number: '05',
        title: 'Backend | APIs',
        description: 'Make your websites dynamic by learning how to build servers, user profiles, APIs & more.',
        resources: [
            
            {
                title: 'MongoDB',
                link: 'https://youtu.be/ofme2o29ngU?si=tN6vQG1kF_dlnd2h',
                icon: <BiLogoMongodb className="text-green-500" />
            },
            {
                title: 'Node',
                link: 'https://youtu.be/SccSCuHhOw0?si=8WinLJlJl0bpF-DA',
                icon: <FaNode className="text-green-600" />
            },
            {
                title: 'MongoDB, Node, Express',
                link: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/',
                icon: <FaFreeCodeCamp className="text-green-800"/>
            },
            {
                title: 'Youtube',
                link: 'https://youtu.be/Agw0LdW9xB4?si=3EUsRTSNq8-C3Z0w',
                icon: <BiLogoYoutube className="text-red-500"/>
            },
            
            
        ]
    },
    {
        number: '06',
        title: 'Full Stack Development',
        description: 'Learn how to connect the frontend & backend by creating functioning full stack applications!',
        resources: [
            {
                title: 'MERN',
                link: 'https://youtu.be/7CqJlxBYj-M?si=aUct4yVHR92-6GUf',
                icon: <FaFreeCodeCamp className="text-green-800"/>
            },
            {
                title: 'MERN Project',
                link: "https://youtu.be/0osXx2oJu44?si=jAgisHX-nI-TXNLw",
                icon: <FaSquareShareNodes className="text-black"/>
                
            },
            {
                title: 'MERN Stack Project',
                link: 'https://youtu.be/-42K44A1oMA?si=AQ6Tbf-1mfM20Qgb',
                icon: <GiHammerNails className="text-purple-500"/>
            }
            
        ]

    },
    {
        number: '07',
        title: 'Finishing Touches',
        description: 'Learn how software design, github, & other software principles work.',
        resources: [
            {
                title: 'Software Design',
                link: 'https://youtu.be/FLtqAi7WNBY?si=ZD843HSGgKlc9iBN',
                icon: <BiLogoYoutube className="text-red-500"/>
            },
            {
                title: 'software',
                link: 'https://youtu.be/tv-_1er1mWI?si=ouX4gv8L3HHEXEqR',
                icon: <FaCode className="text-blue-500"/>
            },
            {
                title: 'Github',
                link: 'https://youtu.be/RGOj5yH7evk?si=I-fu026AFLILSRbS',
                icon: <FaGithub className="text-black"/>
            }
        ]
    },
    {
        number: '08',
        title: 'Interview Prep',
        description: 'Learn how to prepare for interviews & get a job as a developer!',
        resources: [
            {
                title: 'motivation',
                link: 'https://youtu.be/Xg9ihH15Uto?si=NlXIMxIob79_9kh1',
                icon: <BiLogoYoutube className="text-red-500"/>
            },
            {
                title: 'Mock Interview',
                link: 'https://youtu.be/1qw5ITr3k9E?si=DjqosIoiCZkP50xi',
                icon: <FaFreeCodeCamp className="text-green-800"/>
            },
            {
                title: 'Interview Prep',
                link: 'https://youtu.be/5uhmS8nzxM4?si=LhHymrGRN3qPez_R',
                icon: <FaPaperclip className="text-blue-500"/>
            }
        ]
    }

]