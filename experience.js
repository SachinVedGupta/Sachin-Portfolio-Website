const experiences = [
    {
        name: "Software Engineer",
        company: "McMaster Rocketry",
        description: "Used C++, Python, and OpenCV to combine the 4 camera angles into a singular 360-degree immersive video. Designed STM32 PCBs (KiCad) for communication & livestream support from on-rocket cameras to ground equipment.",
        date: "Sept 2024 – Present",
        type: "technical-team",
        skills: "C++, Python, Embedded Systems"
    },
    {
        name: "Network Management & Automation Intern",
        company: "Nokia",
        description: "Create Bash Scripts for efficient and automated network provisions: 2x faster. Developing environments with T-API (Postman/Swagger) implementation to simplify existing network tools for easier operation. Led 10 Senior employees across a curated 6-hour training session on setting up the Network Management System environment. Utilize Linux for Virtual Machine and Network Software Installation.",
        date: "Apr 2024 – Present",
        type: "internship",
        skills: "Bash/Linux Scripting, API's, Automation"
    },
    {
        name: "Machine Learning Intern",
        company: "Nokia",
        description: "Conducted a comprehensive research-based analysis on the impact that Generative AI has on 5G network traffic functions. Applied Pandas, Numpy, and Matplotlib to extract valuable data from excel spreadsheets. Leveraged Tensorflow & Keras to develop an RNN-based predictive model for the future growth of AI-based 5G network traffic. Collaborated with an MIT PHD Fellow and IoT Professor to create 98.1% accuracy Deep Learning models. Published an article to showcase a high-quality overview of the research.",
        date: "Jun 2024 – Dec 2024",
        type: "internship",
        skills: "TensorFlow, Data Analysis, Artificial Intelligence"
    },
    {
        name: "Software Engineer",
        company: "McMaster SumoBots",
        description: "Collaborated in technical team to create a fully autonomous fighting robot. At Internationals: won 4 battles, lost 2. Designed C++ algorithms to achieve fully autonomous reactions to surroundings.",
        date: "Sept 2023 – Present",
        type: "technical-team",
        skills: "C++, Robotics, Algorithm Development"
    },
    {
        name: "Youth Coach",
        description: "Worked as a Youth Coach for the Rogers, Jays Care Foundation. Led 25 youth across over 40 curated games and activities. Awarded $1000 scholarship for my hard work.",
        skills: "Interpersonal Skills, Creativity, Communication, Leadership",
        date: "Jun - Aug 2023",
        type: "non-coding"
    },
    {
        name: "Advanced Hack Club",
        description: "Mentor to students and taught them coding.",
        skills: "Python, Teaching, Mentoring",
        date: "Sep 2022 - Jun 2023",
        type: "non-coding"
    },
    {
        name: "My First Client!",
        description: "Created a series of graphics for JSOT (Jain Society of Toronto) used in their 2023 Annual Members Publication. This marked the start of 'Sachin Graphic Design Company'.",
        skills: "Professionalism, Working with Clients, Creativity",
        date: "Jul 2023",
        type: "non-coding"
    },
    {
        name: "DECA",
        description: "Pitched a start-up business concept, 'Bumpsense', to a panel of judges. Created a prototype using 3D printed parts, an Arduino, and additional components.",
        skills: "Arduino (C++), 3D Modelling (CAD), Innovation, Public Speaking, Marketing",
        date: "Sep 2022 - Feb 2023",
        type: "technical-team"
    },
];

const experienceList = document.getElementById('experience-list');
const dateDisplay = document.getElementById('date-display');

// Function to create and append experience modules
experiences.forEach(exp => {
    const module = document.createElement('div');
    module.className = `module ${exp.type}`;
    
    const moduleName = document.createElement('div');
    moduleName.className = 'module-name';
    moduleName.innerHTML = `<strong>${exp.name}</strong>${exp.company ? ` @ ${exp.company}` : ''}`;
    
    const moduleDescription = document.createElement('div');
    moduleDescription.className = 'module-description';
    moduleDescription.innerText = exp.description;

    const moduleSkills = document.createElement('div');
    moduleSkills.className = 'module-skills';
    moduleSkills.innerText = exp.skills || "Skills not specified.";

    const moduleDate = document.createElement('div');
    moduleDate.className = 'module-date';
    moduleDate.innerText = exp.date;

    // Append elements to the module
    module.appendChild(moduleName);
    module.appendChild(moduleDescription);
    module.appendChild(moduleSkills);
    module.appendChild(moduleDate);
    
    // Append the module to the experience list
    experienceList.appendChild(module);
});

// Function to update the sticky date display
function updateCurrentDate() {
    const modules = document.querySelectorAll('.module');
    let currentDate = '';

    modules.forEach(module => {
        const moduleRect = module.getBoundingClientRect();
        if (moduleRect.top <= window.innerHeight / 2 && moduleRect.bottom >= window.innerHeight / 2) {
            currentDate = module.querySelector('.module-date').innerText;
        }
    });

    dateDisplay.innerText = `Current Date: ${currentDate || 'No current opportunity'}`;
}

// Listen for scroll events
window.addEventListener('scroll', updateCurrentDate);
