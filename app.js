// Projects data
const projects = [
    {
        title: "Project One",
        description: "Details of project one.",
        image: "project1.jpg"
    },
    {
        title: "Project Two",
        description: "Details of project two.",
        image: "project2.jpg"
    },
    {
        title: "Project Three",
        description: "Details of project three.",
        image: "project3.jpg"
    }
];

// Skills data
const skills = [
    {
        icon: "fas fa-shield-alt",
        name: "Anti-terrorism"
    },
    {
        icon: "fas fa-user-shield",
        name: "Force Protection"
    },
    {
        icon: "fas fa-cogs",
        name: "Technology Services"
    },
    {
        icon: "fas fa-brain",
        name: "Machine Learning"
    },
    {
        icon: "fas fa-language",
        name: "Large Language Models"
    }
];

// Function to generate project HTML
function generateProjectHTML(project) {
    return `
        <div class="project-item">
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>
    `;
}

// Function to generate skill HTML
function generateSkillHTML(skill) {
    return `
        <div class="skill-item">
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
        </div>
    `;
}

// Function to populate projects
function populateProjects() {
    const projectGrid = document.querySelector(".project-grid");
    projectGrid.innerHTML = projects.map(generateProjectHTML).join("");
}

// Function to populate skills
function populateSkills() {
    const skillGrid = document.querySelector(".skill-grid");
    skillGrid.innerHTML = skills.map(generateSkillHTML).join("");
}

// Populate projects and skills on page load
document.addEventListener("DOMContentLoaded", function() {
    populateProjects();
    populateSkills();
});