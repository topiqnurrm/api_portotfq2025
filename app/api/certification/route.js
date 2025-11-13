import { NextResponse } from 'next/server';

export async function GET() {
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
            description: "This certification validates comprehensive skills in developing and deploying applications on Alibaba Cloud platform. It demonstrates proficiency in cloud computing services, understanding of cloud architecture, and the ability to build scalable solutions using Alibaba Cloud's suite of products and services.",
            institution: "ALI",
            image: "/images/certification/1.png",
            date: "2024"
        },
        {
            id: 2,
            name: "Getting Started with Programming in Dart",
            description: "This course provides a solid foundation in Dart programming language, covering basic syntax, data types, control structures, and object-oriented programming concepts. Dart is essential for Flutter development and modern application development, making this certification a crucial stepping stone for mobile app developers.",
            institution: "DIC",
            image: "/images/certification/2.png",
            file: "/images/certification/2.pdf",
            date: "2024"
        },
        {
            id: 3,
            name: "Learning to Create Flutter Apps for Beginners",
            description: "This certification demonstrates the ability to build cross-platform mobile applications using Flutter framework. It covers fundamental concepts including widgets, state management, navigation, and UI design principles. The course equips developers with skills to create beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
            institution: "DIC",
            image: "/images/certification/3.png",
            file: "/images/certification/3.pdf",
            date: "2024"
        },
        {
            id: 4,
            name: "Learning Back-End Development for Beginners with JavaScript",
            description: "This comprehensive course covers server-side JavaScript development, including Node.js fundamentals, RESTful API design, database integration, and backend architecture patterns. It provides essential knowledge for building robust server applications and understanding the complete web development stack.",
            institution: "DIC",
            image: "/images/certification/4.png",
            file: "/images/certification/4.pdf",
            date: "2024"
        },
        {
            id: 5,
            name: "Learning the Basics of JavaScript Programming",
            description: "This foundational certification covers core JavaScript concepts including variables, functions, arrays, objects, and DOM manipulation. It establishes fundamental programming skills essential for both front-end and back-end development, providing the groundwork for advanced web development techniques.",
            institution: "DIC",
            image: "/images/certification/5.png",
            file: "/images/certification/5.pdf",
            date: "2024"
        },
        {
            id: 6,
            name: "Cloud Practitioner Essentials (Learning the Basics of AWS Cloud)",
            description: "This certification validates understanding of AWS Cloud concepts, services, security, architecture, pricing, and support. It demonstrates knowledge of cloud computing fundamentals and AWS infrastructure, essential for anyone working with cloud technologies and modern application deployment.",
            institution: "DIC",
            image: "/images/certification/6.png",
            file: "/images/certification/6.pdf",
            date: "2024"
        },
        {
            id: 7,
            name: "Certified Developer Generative AI",
            description: "This advanced certification demonstrates expertise in developing applications using generative AI technologies. It covers understanding of large language models, prompt engineering, AI integration in applications, and practical implementation of generative AI solutions in real-world scenarios.",
            institution: "ALI",
            image: "/images/certification/7.png",
            date: "2024"
        },
        {
            id: 8,
            name: "HTML Basics",
            description: "This course establishes foundational knowledge of HTML5, covering semantic markup, document structure, forms, multimedia elements, and accessibility best practices. It provides the essential building blocks for creating well-structured web pages and understanding web content organization.",
            institution: "COD",
            image: "/images/certification/8.png",
            date: "2025"
        },
        {
            id: 9,
            name: "CSS Basics",
            description: "This certification covers fundamental CSS concepts including selectors, box model, positioning, flexbox, and responsive design principles. It demonstrates ability to style web pages effectively and create visually appealing, user-friendly interfaces that work across different devices and screen sizes.",
            institution: "COD",
            image: "/images/certification/9.png",
            date: "2025"
        },
        {
            id: 10,
            name: "Bootstrap CSS Framework",
            description: "This course teaches practical implementation of Bootstrap framework for rapid web development. It covers the grid system, components, utilities, and responsive design patterns that enable developers to build professional, mobile-first websites efficiently using pre-built CSS classes and JavaScript plugins.",
            institution: "COD",
            image: "/images/certification/10.png",
            date: "2025"
        },
        {
            id: 11,
            name: "JavaScript",
            description: "This comprehensive certification validates proficiency in JavaScript programming, including ES6+ features, asynchronous programming, functional programming concepts, and modern JavaScript best practices. It demonstrates ability to write clean, efficient code for complex web applications.",
            institution: "COD",
            image: "/images/certification/11.png",
            date: "2025"
        },
        {
            id: 12,
            name: "JavaScript DOM",
            description: "This course focuses on Document Object Model manipulation, event handling, and dynamic content generation using JavaScript. It teaches essential skills for creating interactive web pages, handling user interactions, and building dynamic user interfaces that respond to user actions in real-time.",
            institution: "COD",
            image: "/images/certification/12.png",
            date: "2025"
        },
        {
            id: 13,
            name: "JavaScript Asynchronous",
            description: "This certification demonstrates mastery of asynchronous JavaScript programming including callbacks, promises, async/await, and handling concurrent operations. It covers essential concepts for building responsive applications that handle network requests, file operations, and other time-consuming tasks without blocking the user interface.",
            institution: "COD",
            image: "/images/certification/13.png",
            date: "2025"
        },
        {
            id: 14,
            name: "AJAX dan Web API",
            description: "This course covers asynchronous communication between client and server using AJAX techniques and modern Fetch API. It demonstrates ability to integrate third-party APIs, handle JSON data, and build dynamic web applications that communicate with backend services without page reloads.",
            institution: "COD",
            image: "/images/certification/14.png",
            date: "2025"
        },
        {
            id: 15,
            name: "OOP Concepts in JavaScript",
            description: "This certification validates understanding of object-oriented programming principles in JavaScript, including classes, inheritance, encapsulation, and polymorphism. It demonstrates ability to write maintainable, reusable code using modern JavaScript OOP patterns and best practices.",
            institution: "COD",
            image: "/images/certification/15.png",
            date: "2025"
        },
        {
            id: 16,
            name: "Learning ReactJS",
            description: "This comprehensive course covers React fundamentals including components, JSX, props, state management, and hooks. It demonstrates proficiency in building modern, interactive user interfaces using one of the most popular JavaScript libraries for front-end development.",
            institution: "COD",
            image: "/images/certification/16.png",
            date: "2025"
        },
        {
            id: 17,
            name: "React.js State Management - A Guide to Proper State Usage",
            description: "This advanced certification focuses on effective state management patterns in React applications. It covers useState, useReducer, Context API, and best practices for managing application state, enabling developers to build scalable and maintainable React applications with proper data flow.",
            institution: "COD",
            image: "/images/certification/17.png",
            date: "2025"
        },
        {
            id: 18,
            name: "Learning React.js by Building a Split Bill Application",
            description: "This hands-on project-based certification demonstrates practical React skills through building a real-world application. It covers component composition, state management, event handling, and React best practices while creating a functional bill-splitting application.",
            institution: "COD",
            image: "/images/certification/18.png",
            date: "2025"
        },
        {
            id: 19,
            name: "Meta iOS Developer",
            description: "This professional certification from Meta validates comprehensive iOS development skills including Swift programming, UIKit, SwiftUI, iOS design patterns, and app deployment. It demonstrates ability to build native iOS applications following Apple's Human Interface Guidelines and industry best practices.",
            institution: "COU",
            image: "/images/certification/19.jpg",
            date: "2025"
        },
        {
            id: 20,
            name: "Certificate of Basic Learning Class on Node.js and NPM",
            description: "This course covers Node.js runtime environment fundamentals and NPM package management. It demonstrates understanding of server-side JavaScript, module system, asynchronous operations, and dependency management essential for modern backend development.",
            institution: "COD",
            image: "/images/certification/20.jpg",
            date: "2025"
        },
        {
            id: 21,
            name: "Certificate of Completion: Basic Express.js Course",
            description: "This certification validates foundational knowledge of Express.js web framework, covering routing, middleware, request handling, and response management. It demonstrates ability to build server-side applications and RESTful APIs using one of the most popular Node.js frameworks.",
            institution: "COD",
            image: "/images/certification/21.jpg",
            date: "2025"
        },
        {
            id: 22,
            name: "Certificate of Completion: Building Dynamic Web Pages with Express.js and EJS",
            description: "This course focuses on server-side rendering using Express.js and EJS templating engine. It demonstrates ability to create dynamic, data-driven web pages, handle template inheritance, and build traditional multi-page applications with server-generated HTML.",
            institution: "COD",
            image: "/images/certification/22.jpg",
            date: "2025"
        },
        {
            id: 23,
            name: "Certificate of Completion: Learning RESTful with Express.js",
            description: "This certification covers RESTful API design principles and implementation using Express.js. It demonstrates understanding of HTTP methods, resource-based routing, status codes, and best practices for building scalable, maintainable web services.",
            institution: "COD",
            image: "/images/certification/23.jpg",
            date: "2025"
        },
        {
            id: 24,
            name: "Certificate of Completion: Learning MongoDB",
            description: "This comprehensive course covers MongoDB database fundamentals including document structure, CRUD operations, indexing, aggregation framework, and data modeling. It demonstrates proficiency in working with NoSQL databases and understanding modern data persistence strategies.",
            institution: "COD",
            image: "/images/certification/24.jpg",
            date: "2025"
        },
        {
            id: 25,
            name: "Certificate of Learning: Building Express.js Projects with MongoDB",
            description: "This practical certification demonstrates ability to integrate MongoDB with Express.js applications. It covers database connection, data validation, schema design, and building full-stack applications using the MERN stack principles.",
            institution: "COD",
            image: "/images/certification/25.jpg",
            date: "2025"
        },
        {
            id: 26,
            name: "Certificate of Completion for the Middleware Implementation Class in Express.js",
            description: "This course focuses on Express.js middleware architecture, covering custom middleware creation, third-party middleware integration, and request/response processing pipelines. It demonstrates understanding of how to extend Express.js functionality and implement cross-cutting concerns.",
            institution: "COD",
            image: "/images/certification/26.jpg",
            date: "2025"
        },
        {
            id: 27,
            name: "Certificate of Completion for the Error Handler Implementation Class in Express.js and Mongoose",
            description: "This certification covers comprehensive error handling strategies in Express.js and Mongoose applications. It demonstrates ability to implement centralized error handling, custom error classes, and proper error responses for building robust, production-ready applications.",
            institution: "COD",
            image: "/images/certification/27.jpg",
            date: "2025"
        },
        {
            id: 28,
            name: "Database Relationship Implementation Class with MongoDB in Express and Mongoose",
            description: "This advanced course covers implementing database relationships in MongoDB using Mongoose ODM. It demonstrates understanding of embedding vs referencing, population, virtuals, and designing efficient data models for complex applications with relational data.",
            institution: "COD",
            image: "/images/certification/28.jpg",
            date: "2025"
        },
        {
            id: 29,
            name: "Certificate of Completion: Route Management and Cookies in Express.js",
            description: "This certification covers advanced routing techniques and cookie management in Express.js. It demonstrates ability to organize routes efficiently, handle cookie-based sessions, and implement stateful web applications with proper cookie security practices.",
            institution: "COD",
            image: "/images/certification/29.jpg",
            date: "2025"
        },
        {
            id: 30,
            name: "Certificate of Completion: Hot Data Management with Sessions in Express.js",
            description: "This course focuses on session management in Express.js applications, covering session stores, session security, and state management across requests. It demonstrates ability to implement user sessions, shopping carts, and other stateful features in web applications.",
            institution: "COD",
            image: "/images/certification/30.jpg",
            date: "2025"
        },
        {
            id: 31,
            name: "Certificate of Completion: Learning Class on Authentication Concepts and Implementation in Express.js",
            description: "This comprehensive certification covers authentication and authorization concepts including password hashing, JWT tokens, session-based auth, and OAuth. It demonstrates ability to implement secure user authentication systems and protect routes in Express.js applications.",
            institution: "COD",
            image: "/images/certification/31.jpg",
            date: "2025"
        },
        {
            id: 32,
            name: "Certificate of Completion: Learning Class on Building a Case Study Application - Directory Listing App",
            description: "This project-based certification demonstrates end-to-end application development skills by building a complete directory listing application. It showcases ability to integrate frontend, backend, database, and authentication into a cohesive, production-ready web application.",
            institution: "COD",
            image: "/images/certification/32.jpg",
            date: "2025"
        },
        {
            id: 33,
            name: "Getting Started with Basic Programming to Become a Software Developer",
            description: "This foundational course provides comprehensive introduction to programming concepts, computational thinking, and software development fundamentals. It covers essential skills needed to begin a career in software development and establishes a strong foundation for learning any programming language.",
            institution: "DIC",
            image: "/images/certification/33.png",
            file: "/images/certification/33.pdf",
            date: "2025"
        },
        {
            id: 34,
            name: "Introduction to Programming Logic (Programming Logic 101)",
            description: "This certification validates understanding of fundamental programming logic including algorithms, flowcharts, pseudocode, and problem-solving strategies. It demonstrates ability to think logically and approach programming challenges systematically, essential for any software development career.",
            institution: "DIC",
            image: "/images/certification/34.png",
            file: "/images/certification/34.pdf",
            date: "2025"
        },
        {
            id: 35,
            name: "Learning the Basics of Git with GitHub",
            description: "This course covers version control fundamentals using Git and GitHub, including repositories, commits, branches, merging, and collaboration workflows. It demonstrates essential skills for modern software development, code collaboration, and project management in team environments.",
            institution: "DIC",
            image: "/images/certification/35.png",
            file: "/images/certification/35.pdf",
            date: "2025"
        },
        {
            id: 36,
            name: "Learn the Basics of Web Programming",
            description: "This comprehensive certification introduces core web development concepts including client-server architecture, HTTP protocol, web standards, and basic markup languages. It provides essential knowledge for understanding how the web works and building web-based applications.",
            institution: "DIC",
            image: "/images/certification/36.png",
            file: "/images/certification/36.pdf",
            date: "2025"
        },
        {
            id: 37,
            name: "Learning to Create Front-End Web for Beginners",
            description: "This course covers fundamental front-end development skills including HTML structure, CSS styling, JavaScript interactivity, and responsive design principles. It demonstrates ability to create user-facing web interfaces and understanding of modern front-end development practices.",
            institution: "DIC",
            image: "/images/certification/37.png",
            file: "/images/certification/37.pdf",
            date: "2025"
        },
        {
            id: 38,
            name: "Learning the Fundamentals of Front-End Web Development",
            description: "This advanced certification deepens front-end development knowledge with modern frameworks, build tools, state management, and performance optimization. It demonstrates proficiency in creating sophisticated, production-ready web applications using contemporary front-end technologies and best practices.",
            institution: "DIC",
            image: "/images/certification/38.png",
            file: "/images/certification/38.pdf",
            date: "2025"
        },
        {
            id: 39,
            name: "Financial Literacy 101",
            description: "This course provides essential financial knowledge including budgeting, saving, investing, and personal finance management. While not directly technical, financial literacy is crucial for professional success, making informed career decisions, and managing income as a software developer or entrepreneur.",
            institution: "DIC",
            image: "/images/certification/39.png",
            file: "/images/certification/39.pdf",
            date: "2025"
        },
        {
            id: 40,
            name: "Learn the Basics of Cloud and Gen AI on AWS",
            description: "This certification covers AWS cloud fundamentals combined with generative AI concepts. It demonstrates understanding of cloud infrastructure, AI/ML services on AWS, and how to leverage cloud computing for AI-powered applications, essential for modern cloud-native development.",
            institution: "DIC",
            image: "/images/certification/40.png",
            file: "/images/certification/40.pdf",
            date: "2025"
        },
        {
            id: 41,
            name: "System Operator, Alibaba Cloud Certified Associate",
            description: "This professional certification validates skills in operating and maintaining systems on Alibaba Cloud platform. It covers infrastructure management, monitoring, troubleshooting, and ensuring system reliability and performance in cloud environments.",
            institution: "ALI",
            image: "/images/certification/41.png",
            date: "2025"
        },
        {
            id: 42,
            name: "Learning Intermediate Web Development",
            description: "This certification advances web development skills with intermediate topics including advanced JavaScript, API integration, database connectivity, and full-stack development concepts. It bridges the gap between beginner and advanced web development, preparing for professional development roles.",
            institution: "DIC",
            image: "/images/certification/42.png",
            file: "/images/certification/42.pdf",
            date: "2025"
        },
        {
            id: 43,
            name: "Fundamentals and Applications of Generative AI",
            description: "This comprehensive course covers generative AI fundamentals including transformer models, prompt engineering, fine-tuning, and practical applications. It demonstrates understanding of cutting-edge AI technology and ability to integrate generative AI capabilities into software applications.",
            institution: "COD",
            image: "/images/certification/43.jpg",
            date: "2025"
        },
        {
            id: 44,
            name: "Learning the Fundamentals of Flutter Application Development",
            description: "This certification validates comprehensive understanding of Flutter framework architecture, widget system, state management solutions, and platform-specific implementations. It demonstrates ability to build cross-platform applications with native performance and beautiful user interfaces.",
            institution: "DIC",
            image: "/images/certification/44.png",
            file: "/images/certification/44.pdf",
            date: "2025"
        },
        {
            id: 45,
            name: "Learning the SOLID Principles of Programming",
            description: "This course covers SOLID design principles - Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion. It demonstrates understanding of object-oriented design best practices essential for writing maintainable, scalable, and testable code.",
            institution: "DIC",
            image: "/images/certification/45.png",
            file: "/images/certification/45.pdf",
            date: "2025"
        },
        {
            id: 46,
            name: "Learning the Basics of AI",
            description: "This foundational certification introduces artificial intelligence concepts including machine learning, neural networks, natural language processing, and computer vision. It provides essential knowledge for understanding AI technology and its applications in modern software development.",
            institution: "DIC",
            image: "/images/certification/46.png",
            file: "/images/certification/46.pdf",
            date: "2025"
        },
        {
            id: 47,
            name: "Pursuing a Career as a Software Developer",
            description: "This career-focused course covers professional skills, industry best practices, career pathways, and soft skills essential for success as a software developer. It provides guidance on building a development career, continuous learning, and navigating the tech industry.",
            institution: "DIC",
            image: "/images/certification/47.png",
            file: "/images/certification/47.pdf",
            date: "2025"
        },
        {
            id: 48,
            name: "Learning Machine Learning Implementation for Flutter",
            description: "This advanced certification demonstrates ability to integrate machine learning models into Flutter applications. It covers TensorFlow Lite, on-device ML, model optimization, and creating AI-powered mobile apps with real-time inference capabilities.",
            institution: "DIC",
            image: "/images/certification/48.png",
            file: "/images/certification/48.pdf",
            date: "2025"
        },
        {
            id: 49,
            name: "Basics of Safety: Understanding Emergency Response Plan & Emergency Response Team in Fire Prevention",
            description: "This safety certification covers emergency response procedures, fire prevention strategies, and workplace safety protocols. It demonstrates commitment to maintaining safe work environments and understanding of emergency management, essential for any professional workplace setting.",
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
            description: "This Cisco certification validates fundamental Python programming skills including syntax, data types, control structures, functions, and basic object-oriented programming. It establishes foundation for Python development and demonstrates proficiency in one of the most versatile programming languages.",
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
            description: "This advanced Python certification covers modules, packages, exception handling, file operations, and advanced OOP concepts. It demonstrates intermediate to advanced Python programming skills and ability to build complex applications using Python's extensive ecosystem.",
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
            description: "This certification validates comprehensive Kotlin programming knowledge including syntax, null safety, coroutines, and Android development with Kotlin. It demonstrates proficiency in modern Android development and understanding of Kotlin's advantages over Java.",
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
            description: "This professional certification from Google covers comprehensive cybersecurity concepts including network security, threat detection, incident response, and security best practices. It demonstrates understanding of cybersecurity fundamentals and ability to protect systems and data from security threats.",
            institution: "COU",
            images: [
                "/images/certification/53.png"
            ],
            date: "2025"
        },
        {
            id: 54,
            name: "Google UX Design",
            description: "This Google certification validates user experience design skills including user research, wireframing, prototyping, and usability testing. It demonstrates ability to create user-centered designs and understanding of design thinking principles essential for creating successful digital products.",
            institution: "COU",
            images: [
                "/images/certification/54.png"
            ],
            date: "2025"
        },
        {
            id: 55,
            name: "IBM AI Developer",
            description: "This IBM professional certification demonstrates proficiency in AI application development, including working with AI frameworks, APIs, and machine learning models. It validates skills in building intelligent applications that leverage artificial intelligence and machine learning capabilities.",
            institution: "COU",
            images: [
                "/images/certification/55.png"
            ],
            date: "2025"
        },
        {
            id: 56,
            name: "IBM AI Engineering",
            description: "This comprehensive certification covers AI engineering principles including deep learning, neural networks, model training and deployment, and MLOps practices. It demonstrates advanced skills in building, optimizing, and deploying AI systems at scale.",
            institution: "COU",
            images: [
                "/images/certification/56.png"
            ],
            date: "2025"
        },
        {
            id: 57,
            name: "Meta Android Developer",
            description: "This Meta professional certification validates comprehensive Android development skills using Kotlin, Android SDK, Jetpack components, and modern Android development best practices. It demonstrates ability to build production-quality Android applications following industry standards.",
            institution: "COU",
            images: [
                "/images/certification/57.jpeg"
            ],
            date: "2025"
        },
        {
            id: 58,
            name: "IBM IT Project Manager",
            description: "This certification covers IT project management methodologies including Agile, Scrum, project planning, risk management, and stakeholder communication. It demonstrates ability to lead technical projects and manage development teams effectively.",
            institution: "COU",
            images: [
                "/images/certification/58.jpeg"
            ],
            date: "2025"
        },
        {
            id: 59,
            name: "IBM Machine Learning",
            description: "This comprehensive certification validates machine learning expertise including supervised and unsupervised learning, model evaluation, feature engineering, and ML pipeline development. It demonstrates proficiency in applying machine learning techniques to solve real-world problems.",
            institution: "COU",
            images: [
                "/images/certification/59.jpeg"
            ],
            date: "2025"
        },
        {
            id: 60,
            name: "IBM Front-End Developer Professional Certificate",
            description: "This professional certification covers complete front-end development stack including HTML, CSS, JavaScript, React, and modern front-end tools. It demonstrates comprehensive skills in building responsive, interactive web applications using industry-standard technologies.",
            institution: "COU",
            images: [
                "/images/certification/60.jpeg"
            ],
            date: "2025"
        },
        {
            id: 61,
            name: "IBM Back-End Development Professional Certificate",
            description: "This certification validates back-end development expertise including server-side programming, databases, APIs, cloud deployment, and microservices architecture. It demonstrates ability to build scalable, secure server applications using modern back-end technologies.",
            institution: "COU",
            images: [
                "/images/certification/61.jpeg"
            ],
            date: "2025"
        },
        {
            id: 62,
            name: "Adobe Content Creator",
            description: "This Adobe certification demonstrates proficiency in content creation using Adobe Creative Cloud tools including Photoshop, Illustrator, Premiere Pro, and other creative applications. It validates skills in digital content creation, video editing, and graphic design.",
            institution: "COU",
            images: [
                "/images/certification/62.jpeg"
            ],
            date: "2025"
        },
        {
            id: 63,
            name: "Data Science Foundations",
            description: "This foundational certification covers data science fundamentals including statistics, data analysis, visualization, and basic machine learning. It provides essential knowledge for understanding data-driven decision making and pursuing advanced data science specializations.",
            institution: "COU",
            images: [
                "/images/certification/63.jpeg"
            ],
            date: "2025"
        },
        {
            id: 64,
            name: "IBM Full Stack Software Developer",
            description: "This comprehensive certification validates full-stack development skills covering both front-end and back-end technologies, databases, DevOps, and cloud deployment. It demonstrates ability to build complete web applications from conception to deployment.",
            institution: "COU",
            images: [
                "/images/certification/64.jpeg"
            ],
            date: "2025"
        },
        {
            id: 65,
            name: "Xbox Graphic Designer",
            description: "This specialized certification covers graphic design principles and practices specifically for gaming and interactive entertainment. It demonstrates skills in creating visual assets, UI/UX design for games, and understanding of gaming industry design standards.",
            institution: "COU",
            images: [
                "/images/certification/65.jpeg"
            ],
            date: "2025"
        },
        {
            id: 66,
            name: "Meta iOS Developer",
            description: "This Meta professional certification validates iOS development expertise using Swift, SwiftUI, UIKit, and iOS frameworks. It demonstrates comprehensive skills in building native iOS applications following Apple's design guidelines and industry best practices.",
            institution: "COU",
            images: [
                "/images/certification/66.jpeg"
            ],
            date: "2025"
        },
        {
            id: 67,
            name: "Introduction to Cybersecurity",
            description: "This Cisco certification introduces cybersecurity fundamentals including threat landscape, security principles, cryptography basics, and network security. It provides essential knowledge for understanding cybersecurity challenges and beginning a career in information security.",
            institution: "CIS",
            images: [
                "/images/certification/67.jpeg"
            ],
            date: "2025"
        },
        {
            id: 68,
            name: "Networking Basics",
            description: "This certification covers fundamental networking concepts including OSI model, TCP/IP, network protocols, IP addressing, and basic network configuration. It establishes foundation for understanding computer networks and pursuing networking certifications.",
            institution: "CIS",
            images: [
                "/images/certification/68.jpeg"
            ],
            date: "2025"
        },
        {
            id: 69,
            name: "Networking Devices and Initial Configuration",
            description: "This hands-on certification demonstrates ability to configure network devices including routers, switches, and access points. It covers device setup, basic security configuration, and network troubleshooting skills essential for network administration.",
            institution: "CIS",
            images: [
                "/images/certification/69.jpeg"
            ],
            date: "2025"
        },
        {
            id: 70,
            name: "Sustainable Cities",
            description: "This certification covers urban sustainability concepts including smart city technologies, environmental planning, and sustainable development practices. It demonstrates understanding of how technology can contribute to creating more sustainable and livable urban environments.",
            institution: "COU",
            images: [
                "/images/certification/70.jpeg"
            ],
            date: "2025"
        },
        {
            id: 71,
            name: "Online Learning Design for Educators",
            description: "This course covers instructional design principles for online education, including course structure, engagement strategies, assessment design, and educational technology integration. It demonstrates ability to create effective online learning experiences.",
            institution: "COU",
            images: [
                "/images/certification/71.jpeg"
            ],
            date: "2025"
        },
        {
            id: 72,
            name: "IBM Business Analyst",
            description: "This professional certification covers business analysis methodologies including requirements gathering, process modeling, data analysis, and stakeholder management. It demonstrates ability to bridge the gap between business needs and technical solutions.",
            institution: "COU",
            images: [
                "/images/certification/72.jpeg"
            ],
            date: "2025"
        },
        {
            id: 73,
            name: "IBM Product Owner",
            description: "This certification validates product ownership skills including product strategy, backlog management, user story creation, and Agile product development. It demonstrates ability to define product vision and prioritize features to maximize business value.",
            institution: "COU",
            images: [
                "/images/certification/73.jpeg"
            ],
            date: "2025"
        },
        {
            id: 74,
            name: "The Teacher and Social and Emotional Learning (SEL)",
            description: "This course covers social and emotional learning principles, teaching strategies for developing emotional intelligence, and creating supportive learning environments. It demonstrates understanding of holistic education approaches that support student well-being and academic success.",
            institution: "COU",
            images: [
                "/images/certification/74.jpeg"
            ],
            date: "2025"
        },
        {
            id: 75,
            name: "Fundraising and Development",
            description: "This certification covers fundraising strategies, donor relations, grant writing, and development campaign management. It demonstrates skills in resource development and financial sustainability for organizations and projects.",
            institution: "COU",
            images: [
                "/images/certification/75.jpeg"
            ],
            date: "2025"
        },
        {
            id: 76,
            name: "Google Digital Marketing & E-commerce",
            description: "This Google certification validates digital marketing expertise including SEO, social media marketing, email marketing, analytics, and e-commerce strategies. It demonstrates comprehensive understanding of digital marketing channels and ability to drive online business growth.",
            institution: "COU",
            images: [
                "/images/certification/76.jpeg"
            ],
            date: "2025"
        },
        {
            id: 77,
            name: "IBM AI Foundations for Business",
            description: "This business-focused AI certification covers AI applications in business contexts, AI strategy, ethics, and implementation considerations. It demonstrates understanding of how artificial intelligence can be leveraged to solve business problems and create competitive advantages.",
            institution: "COU",
            images: [
                "/images/certification/77.jpeg"
            ],
            date: "2025"
        },
        {
            id: 78,
            name: "SAS Statistical Business Analyst",
            description: "This SAS certification validates statistical analysis skills using SAS software, including data manipulation, statistical methods, regression analysis, and business intelligence. It demonstrates proficiency in using statistical tools for data-driven business decision making.",
            institution: "COU",
            images: [
                "/images/certification/78.jpeg"
            ],
            date: "2025"
        },
        {
            id: 79,
            name: "Unilever Supply Chain Data Analyst",
            description: "This specialized certification from Unilever covers supply chain analytics, logistics optimization, inventory management, and data-driven supply chain decision making. It demonstrates expertise in analyzing complex supply chain data to improve operational efficiency.",
            institution: "COU",
            images: [
                "/images/certification/79.jpeg"
            ],
            date: "2025"
        },
        {
            id: 80,
            name: "Caring for Others",
            description: "This course covers caregiving principles, empathy development, communication skills for healthcare settings, and compassionate care practices. It demonstrates commitment to human-centered approaches in professional and personal contexts.",
            institution: "COU",
            images: [
                "/images/certification/80.jpeg"
            ],
            date: "2025"
        },
        {
            id: 81,
            name: "Foundations of Global Health",
            description: "This certification introduces global health challenges, public health systems, epidemiology, and international health policies. It provides essential knowledge for understanding health disparities, disease prevention, and improving health outcomes across diverse populations.",
            institution: "COU",
            images: [
                "/images/certification/81.png"
            ],
            date: "2025"
        },
        {
            id: 82,
            name: "Virtual Teacher",
            description: "This certification covers online teaching methodologies, virtual classroom management, digital pedagogy, and educational technology tools. It demonstrates ability to deliver effective instruction in virtual learning environments and engage students remotely.",
            institution: "COU",
            images: [
                "/images/certification/82.png"
            ],
            date: "2025"
        },  
        {
            id: 83,
            name: "Google IT Support Certification",
            description: "This Google professional certificate validates comprehensive IT support skills including troubleshooting, customer service, networking, operating systems, system administration, and security. It demonstrates foundational IT skills and readiness for entry-level IT support roles.",
            institution: "COU",
            images: [
                "/images/certification/83.png"
            ],
            date: "2025"
        },
        //terakhir dari presma sertifikat keahlian : Belajar Penerapan Machine Learning untuk Flutter / Learning Machine Learning Implementation for Flutter
    ];

    return NextResponse.json(data);
}