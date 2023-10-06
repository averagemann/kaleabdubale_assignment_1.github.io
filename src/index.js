const express = require("express");
const app = express();
const port = 3000; // Change to your desired port number

// Setting application's templating engine to EJS
app.set("view engine", "ejs");

// Serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'));

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
        description: "Description of Project 1.",
      },
      {
        title: "Project 2",
        description: "Description of Project 2.",
      },
      {
        title: "Project 3",
        description: "Description of Project 3.",
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
