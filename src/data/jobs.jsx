const [JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const jobs = [
    {
        title: 'Parking Ambassador',
        employer: 'City of Victoria',
        location: 'Victoria, BC',
        startDate: new Date(2017, JUL),
        endDate: new Date(2019, FEB),
        points: [
            "Identifying and enforcing parking-related infractions",
            "Educating the public and responding to inquiring",
            "De-escalating high-conflict scenarios"
        ]
    },
    {
        title: 'Video Timer',
        employer: 'Dandelion Software Ltd.',
        location: 'Victoria, BC',
        startDate: new Date(2012, APR),
        endDate: new Date(2012, SEP),
        points: [
            "Using linguistic expertise to improve product quality",
            "Managing subtitle database and adding them to educational videos",
            "Identifying errors in translations and suggesting corrections"
        ]
    },
    {
        title: 'Night Auditor',
        employer: 'Hotel Zed',
        location: 'Victoria, BC',
        startDate: new Date(2013, APR),
        endDate: new Date(2014, JUL),
        points: [
            "Managing emergency situations",
            "Identifying and correcting discrepancies in guest accounts and transactions",
            "Using critical thinking to resolve issues with guests and computer systems"
        ]
    },
    {
        title: 'EFL Instructor',
        employer: 'HESS International',
        location: 'Qidu, Taiwan',
        startDate: new Date(2014, JUL),
        endDate: new Date(2015, JUL),
        points: [
            "Instructing students from ages 3-16 in English",
            "Planning lessons and applying existing curricula",
        ]
    },
    {
        title: 'Adult Tutor',
        employer: 'A&D Tutoring',
        location: 'Edmonton, AB',
        startDate: new Date(2015, OCT),
        endDate: new Date(2017, JUN),
        points: [
            "Providing adults with education and job training",
            "Preparing one-on-one lessons and planning curricula",
            "Teaching ESL, Computers, Microsoft Office, GED, Math, English, and Customer Service"
        ]
    },
    {
        title: 'Technical Assistant',
        employer: 'City of Victoria',
        location: 'Victoria, BC',
        startDate: new Date(2019, FEB),
        endDate: new Date(2020, DEC),
        points: [
            "Creating spreadsheets, forms, documents, and graphical items",
            "Assessing and quantifying of City assets",
            "Utilizing tools such as Office, SharePoint, and Power Platform to create project solutions"
        ]
    },
    {
        title: 'Engineering Assistant',
        employer: 'City of Victoria',
        location: 'Victoria, BC',
        startDate: new Date(2021, MAY),
        endDate: new Date(2021, SEP),
        points: [
            "Collecting and maintaining data on traffic patterns",
            "Working with specialized software to analyze and report on data trends",
            "Installing and operating traffic-monitoring devices"
        ]
    },
    {
        title: 'Full Stack Project Analyst',
        employer: `Ministry of Citizens' Services`,
        location: 'Saanich, BC',
        startDate: new Date(2022, MAY),
        endDate: new Date(2022, AUG),
        points: [
            "Implemented testing framework to develop frontend and backend tests",
            "Created GitHub Actions workflows to automate testing, security scanning, and record results",
            "Containerized application to provide production-ready images as well as specialized images for portable developer environment",
            "Developed web applications using React and Node.js",
            "Worked with teams in an Agile environment"
        ]
    },
    {
        title: 'Full Stack Developer',
        employer: `Ministry of Citizens' Services`,
        location: 'Saanich, BC',
        startDate: new Date(2023, MAR),
        points: [
            "Developed frontend and backend solutions as scalable cloud-native applications",
            "Implemented repeatable automated processes for building, testing, documenting, and deploying",
            "Coordinated with team members to determine user requirements, project feasibility, and development strategy"
        ]
    },
]

export default jobs;