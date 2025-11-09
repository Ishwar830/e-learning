export const fakeDB = {
   users: [
      {
         id: "john",
         name: "John Doe",
         email: "john@example.com",
         password: "12345678",
         enrolledCourses: [1, 3, 5],
      },
   ],

   courses: [
      {
         id: 1,
         title: "Complete React Developer Course",
         description:
            "Master React from basics to advanced concepts including hooks, context, and Redux",
         longDescription:
            "This comprehensive course will take you from a React beginner to an advanced developer. You'll learn everything from basic components to complex state management, routing, and performance optimization.",
         instructor: "John Adams",
         tag: "BestSeller",
         level: "Intermediate",
         rating: 4.8,
         reviewCount: 2341,
         studentsEnrolled: 15420,
         duration: "42 hours",
         language: "English",
      },
      {
         id: 2,
         title: "Python for Data Science",
         description:
            "Learn Python programming and data analysis with pandas, numpy, and matplotlib",
         longDescription:
            "Dive into the world of data science with Python. This course covers everything you need to analyze, visualize, and interpret data using industry-standard libraries.",
         instructor: "John Miller",
         tag: "Hot & New",
         level: "Beginner",
         rating: 4.7,
         reviewCount: 1823,
         studentsEnrolled: 12340,
         duration: "35 hours",
         language: "English",
      },
      {
         id: 3,
         title: "UI/UX Design Masterclass",
         description:
            "Complete guide to user interface and user experience design with Figma",
         longDescription:
            "Learn the principles of great design and how to create stunning user interfaces that users love. Master Figma and design thinking methodology.",
         instructor: "David",
         tag: "BestSeller",
         categoryId: 4,
         level: "Beginner",
         rating: 4.9,
         reviewCount: 3102,
         studentsEnrolled: 18765,
         duration: "28 hours",
         language: "English",
      },
      {
         id: 4,
         title: "Node.js Backend Development",
         description:
            "Build scalable backend applications with Node.js, Express, and MongoDB",
         longDescription:
            "Master backend development with Node.js. Learn to build RESTful APIs, handle authentication, and work with databases.",
         instructor: "Matt Garry",
         tag: "BestSeller",
         level: "Intermediate",
         rating: 4.6,
         reviewCount: 1456,
         studentsEnrolled: 9876,
         duration: "38 hours",
         language: "English",
      },
      {
         id: 5,
         title: "Flutter Mobile App Development",
         description:
            "Create beautiful iOS and Android apps with Flutter and Dart",
         longDescription:
            "Build cross-platform mobile applications with Flutter. Learn Dart programming and create stunning native apps for both iOS and Android.",
         instructor: "Daniel",
         tag: "BestSeller",
         level: "Advanced",
         rating: 4.7,
         reviewCount: 987,
         studentsEnrolled: 7654,
         duration: "32 hours",
         language: "English",
      },
      {
         id: 6,
         title: "Digital Marketing Fundamentals",
         description:
            "Master SEO, social media marketing, and digital advertising strategies",
         longDescription:
            "Learn comprehensive digital marketing strategies to grow your business online. From SEO to social media, email marketing to paid ads.",
         instructor: "Ammy Watson",
         tag: "Hot & New",
         level: "Beginner",
         rating: 4.5,
         reviewCount: 1234,
         studentsEnrolled: 11234,
         duration: "24 hours",
         language: "English",
      },
   ],

   lessonsByCourse: new Map([
      [
         1, // React
         [
            {
               id: 1,
               title: "Introduction to React",
               sections: [
                  "What is React?",
                  "Setting Up Environment",
                  "JSX Basics",
                  "Hello World App",
               ],
            },
            {
               id: 2,
               title: "Components and Props",
               sections: [
                  "Functional Components",
                  "Props and Data Flow",
                  "Reusable Components",
               ],
            },
            {
               id: 3,
               title: "State and Lifecycle",
               sections: [
                  "Understanding State",
                  "setState Function",
                  "Lifecycle in Class Components",
               ],
            },
            {
               id: 4,
               title: "React Hooks",
               sections: [
                  "useState Hook",
                  "useEffect Hook",
                  "Creating Custom Hooks",
               ],
            },
            {
               id: 5,
               title: "React Router",
               sections: [
                  "Routing Basics",
                  "Nested Routes",
                  "Handling Navigation",
               ],
            },
         ],
      ],
      [
         2, // Python
         [
            {
               id: 1,
               title: "Getting Started with Python",
               sections: [
                  "Installing Python",
                  "Your First Script",
                  "Understanding Syntax",
               ],
            },
            {
               id: 2,
               title: "Data Types and Variables",
               sections: [
                  "Numbers and Strings",
                  "Lists and Tuples",
                  "Dictionaries and Sets",
               ],
            },
            {
               id: 3,
               title: "Control Flow",
               sections: ["If-Else Statements", "Loops", "List Comprehensions"],
            },
            {
               id: 4,
               title: "Functions and Modules",
               sections: [
                  "Defining Functions",
                  "Lambda Expressions",
                  "Importing Modules",
               ],
            },
            {
               id: 5,
               title: "File Handling and Exceptions",
               sections: [
                  "Reading and Writing Files",
                  "Handling Errors",
                  "Using with Statement",
               ],
            },
         ],
      ],
      [
         3, // UI/UX Design
         [
            {
               id: 1,
               title: "Introduction to UI/UX",
               sections: [
                  "What is UI/UX?",
                  "Difference between UI and UX",
                  "Design Thinking Basics",
               ],
            },
            {
               id: 2,
               title: "User Research",
               sections: [
                  "Understanding Users",
                  "Creating Personas",
                  "User Journey Mapping",
               ],
            },
            {
               id: 3,
               title: "Wireframing and Prototyping",
               sections: [
                  "Low-Fidelity Wireframes",
                  "Prototyping Tools",
                  "Usability Testing",
               ],
            },
            {
               id: 4,
               title: "Visual Design Principles",
               sections: [
                  "Typography",
                  "Color Theory",
                  "Layout and Composition",
               ],
            },
            {
               id: 5,
               title: "Design Systems and Accessibility",
               sections: [
                  "Component Libraries",
                  "Accessibility Basics",
                  "Consistency in Design",
               ],
            },
         ],
      ],
      [
         4, // Node.js
         [
            {
               id: 1,
               title: "Introduction to Node.js",
               sections: [
                  "What is Node.js?",
                  "Installing Node and npm",
                  "Running a Simple Script",
               ],
            },
            {
               id: 2,
               title: "Modules and Packages",
               sections: [
                  "Built-in Modules",
                  "Creating Custom Modules",
                  "Using npm Packages",
               ],
            },
            {
               id: 3,
               title: "Asynchronous JavaScript",
               sections: ["Callbacks", "Promises", "Async/Await"],
            },
            {
               id: 4,
               title: "Express.js Framework",
               sections: ["Creating a Server", "Routing", "Middleware"],
            },
            {
               id: 5,
               title: "Working with Databases",
               sections: [
                  "MongoDB Connection",
                  "CRUD Operations",
                  "Using Mongoose",
               ],
            },
         ],
      ],
      [
         5, // Flutter
         [
            {
               id: 1,
               title: "Introduction to Flutter",
               sections: [
                  "What is Flutter?",
                  "Setting Up Environment",
                  "Understanding Widgets",
               ],
            },
            {
               id: 2,
               title: "Layouts and Navigation",
               sections: [
                  "Row and Column Widgets",
                  "Stack and Container",
                  "Navigator and Routes",
               ],
            },
            {
               id: 3,
               title: "State Management",
               sections: [
                  "Stateful vs Stateless Widgets",
                  "Provider Package",
                  "SetState Usage",
               ],
            },
            {
               id: 4,
               title: "Working with APIs",
               sections: [
                  "HTTP Requests",
                  "Fetching JSON Data",
                  "Displaying Lists",
               ],
            },
            {
               id: 5,
               title: "Deploying Flutter Apps",
               sections: [
                  "Building for Android/iOS",
                  "Debug vs Release Mode",
                  "Publishing the App",
               ],
            },
         ],
      ],
      [
         6, // Digital Marketing
         [
            {
               id: 1,
               title: "Introduction to Digital Marketing",
               sections: [
                  "What is Digital Marketing?",
                  "Traditional vs Digital",
                  "Key Marketing Channels",
               ],
            },
            {
               id: 2,
               title: "SEO Fundamentals",
               sections: ["On-Page SEO", "Off-Page SEO", "Keyword Research"],
            },
            {
               id: 3,
               title: "Social Media Marketing",
               sections: [
                  "Creating Content Strategy",
                  "Managing Social Campaigns",
                  "Analytics and Engagement",
               ],
            },
            {
               id: 4,
               title: "Email and Content Marketing",
               sections: [
                  "Building Mailing Lists",
                  "Effective Copywriting",
                  "Automation Tools",
               ],
            },
            {
               id: 5,
               title: "Analytics and Ads",
               sections: [
                  "Google Analytics Basics",
                  "Running Paid Campaigns",
                  "Measuring ROI",
               ],
            },
         ],
      ],
   ]),
};
