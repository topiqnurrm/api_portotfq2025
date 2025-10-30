export default function handler(req, res) {
    const data = [
        {
            id: 1,
            name: "Certified Developer, Alibaba Cloud Certification",
            description: "s.",
            institution: "Alibaba Cloud",
            type: "x",
            image: "/images/certification/1.png",
            Date: "2024"
        },
        {
            id: 2,
            name: "Getting Started with Programming in Dart",
            description: "s.",
            institution: "Dicoding",
            type: "x",
            image: "/images/certification/2.png",
            file: "/images/certification/2.pdf",
            Date: "2024"
        },
        {
            id: 3,
            name: "Learning to Create Flutter Apps for Beginners",
            description: "s.",
            institution: "Dicoding",
            type: "x",
            image: "/images/certification/3.png",
            file: "/images/certification/3.pdf",
            Date: "2024"
        },
        {
            id: 4,
            name: "Learning Back-End Development for Beginners with JavaScript",
            description: "s.",
            institution: "Dicoding",
            type: "x",
            image: "/images/certification/4.png",
            file: "/images/certification/4.pdf",
            Date: "2024"
        },
        {
            id: 5,
            name: "Learning the Basics of JavaScript Programming",
            description: "s.",
            institution: "Dicoding",
            type: "x",
            image: "/images/certification/5.png",
            file: "/images/certification/5.pdf",
            date: "2024"
        },
        {
            id: 6,
            name: "Cloud Practitioner Essentials (Learning the Basics of AWS Cloud)",
            description: "z.",
            institution: "Dicoding",
            type: "x",
            image: "/images/certification/6.png",
            file: "/images/certification/6.pdf",
            date: "2024"
        },
        {
            id: 7,
            name: "Certified Developer Generative AI",
            description: "s.",
            institution: "Alibaba Cloud",
            type: "x",
            image: "/images/certification/7.png",
            date: "2024"
        },
        {
            id: 8,
            name: "HTML Basics",
            description: "s.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/8.png",
            date: "2025"
        },
        {
            id: 9,
            name: "CSS Basics",
            description: "a.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/9.png",
            date: "2025"
        },
        {
            id: 10,
            name: "Bootstrap CSS Framework",
            description: "s.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/10.png",
            date: "2025"
        },
        {
            id: 11,
            name: "JavaScript",
            description: "a.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/11.png",
            date: "2025"
        },
        {
            id: 12,
            name: "JavaScript DOM",
            description: "s.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/12.png",
            date: "2025"
        },
        {
            id: 13,
            name: "JavaScript Asynchronous",
            description: "s.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/13.png",
            date: "2025"
        },
        {
            id: 14,
            name: "AJAX dan Web API",
            description: "a.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/14.png",
            date: "2025"
        },
        {
            id: 15,
            name: "OOP Concepts in JavaScript",
            description: "a.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/15.png",
            date: "2025"
        },
        {
            id: 16,
            name: "Learning ReactJS",
            description: "a.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/16.png",
            date: "2025"
        },
        {
            id: 17,
            name: "React.js State Management - A Guide to Proper State Usage",
            description: "a.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/17.png",
            date: "2025"
        },
        {
            id: 18,
            name: "Learning React.js by Building a Split Bill Application",
            description: "a.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/18.png",
            date: "2025"
        },
        {
            id: 19,
            name: "Meta iOS Developer",
            description: "s.",
            institution: "Coursera",
            type: "x",
            image: "/images/certification/19.jpg",
            date: "2025"
        },
        {
            id: 20,
            name: "Certificate of Basic Learning Class on Node.js and NPM",
            description: "s.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/20.jpg",
            date: "2025"
        },
        {
            id: 21,
            name: "Certificate of Completion: Basic Express.js Course",
            description: "s.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/21.jpg",
            date: "2025"
        },
        {
            id: 22,
            name: "Certificate of Completion: Building Dynamic Web Pages with Express.js and EJS",
            description: "s.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/22.jpg",
            date: "2025"
        },
        {
            id: 23,
            name: "Certificate of Completion: Learning RESTful with Express.js",
            description: "s.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/23.jpg",
            date: "2025"
        },
        {
            id: 24,
            name: "Certificate of Completion: Learning MongoDB",
            description: "s.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/24.jpg",
            date: "2025"
        },
        {
            id: 25,
            name: "Certificate of Learning: Building Express.js Projects with MongoDB",
            description: "d.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/25.jpg",
            date: "2025"
        },
        {
            id: 26,
            name: "Certificate of Completion for the Middleware Implementation Class in Express.js",
            description: "s.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/26.jpg",
            date: "2025"
        },
        {
            id: 27,
            name: "Certificate of Completion for the Error Handler Implementation Class in Express.js and Mongoose",
            description: "d.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/27.jpg",
            date: "2025"
        },
        {
            id: 28,
            name: "Database Relationship Implementation Class with MongoDB in Express and Mongoose",
            description: "a.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/28.jpg",
            date: "2025"
        },
        {
            id: 29,
            name: "Certificate of Completion: Route Management and Cookies in Express.js",
            description: "s.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/29.jpg",
            date: "2025"
        },
        {
            id: 30,
            name: "Certificate of Completion: Hot Data Management with Sessions in Express.js",
            description: "x.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/30.jpg",
            date: "2025"
        },
        {
            id: 31,
            name: "Certificate of Completion: Learning Class on Authentication Concepts and Implementation in Express.js",
            description: "d.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/31.jpg",
            date: "2025"
        },
        {
            id: 32,
            name: "Certificate of Completion: Learning Class on Building a Case Study Application - Directory Listing App",
            description: "s.",
            institution: "Codepolitan",
            type: "x",
            image: "/images/certification/32.jpg",
            date: "2025"
        },
        {
            id: 33,
            name: "Getting Started with Basic Programming to Become a Software Developer",
            description: "s.",
            institution: "Dicoding",
            type: "x",
            image: "/images/certification/33.png",
            file: "/images/certification/33.pdf",
            date: "2025"
        },
        {
            id: 34,
            name: "Introduction to Programming Logic (Programming Logic 101)",
            description: "x.",
            institution: "Dicoding",
            type: "x",
            image: "/images/certification/34.png",
            file: "/images/certification/34.pdf",
            date: "2025"
        },
        {
            id: 35,
            name: "Learning the Basics of Git with GitHub",
            description: "d.",
            institution: "Dicoding",
            type: "x",
            image: "/images/certification/35.png",
            file: "/images/certification/35.pdf",
            date: "2025"
        },
        {
            id: 36,
            name: "Learn the Basics of Web Programming",
            description: "s.",
            institution: "Dicoding",
            type: "x",
            image: "/images/certification/36.png",
            file: "/images/certification/36.pdf",
            date: "2025"
        },
        {
            id: 37,
            name: "Learning to Create Front-End Web for Beginners",
            description: "d.",
            institution: "Dicoding",
            type: "x",
            image: "/images/certification/37.png",
            file: "/images/certification/37.pdf",
            date: "2025"
        },
        {
            id: 38,
            name: "Learning the Fundamentals of Front-End Web Development",
            description: "d.",
            institution: "Dicoding",
            type: "x",
            image: "/images/certification/38.png",
            file: "/images/certification/38.pdf",
            date: "2025"
        },
        {
            id: 39,
            name: "Financial Literacy 101",
            description: "d.",
            institution: "DIcoding",
            type: "x",
            image: "/images/certification/39.png",
            file: "/images/certification/39.pdf",
            date: "2025"
        },
        {
            id: 40,
            name: "Design EthicsLearn the Basics of Cloud and Gen AI on AWS",
            description: "d.",
            institution: "Dicoding",
            type: "x",
            image: "/images/certification/40.png",
            file: "/images/certification/40.pdf",
            date: "2025"
        },
        {
            id: 41,
            name: "System Operator, Alibaba Cloud Certified Associate",
            description: "d.",
            institution: "Alibaba Cloud",
            type: "x",
            image: "/images/certification/41.png",
            date: "2025"
        },
        {
            id: 42,
            name: "Learning Intermediate Web Development",
            description: "d.",
            institution: "Dicoding",
            type: "x",
            image: "/images/certification/42.png",
            file: "/images/certification/42.pdf",
            date: "2025"
        },
        {
            id: 43,
            name: "Fundamentals and Applications of Generative AI",
            description: "d.",
            institution: "Codicpolitan",
            type: "x",
            image: "/images/certification/43.png",
            date: "2025"
        },
        {
            id: 44,
            name: "Learning the Fundamentals of Flutter Application Development",
            description: "d.",
            institution: "Dicoding",
            type: "x",
            image: "/images/certification/44.png",
            file: "/images/certification/44.pdf",
            date: "2025"
        },
        {
            id: 45,
            name: "Learning the SOLID Principles of Programming",
            description: "d.",
            institution: "Dicoding",
            type: "x",
            image: "/images/certification/45.png",
            file: "/images/certification/45.pdf",
            date: "2025"
        },
        {
            id: 46,
            name: "Learning the Basics of AI",
            description: "d.",
            institution: "Dicoding",
            type: "x",
            image: "/images/certification/46.png",
            file: "/images/certification/46.pdf",
            date: "2025"
        },
        {
            id: 47,
            name: "Pursuing a Career as a Software Developer",
            description: "s.",
            institution: "Dicoding",
            type: "x",
            image: "/images/certification/47.png",
            file: "/images/certification/47.pdf",
            date: "2025"
        },
        {
            id: 48,
            name: "Learning Machine Learning Implementation for Flutter",
            description: "s.",
            institution: "Dicoding",
            type: "x",
            image: "/images/certification/48.png",
            file: "/images/certification/48.pdf",
            date: "2025"
        }

    ];

  res.status(200).json(data);
}
