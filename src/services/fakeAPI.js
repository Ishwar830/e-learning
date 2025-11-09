import { fakeDB } from "./fakeDB";

const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

const fakeAPI = {
   // Courses
   getCourses: async (filters = {}) => {
      await delay();
      let courses = [...fakeDB.courses];

      if (filters.level) {
         courses = courses.filter((c) => c.level === filters.level);
      }

      if (filters.search) {
         courses = courses.filter((c) =>
            c.title.toLowerCase().includes(filters.search.toLowerCase())
         );
      }

      if (filters.sortBy === "rating") {
         courses.sort((a, b) => b.rating - a.rating);
      } else if (filters.sortBy === "popularity") {
         courses.sort((a, b) => b.studentsEnrolled - a.studentsEnrolled);
      }

      return {
         success: true,
         data: courses,
         total: courses.length,
      };
   },

   getCourseById: async (id) => {
      await delay();
      const course = fakeDB.courses.find((c) => c.id === parseInt(id));

      if (!course) {
         return {
            success: false,
            error: "Course not found",
         };
      }

      const lessons = fakeDB.lessons;

      return {
         success: true,
         data: {
            ...course,
            lessons,
         },
      };
   },

   // Authentication
   authenticateUser: async (email, password) => {
      await delay();
      const user = fakeDB.users.find(
         (u) => u.email === email && u.password === password
      );

      if (!user) {
         return {
            success: false,
            error: "Invalid credentials",
         };
      }

      return {
         success: true,
         data: {
            user,
            token: "fake-jwt-token-" + user.id,
         },
      };
   },

   createUser: async (userName, email, password) => {
      await delay();
      // validation
      const doesUserExist = fakeDB.users.find((u) => u.email === email);
      if (doesUserExist) {
         return {
            success: false,
            error: "User Email already exist",
         };
      }

      const user = {
         name: userName,
         id: crypto.randomUUID(),
         email,
         password,
         enrolledCourses: [],
      };

      fakeDB.users.push(user);

      return {
         success: true,
         data: { user, token: "fake-jwt-token-" + user.id },
      };
   },

   // Get current user
   getCurrentUser: async (userId) => {
      await delay();
      const user = fakeDB.users.find((u) => u.id === parseInt(userId));

      if (!user) {
         return {
            success: false,
            error: "User not found",
         };
      }

      return {
         success: true,
         data: user,
      };
   },

   // Enrollments
   getUserEnrollments: async (userId) => {
      await delay();
      const response = await this.getCurrentUser(userId);

      if (response.success) {
         const user = response.data;
         const enrolledCourses = fakeDB.courses.filter((c) =>
            user.enrolledCourses.includes(c.id)
         );

         return {
            success: true,
            data: enrolledCourses,
         };
      }

      return {
         success: false,
      };
   },

   // Enroll in a course
   enrollCourse: async (userId, courseId) => {
      await delay(800);

      const existing = fakeDB.enrollments.find(
         (e) => e.userId === userId && e.courseId === courseId
      );

      if (existing) {
         return {
            success: false,
            error: "Already enrolled in this course",
         };
      }

      fakeDB.users.enrolledCourses.push[courseId];

      return {
         success: true,
         message: "Successfully enrolled!",
      };
   },
};

export default fakeAPI;
