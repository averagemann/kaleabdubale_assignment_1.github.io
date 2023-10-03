const express = require("express");
const app = express();
const port = 3000; // Change to your desired port number

// Setting application's templating engine to EJS
app.set("view engine", "ejs");

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define routes for your pages
app.get("/", (req, res) => {
  res.render("pages/home"); // Update to your home page EJS file
});

app.get("/about", (req, res) => {
  // Passing data to the view
  res.render("pages/about", {
    title: "About Me",
    details: [
      "Your about me details here.",
      "You can include your skills, education, and more.",
    ],
  });
});

app.get("/projects", (req, res) => {
  // Passing data to the view
  res.render("pages/projects", {
    title: "Projects",
    projects: [
      {
        title: "Project 1",
        description: "Description of Project 1.",
      },
      {
        title: "Project 2",
        description: "Description of Project 2.",
      },
      // Add more projects as needed
    ],
  });
});

app.get("/services", (req, res) => {
  // Passing data to the view
  res.render("pages/services", {
    title: "Services",
    services: [
      {
        name: "Service 1",
        description: "Description of Service 1.",
      },
      {
        name: "Service 2",
        description: "Description of Service 2.",
      },
      // Add more services as needed
    ],
  });
});

app.get("/contact", (req, res) => {
  res.render("pages/contact", {
    title: "Contact Me",
    contactInfo: {
      email: "your@email.com",
      phone: "123-456-7890",
      address: "123 Main Street, City, Country",
    },
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
