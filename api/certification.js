export default function handler(req, res) {
    const institutions = {
        ALI: "Alibaba Cloud",
        DIC: "Dicoding",
        COD: "Codepolitan",
        COU: "Coursera",
        MMS: "Mutiara Mutu Sertifikasi",
        CIS: "Cisco Networking Academy",
        SOL: "Sololearn"
    };

    const data = [
        {
            id: 1,
            name: "Certified Developer, Alibaba Cloud Certification",
            description: "s.",
            institution: "ALI",
            image: "/images/certification/1.png",
            Date: "2024"
        },
        {
            id: 2,
            name: "Getting Started with Programming in Dart",
            description: "s.",
            institution: "DIC",
            image: "/images/certification/2.png",
            file: "/images/certification/2.pdf",
            Date: "2024"
        },
        {
            id: 3,
            name: "Learning to Create Flutter Apps for Beginners",
            description: "s.",
            institution: "DIC",
            image: "/images/certification/3.png",
            file: "/images/certification/3.pdf",
            Date: "2024"
        },
        {
            id: 4,
            name: "Learning Back-End Development for Beginners with JavaScript",
            description: "s.",
            institution: "DIC",
            image: "/images/certification/4.png",
            file: "/images/certification/4.pdf",
            Date: "2024"
        },
        {
            id: 5,
            name: "Learning the Basics of JavaScript Programming",
            description: "s.",
            institution: "DIC",
            image: "/images/certification/5.png",
            file: "/images/certification/5.pdf",
            date: "2024"
        },
        {
            id: 6,
            name: "Cloud Practitioner Essentials (Learning the Basics of AWS Cloud)",
            description: "z.",
            institution: "DIC",
            image: "/images/certification/6.png",
            file: "/images/certification/6.pdf",
            date: "2024"
        },
        {
            id: 7,
            name: "Certified Developer Generative AI",
            description: "s.",
            institution: "ALI",
            image: "/images/certification/7.png",
            date: "2024"
        },
        {
            id: 8,
            name: "HTML Basics",
            description: "s.",
            institution: "COD",
            image: "/images/certification/8.png",
            date: "2025"
        },
        {
            id: 9,
            name: "CSS Basics",
            description: "a.",
            institution: "COD",
            image: "/images/certification/9.png",
            date: "2025"
        },
        {
            id: 10,
            name: "Bootstrap CSS Framework",
            description: "s.",
            institution: "COD",
            image: "/images/certification/10.png",
            date: "2025"
        },
        {
            id: 11,
            name: "JavaScript",
            description: "a.",
            institution: "COD",
            image: "/images/certification/11.png",
            date: "2025"
        },
        {
            id: 12,
            name: "JavaScript DOM",
            description: "s.",
            institution: "COD",
            image: "/images/certification/12.png",
            date: "2025"
        },
        {
            id: 13,
            name: "JavaScript Asynchronous",
            description: "s.",
            institution: "COD",
            image: "/images/certification/13.png",
            date: "2025"
        },
        {
            id: 14,
            name: "AJAX dan Web API",
            description: "a.",
            institution: "COD",
            image: "/images/certification/14.png",
            date: "2025"
        },
        {
            id: 15,
            name: "OOP Concepts in JavaScript",
            description: "a.",
            institution: "COD",
            image: "/images/certification/15.png",
            date: "2025"
        },
        {
            id: 16,
            name: "Learning ReactJS",
            description: "a.",
            institution: "COD",
            image: "/images/certification/16.png",
            date: "2025"
        },
        {
            id: 17,
            name: "React.js State Management - A Guide to Proper State Usage",
            description: "a.",
            institution: "COD",
            image: "/images/certification/17.png",
            date: "2025"
        },
        {
            id: 18,
            name: "Learning React.js by Building a Split Bill Application",
            description: "a.",
            institution: "COD",
            image: "/images/certification/18.png",
            date: "2025"
        },
        {
            id: 19,
            name: "Meta iOS Developer",
            description: "s.",
            institution: "COU",
            image: "/images/certification/19.jpg",
            date: "2025"
        },
        {
            id: 20,
            name: "Certificate of Basic Learning Class on Node.js and NPM",
            description: "s.",
            institution: "COD",
            image: "/images/certification/20.jpg",
            date: "2025"
        },
        {
            id: 21,
            name: "Certificate of Completion: Basic Express.js Course",
            description: "s.",
            institution: "COD",
            image: "/images/certification/21.jpg",
            date: "2025"
        },
        {
            id: 22,
            name: "Certificate of Completion: Building Dynamic Web Pages with Express.js and EJS",
            description: "s.",
            institution: "COD",
            image: "/images/certification/22.jpg",
            date: "2025"
        },
        {
            id: 23,
            name: "Certificate of Completion: Learning RESTful with Express.js",
            description: "s.",
            institution: "COD",
            image: "/images/certification/23.jpg",
            date: "2025"
        },
        {
            id: 24,
            name: "Certificate of Completion: Learning MongoDB",
            description: "s.",
            institution: "COD",
            image: "/images/certification/24.jpg",
            date: "2025"
        },
        {
            id: 25,
            name: "Certificate of Learning: Building Express.js Projects with MongoDB",
            description: "d.",
            institution: "COD",
            image: "/images/certification/25.jpg",
            date: "2025"
        },
        {
            id: 26,
            name: "Certificate of Completion for the Middleware Implementation Class in Express.js",
            description: "s.",
            institution: "COD",
            image: "/images/certification/26.jpg",
            date: "2025"
        },
        {
            id: 27,
            name: "Certificate of Completion for the Error Handler Implementation Class in Express.js and Mongoose",
            description: "d.",
            institution: "COD",
            image: "/images/certification/27.jpg",
            date: "2025"
        },
        {
            id: 28,
            name: "Database Relationship Implementation Class with MongoDB in Express and Mongoose",
            description: "a.",
            institution: "COD",
            image: "/images/certification/28.jpg",
            date: "2025"
        },
        {
            id: 29,
            name: "Certificate of Completion: Route Management and Cookies in Express.js",
            description: "s.",
            institution: "COD",
            image: "/images/certification/29.jpg",
            date: "2025"
        },
        {
            id: 30,
            name: "Certificate of Completion: Hot Data Management with Sessions in Express.js",
            description: "x.",
            institution: "COD",
            image: "/images/certification/30.jpg",
            date: "2025"
        },
        {
            id: 31,
            name: "Certificate of Completion: Learning Class on Authentication Concepts and Implementation in Express.js",
            description: "d.",
            institution: "COD",
            image: "/images/certification/31.jpg",
            date: "2025"
        },
        {
            id: 32,
            name: "Certificate of Completion: Learning Class on Building a Case Study Application - Directory Listing App",
            description: "s.",
            institution: "COD",
            image: "/images/certification/32.jpg",
            date: "2025"
        },
        {
            id: 33,
            name: "Getting Started with Basic Programming to Become a Software Developer",
            description: "s.",
            institution: "DIC",
            image: "/images/certification/33.png",
            file: "/images/certification/33.pdf",
            date: "2025"
        },
        {
            id: 34,
            name: "Introduction to Programming Logic (Programming Logic 101)",
            description: "x.",
            institution: "DIC",
            image: "/images/certification/34.png",
            file: "/images/certification/34.pdf",
            date: "2025"
        },
        {
            id: 35,
            name: "Learning the Basics of Git with GitHub",
            description: "d.",
            institution: "DIC",
            image: "/images/certification/35.png",
            file: "/images/certification/35.pdf",
            date: "2025"
        },
        {
            id: 36,
            name: "Learn the Basics of Web Programming",
            description: "s.",
            institution: "DIC",
            image: "/images/certification/36.png",
            file: "/images/certification/36.pdf",
            date: "2025"
        },
        {
            id: 37,
            name: "Learning to Create Front-End Web for Beginners",
            description: "d.",
            institution: "DIC",
            image: "/images/certification/37.png",
            file: "/images/certification/37.pdf",
            date: "2025"
        },
        {
            id: 38,
            name: "Learning the Fundamentals of Front-End Web Development",
            description: "d.",
            institution: "DIC",
            image: "/images/certification/38.png",
            file: "/images/certification/38.pdf",
            date: "2025"
        },
        {
            id: 39,
            name: "Financial Literacy 101",
            description: "d.",
            institution: "DIC",
            image: "/images/certification/39.png",
            file: "/images/certification/39.pdf",
            date: "2025"
        },
        {
            id: 40,
            name: "Design EthicsLearn the Basics of Cloud and Gen AI on AWS",
            description: "d.",
            institution: "DIC",
            image: "/images/certification/40.png",
            file: "/images/certification/40.pdf",
            date: "2025"
        },
        {
            id: 41,
            name: "System Operator, Alibaba Cloud Certified Associate",
            description: "d.",
            institution: "ALI",
            image: "/images/certification/41.png",
            date: "2025"
        },
        {
            id: 42,
            name: "Learning Intermediate Web Development",
            description: "d.",
            institution: "DIC",
            image: "/images/certification/42.png",
            file: "/images/certification/42.pdf",
            date: "2025"
        },
        {
            id: 43,
            name: "Fundamentals and Applications of Generative AI",
            description: "d.",
            institution: "COD",
            image: "/images/certification/43.png",
            date: "2025"
        },
        {
            id: 44,
            name: "Learning the Fundamentals of Flutter Application Development",
            description: "d.",
            institution: "DIC",
            image: "/images/certification/44.png",
            file: "/images/certification/44.pdf",
            date: "2025"
        },
        {
            id: 45,
            name: "Learning the SOLID Principles of Programming",
            description: "d.",
            institution: "DIC",
            image: "/images/certification/45.png",
            file: "/images/certification/45.pdf",
            date: "2025"
        },
        {
            id: 46,
            name: "Learning the Basics of AI",
            description: "d.",
            institution: "DIC",
            image: "/images/certification/46.png",
            file: "/images/certification/46.pdf",
            date: "2025"
        },
        {
            id: 47,
            name: "Pursuing a Career as a Software Developer",
            description: "s.",
            institution: "DIC",
            image: "/images/certification/47.png",
            file: "/images/certification/47.pdf",
            date: "2025"
        },
        {
            id: 48,
            name: "Learning Machine Learning Implementation for Flutter",
            description: "s.",
            institution: "DIC",
            image: "/images/certification/48.png",
            file: "/images/certification/48.pdf",
            date: "2025"
        },
        {
            id: 49,
            name: "Basics of Safety: Understanding Emergency Response Plan & Emergency Response Team in Fire Preventio",
            description: "s.",
            institution: "MMS",
            images: [
                "/images/certification/49-1.jpeg",
                "/images/certification/49-2.jpeg",
                "/images/certification/49-3.png"
            ],
            date: "2023"
        },
        {
            id: 50,
            name: "Python Essentials 1",
            description: "s.",
            institution: "CIS",
            images: [
                "/images/certification/50-1.jpeg",
                "/images/certification/50-2.png",
                "/images/certification/50-3.png"
            ],
            date: "2023"
        },
        {
            id: 51,
            name: "Python Essentials 2",
            description: "s.",
            institution: "CIS",
            images: [
                "/images/certification/51-1.jpeg",
                "/images/certification/51-2.png",
                "/images/certification/51-3.png"
            ],
            date: "2023"
        },
        {
            id: 52,
            name: "Demonstrating Theoretical and Practical Understanding of Kotlin",
            description: "s.",
            institution: "SOL",
            images: [
                "/images/certification/52-1.png",
                "/images/certification/52-2.png",
            ],
            date: "2023"
        },
        {
            id: 53,
            name: "Google Cybersecurity",
            description: "s.",
            institution: "COU",
            images: [
                "/images/certification/53.png"
            ],
            date: "2025"
        },
        {
            id: 54,
            name: "Google UX Design",
            description: "s.",
            institution: "COU",
            images: [
                "/images/certification/54.png"
            ],
            date: "2025"
        },
        {
            id: 55,
            name: "IBM AI Developer",
            description: "s.",
            institution: "COU",
            images: [
                "/images/certification/55.png"
            ],
            date: "2025"
        },
        {
            id: 56,
            name: "IMB AI Engineering",
            description: "s.",
            institution: "COU",
            images: [
                "/images/certification/56.png"
            ],
            date: "2025"
        },
        {
            id: 57,
            name: "Meta Android Developer",
            description: "s.",
            institution: "COU",
            images: [
                "/images/certification/57.png"
            ],
            date: "2025"
        },
        {
            id: 58,
            name: "IBM IT Project Manager",
            description: "s.",
            institution: "COU",
            images: [
                "/images/certification/58.png"
            ],
            date: "2025"
        },
        {
            id: 59,
            name: "IBM Machine Learning",
            description: "s.",
            institution: "COU",
            images: [
                "/images/certification/59.png"
            ],
            date: "2025"
        },
        {
            id: 60,
            name: "IBM Front-End Developer Professional Certificate",
            description: "s.",
            institution: "COU",
            images: [
                "/images/certification/60.png"
            ],
            date: "2025"
        },
        {
            id: 61,
            name: "IBM Back-End Development Professional Certificate",
            description: "s.",
            institution: "COU",
            images: [
                "/images/certification/61.png"
            ],
            date: "2025"
        },
        {
            id: 62,
            name: "Adobe Content Creator",
            description: "s.",
            institution: "COU",
            images: [
                "/images/certification/62.png"
            ],
            date: "2025"
        },
        {
            id: 63,
            name: "Data Science Foundations",
            description: "s.",
            institution: "COU",
            images: [
                "/images/certification/63.png"
            ],
            date: "2025"
        },
        {
            id: 64,
            name: "IBM Full Stack Software Developer",
            description: "s.",
            institution: "COU",
            images: [
                "/images/certification/64.png"
            ],
            date: "2025"
        },
        {
            id: 65,
            name: "Xbox Graphic Designer",
            description: "s.",
            institution: "COU",
            images: [
                "/images/certification/65.png"
            ],
            date: "2025"
        },
        {
            id: 66,
            name: "Meta iOS Developer",
            description: "s.",
            institution: "COU",
            images: [
                "/images/certification/66.png"
            ],
            date: "2025"
        },
        {
            id: 67,
            name: "Introduction to Cybersecurity",
            description: "s.",
            institution: "CIS",
            images: [
                "/images/certification/67.png"
            ],
            date: "2025"
        },
        {
            id: 68,
            name: "Networking Basics",
            description: "s.",
            institution: "CIS",
            images: [
                "/images/certification/68.png"
            ],
            date: "2025"
        },
        {
            id: 69,
            name: "Networking Devices and Initial Configuration",
            description: "s.",
            institution: "CIS",
            images: [
                "/images/certification/69.png"
            ],
            date: "2025"
        },
        {
            id: 70,
            name: "Sustainable Cities",
            description: "s.",
            institution: "CIS",
            images: [
                "/images/certification/70.png"
            ],
            date: "2025"
        },
        {
            id: 71,
            name: "Online Learning Design for Educators",
            description: "s.",
            institution: "CIS",
            images: [
                "/images/certification/71.png"
            ],
            date: "2025"
        },
        {
            id: 72,
            name: "IBM Business Analyst",
            description: "s.",
            institution: "CIS",
            images: [
                "/images/certification/72.png"
            ],
            date: "2025"
        },
        {
            id: 73,
            name: "IBM Product Owner",
            description: "s.",
            institution: "CIS",
            images: [
                "/images/certification/73.png"
            ],
            date: "2025"
        },
        {
            id: 74,
            name: "The Teacher and Social and Emotional Learning (SEL)",
            description: "s.",
            institution: "CIS",
            images: [
                "/images/certification/74.png"
            ],
            date: "2025"
        },
        {
            id: 75,
            name: "Fundraising and Development",
            description: "s.",
            institution: "CIS",
            images: [
                "/images/certification/75.png"
            ],
            date: "2025"
        },
        {
            id: 76,
            name: "Google Digital Marketing & E-commerce",
            description: "s.",
            institution: "CIS",
            images: [
                "/images/certification/76.png"
            ],
            date: "2025"
        },
        {
            id: 77,
            name: "IBM AI Foundations for Business",
            description: "s.",
            institution: "CIS",
            images: [
                "/images/certification/77.png"
            ],
            date: "2025"
        },
    ];

  res.status(200).json(data);
}
