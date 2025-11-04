export const fakeDB = {
   users: [
      {
         id: 1,
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
         instructorId: 3,
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

   lessons: [
      {
         id: 1,
         courseId: 1,
         title: "Introduction to React",
         sections: [
            "Getting Started",
            "React Basics",
            "React Components, React Props",
         ],
      },
      {
         id: 2,
         courseId: 1,
         title: "React Hooks",
         sections: [
            "Introduction to Hooks",
            "useState Hook",
            "useContext Hook",
            "useEffect Hook",
         ],
      },
      {
         id: 3,
         courseId: 1,
         title: "Components and Props",
         sections: [
            "Introduction to Hooks",
            "useState Hook",
            "useContext Hook",
            "useEffect Hook",
         ],
      },
      {
         id: 4,
         courseId: 1,
         title: "State and Lifecycle",
         sections: [
            "Introduction to Hooks",
            "useState Hook",
            "useContext Hook",
            "useEffect Hook",
         ],
      },
      {
         id: 5,
         courseId: 1,
         title: "Handling Events",
         sections: [
            "Introduction to Hooks",
            "useState Hook",
            "useContext Hook",
            "useEffect Hook",
         ],
      },
   ],
};
