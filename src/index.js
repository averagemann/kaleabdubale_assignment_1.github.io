const express = require("express");
const app = express();
const port = 3001; // Change to your desired port number

// Setting application's templating engine to EJS
app.set("view engine", "ejs");

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Define routes for your pages

// Home Page
app.get("/", (req, res) => {
  res.render("pages/home", {
    title: "Welcome to My Website ",
    details: [
      // GUI Design: Displaying a dynamic showcase of the student's journey
      // Functionality: Displaying details about the portfolio and its purpose
      "My portfolio serves as a dynamic showcase of my journey as a computer science student, reflecting my dedication to continuous learning, innovation, and growth in the field of technology. With a commitment to excellence, I strive to demonstrate my proficiency in diverse programming languages, problem-solving abilities, and a passion for creating meaningful software solutions. Through my portfolio, I aim to inspire and connect with like-minded individuals while documenting my progress and contributions to the world of computer science. Together, let's explore the limitless possibilities of technology and shape a brighter digital future.",
    ],
  });
});

// About Page
app.get("/about", (req, res) => {
  res.render("pages/about", {
    title: "About Me",
    details: [
      // GUI Design: Displaying information about the student
      // Functionality: Providing details about the student's background and interests
      "Hello, I'm Kaleab Dubale. I am a computer science student with a passion for front-end web development. With 1 year of experience in basic programming, I believe in enjoying my time over making future progress, and I'm dedicated to enjoying however long I have on this world. When I'm not reading or listening to fiction, you can find me watching comedy-based videos.",
    ],
  });
});

// Projects Page
app.get("/projects", (req, res) => {
  res.render("pages/projects", {
    title: "Projects",
    projects: [
      // GUI Design: Displaying a list of projects
      // Functionality: Providing details about each project
      {
        title: "Project 1",
        description: "this was my first web page it was not amazing but it is what i started with and i am proud of it.",
        
      },
      {
        title: "Project 2",
        description:"i had made a small contrubution of creating a translation app for a final project of ui smart devices"},
      
      {
        title: "Project 3",
        description:  `Created an organized display to showcase individuals’ credit information using SQL scripting in order for an efficient and simple review of their credits including their credit score, history, and credit card information.
        - Led a team of three in creating a credit bureau program resulting in the successful development and implementation of the program within the timeline.
        - Collaborated with team members and clients to gather requirements and ensure alignment with project goals resulting in high levels of satisfaction and successful adoption of the program.
        - Collaborated with team members to define project goals and scope resulting in a clear understanding and alignment of project objectives among team members.
        - Presented the program to the class and received positive feedback resulting in high grades and recognition from the instructor.`
     
      }, 
    ],
  });
});

// Services Page
app.get("/services", (req, res) => {
  res.render("pages/services", {
    title: "Services",
    services: [
      // GUI Design: Displaying a list of services
      // Functionality: Providing details about each service
      {
        name: "General Programming",
        description: "Web development is the process of creating websites and web applications using technologies like HTML, CSS, and JavaScript. It focuses on crafting user-friendly and functional online experiences.",
      },
      {
        name: "Web Development",
        description: "Web development involves designing and building websites and web applications, making them user-friendly and functional. Developers use a mix of technologies, including HTML, CSS, and JavaScript, to create engaging online experiences.",
      },
    
    ],
  });
});

// Contact Page
app.get("/contact", (req, res) => {
  res.render("pages/contact", {
    title: "Contact Me",
    contactInfo: {
      // GUI Design: Displaying contact information
      // Functionality: Providing contact details for users to reach out
      email: "dubalekaleab@gmail.com",
      phone: "647-914-8609",
      address: "154 Murison Blvd, Toronto, Canada",
    },
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
