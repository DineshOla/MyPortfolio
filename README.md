# MyPortfolioMy  
A responsive personal portfolio website showcasing my skills, projects, and contact information. Built with HTML, CSS, and JavaScript, this portfolio highlights my journey as a BCA student passionate about web development and investment analysis.



Table of Contents
Overview
Features
Technologies Used
Setup
File Structure
Usage
Customization
Live Demo
Contributing
License


#Overview
This portfolio serves as a digital resume, featuring a clean and modern design with responsive layouts for mobile, tablet, and desktop devices. It includes sections for personal information, projects, and contact details, enhanced with animations like a typing effect and smooth scrolling.

#Features
Responsive Design: Adapts seamlessly to various screen sizes using CSS media queries and clamp() for fluid scaling.
Interactive Navigation: Mobile-friendly hamburger menu and smooth scrolling for all nav links.
Typing Animation: Dynamic text effect in the home section showcasing multiple roles (e.g., "Web Developer," "Investor").
Project Showcase: Grid-based project cards with hover effects and links to live demos.
Back-to-Top Button: Appears on scroll for easy navigation to the top.
Social Media Links: Footer with icons linking to social profiles.
Accessibility: Includes ARIA labels and keyboard navigation support.

#Technologies Used
HTML5: Semantic markup for structure and accessibility.
CSS3: Custom styles with variables, Flexbox, Grid, and responsive design techniques.
JavaScript: Adds interactivity (e.g., typing effect, scroll behavior, menu toggle).
Font Awesome: Icons for navigation and social media links.
External CDN: Font Awesome icons loaded via CDN.

#Setup
To run this project locally, follow these steps:

Clone the Repository:
git clone https://github.com/dineshola/MyPortfolio.git
Navigate to the Project Directory:
 
cd MyPortfolio
Open the Project:
Open index.html in a web browser (e.g., Chrome, Firefox) directly, or
Use a local server (recommended for proper resource loading):
 
npx live-server
Ensure Dependencies:
An internet connection is required to load Font Awesome icons from the CDN.


#File Structure

MyPortfolio/
│
├── img/                  # Image assets
│   ├── home_background.png
│   ├── Screenshot 2025-03-02 at 6.30.32 PM.png
│   ├── OlaClothing_Project_1.png
│   ├── QuizWebpage_Project_2.png
│   └── MyPortfolio_Project_3.png
├── styles.css            # Main stylesheet
├── script.js             # JavaScript for interactivity
└── index.html            # Main HTML file


#Usage
Navigation: Click the hamburger menu (mobile) or nav links (desktop) to explore sections.
Projects: Hover over project cards to see a zoom effect; click to visit live demos.
Contact: Use the email or phone links in the footer to get in touch.
Back-to-Top: Scroll down to reveal the button and click to return to the top.


#Customization
To personalize this portfolio:

Update Content:
Edit index.html to change name, bio, projects, or contact info.
Replace images in the img/ folder with your own.
Styling:
Modify CSS variables in :root (e.g., --primary-color) in styles.css.
Adjust layouts or breakpoints in media queries.
JavaScript:
Update textArray in script.js to change the typing animation text.
Modify event listeners for additional interactivity.


#Live Demo
Check out the live version here: Dinesh Kumar's Portfolio (Update this link if hosted elsewhere).

#Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make changes and commit (git commit -m "Add feature").
Push to your branch (git push origin feature-branch).
Open a pull request.

#License
This project is licensed under the MIT License. See LICENSE for details.
