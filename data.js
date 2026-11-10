// All site content lives here, so updating the portfolio means editing this file only.
// repo: GitHub repo name under itspoppadom. Set private: true while a repo is private,
// and the card shows "Code available on request" instead of a broken link.

window.PORTFOLIO = {
  journey: [
    {
      years: "2022 – 2023",
      title: "Intermediate Computing: Software Development (SCQF 5/6)",
      place: "North East Scotland College",
      text: "First formal programming course. Built my first website to a web-design specification and started using Git and GitHub.",
    },
    {
      years: "2023 – 2024",
      title: "HNC Computing (Next Gen): Software Development and Networking & Infrastructure",
      place: "North East Scotland College",
      text: "Java and object-oriented programming, Cisco networking and cyber security. Took part in RGUHack 2023 and the F24 Greenpower electric car team. Worked as Student IT HelpZone shift leader and did a summer internship with the college IT team.",
    },
    {
      years: "2024 – 2025",
      title: "HND Computing: Software Development",
      place: "North East Scotland College",
      text: "Databases, HCI, professional practice and a team-built charity auction platform in React, Flask and MongoDB. My team won at RGU Hack 2025.",
    },
    {
      years: "2025 – present",
      title: "BSc Computer Science",
      place: "Robert Gordon University",
      text: "AI for problem solving, concurrent programming, computer vision, data visualisation and languages & compilers. Also competed at RGUHack 26.",
    },
  ],

  projects: [
    // ---------- Hackathons ----------
    {
      title: "Alien Detector",
      category: "hackathon",
      year: 2025,
      featured: true,
      badge: "🏆 Team win",
      context: "RGU Hack 2025 · team Circuit Breakers",
      summary:
        "A portable, Alien-inspired motion tracker. Two ultrasonic sensors on 180° servos sweep the room, an Arduino streams the readings to a Raspberry Pi 3B+, and a Python GUI plots anything it finds on a radar screen. We pushed reliable range out to about 120 cm (peaking near 140 cm), past the 50–100 cm brief.",
      stack: ["Arduino (C++)", "Raspberry Pi", "Python GUI", "Ultrasonic sensors", "Servos", "3D modelling"],
      links: [
        { label: "Write-up", url: "https://dominiccameronhnd.wordpress.com/2025/02/24/rgu-hack-2025/" },
      ],
      repo: "AlienDetector",
      private: true,
    },
    {
      title: "Escape Fae Deen",
      category: "hackathon",
      year: 2026,
      featured: true,
      context: "RGUHack 26 · team SOCET Redemption",
      summary:
        "A point-and-click escape game set in Aberdeen through Google Street View. Players navigate the city centre in three rounds, dodging seagulls and dodgy encounters, with fog-of-war discovery, quick-time events, anti-cheat validation and a leaderboard.",
      stack: ["JavaScript", "Google Maps / Street View API", "Node.js", "Express", "PostgreSQL"],
      links: [{ label: "Demo video", url: "https://youtu.be/oD-TQe0ldrY" }],
      repo: "RGUHack26v2",
    },
    {
      title: "RGU Campus Interactive Map",
      category: "hackathon",
      year: 2023,
      context: "RGUHack 2023",
      summary:
        "My first hackathon. In 24 hours our team built an interactive map of the Robert Gordon University campus and a prototype website to go with it.",
      stack: ["HTML", "CSS", "Graphics"],
      repo: "hackathonrgu",
    },

    // ---------- Personal ----------
    {
      title: "Pip, AI Desk Companion",
      category: "personal",
      year: 2026,
      featured: true,
      image: "assets/pip-faces.png",
      imageAlt: "Pip's animated faces: pip, robot, cat, owl, ghost, dragon, wizard and hero",
      context: "Self-hosted home assistant",
      summary:
        "A desk companion with an animated, shapeshifting face that chats, sets timers and plays Spotify on a Google Home. Everything runs on my own hardware with a local LLM, so there are no per-message API costs. There is a Raspberry Pi 5 version with touchscreen and camera, and standalone ESP32-S3 firmware.",
      stack: ["Python", "Raspberry Pi 5", "ESP32-S3 (Arduino)", "Ollama (Gemma 3)", "Home Assistant", "Proxmox", "systemd"],
      repo: "ai-companion",
      private: true,
    },
    {
      title: "Pi Zero LTE Tracker",
      category: "personal",
      year: 2026,
      context: "Embedded Linux",
      summary:
        "Cellular data and GPS-free positioning for a Raspberry Pi Zero 2 W. One script powers up a Clipper LTE modem over GPIO, configures it with AT commands and brings up a PPP link. A companion systemd service scans nearby Wi-Fi and uses the Google Geolocation API to keep an always-fresh location cache.",
      stack: ["Python", "Raspberry Pi Zero 2 W", "AT commands", "pppd", "systemd", "Google Geolocation API"],
      repo: "clipper-lte-ppp-setup",
      extraRepos: [{ repo: "wifi-locator", label: "Wi-Fi locator", private: true }],
    },
    {
      title: "Exotic Fish Aquarium Manager",
      category: "personal",
      year: 2025,
      context: "Full-stack web app",
      summary:
        "Helps fish keepers plan a tank: browse a species database, build a virtual aquarium, check species compatibility and tank sizing, and get recommendations for fish that would suit the setup.",
      stack: ["JavaScript", "Node.js", "Express", "MongoDB"],
      repo: "aquarium-species-compatibility",
      private: true,
    },

    // ---------- School / university ----------
    {
      title: "Dog Walking Puzzle Solver",
      category: "school",
      year: 2026,
      context: "BSc · AI for Problem Solving",
      summary:
        "Coursework that models a dog-walking puzzle as a state-space search problem and uses A* to find the optimal path from start to goal, with its own state, action and successor classes and tests.",
      stack: ["Java", "A* search", "State-space modelling"],
      repo: "aips-coursework",
      private: true,
      extraRepos: [{ repo: "aips-quiz", label: "Revision quiz" }],
    },
    {
      title: "Chart Colour Survey",
      category: "school",
      year: 2026,
      context: "BSc · CM4125 Data Visualisation",
      summary:
        "An accessible survey that asks people, especially colour-blind people, how readable four chart palettes are. A static page on GitHub Pages posts answers to a Google Apps Script that writes them into a Google Sheet, with no server or API keys.",
      stack: ["HTML", "CSS", "JavaScript", "Google Apps Script", "GitHub Pages"],
      repo: "palette-survey",
    },
    {
      title: "Charity Auction Platform",
      category: "school",
      year: 2025,
      featured: true,
      context: "HND · Professional Practice team project",
      summary:
        "A team-built auction site for a charity with login and registration, access levels, listing management, bidding, category filters and a responsive admin interface. I built React components such as the manageable listings and category filters, wired them to the Flask API and reviewed teammates' pull requests. We ran the project with GitHub Projects sprints.",
      stack: ["React", "TypeScript", "Python Flask", "MongoDB", "GitHub Projects"],
      links: [
        { label: "Progress log", url: "https://dominiccameronhnd.wordpress.com/2025/03/07/progress-update-2/" },
        { label: "Teamwork write-up", url: "https://dominiccameronhnd.wordpress.com/2025/05/26/evidence-of-meta-skills-in-action/" },
      ],
      repo: "AuctionWebsite-master",
      private: true,
      repoNote: "Final version lives in the team's private organisation repo.",
    },
    {
      title: "Car Service Manager",
      category: "school",
      year: 2025,
      context: "HND · Software Development",
      summary:
        "A Java desktop app for a garage to manage customers, cars, garages and service jobs. Built with Maven, a DAO layer over a relational database and Swing dialogs, with a developer guide, user guide and test log.",
      stack: ["Java", "Maven", "Swing", "MySQL", "DAO pattern"],
      repo: "Maven-Car-Service",
      private: true,
    },
    {
      title: "Hospital Database System",
      category: "school",
      year: 2025,
      context: "HND · Software Development assessment",
      summary:
        "A Java application connected to a MySQL hospital database for tracking patients, doctors, visits, prescriptions, drugs and insurance claims, using a DAO factory to keep data access separate from the UI.",
      stack: ["Java 17", "MySQL", "Maven", "DAO factory"],
      repo: "HND-SD-Project",
    },
    {
      title: "Healthcare Portal Prototype",
      category: "school",
      year: 2025,
      context: "HND · Human-Computer Interaction",
      summary:
        "A clickable prototype of a healthcare portal with role-specific dashboards for administrators, receptionists, claims examiners and healthcare providers, designed from wireframes and a small design system.",
      stack: ["HTML", "CSS", "JavaScript", "Wireframing"],
      repo: "HCI-OC3-Prototype",
    },
    {
      title: "Inventory Management System",
      category: "school",
      year: 2024,
      context: "HNC · Software Development",
      summary:
        "A console inventory and basket system in Java that stores items in files and logs activity through java.util.logging.",
      stack: ["Java", "OOP", "File I/O", "Logging"],
      repo: "HNCSoftwareProject",
    },
    {
      title: "F24 Greenpower Electric Car",
      category: "school",
      year: 2023,
      badge: "🏅 Best Newcomer",
      context: "North East Scotland College team",
      summary:
        "Part of the college team that built and raced an electric car in the Greenpower series. We won Best Newcomer at Alford and were invited to the international final at Rockingham Speedway in England.",
      stack: ["Engineering", "Teamwork", "Electric vehicles"],
    },
    {
      title: "Rescue Drone Concept",
      category: "school",
      year: 2023,
      context: "CREST Gold Award",
      summary:
        "A research project on emergency-response drones that could deliver first-aid kits and a defibrillator to an accident scene before an ambulance arrives.",
      stack: ["Research", "Design"],
      links: [
        {
          label: "Project document",
          url: "https://docs.google.com/document/d/1o6wK8rQfF-jP8fOhv-WflDu7_twaX2_z/edit?usp=sharing&ouid=107030483970115632336&rtpof=true&sd=true",
        },
      ],
    },
    {
      title: "First Website",
      category: "school",
      year: 2023,
      context: "SCQF 5/6 · Web Design assessment",
      summary: "A multi-page website built to the specification of my web design assessment.",
      stack: ["HTML", "CSS"],
      repo: "webauthoring",
    },
  ],

  skills: [
    { group: "Languages", items: ["Java", "Python", "JavaScript / TypeScript", "C++ (Arduino)", "C#", "SQL", "HTML & CSS"] },
    { group: "Frameworks & tools", items: ["React", "Node.js / Express", "Flask", "Next.js", "Maven", "Git & GitHub", "OpenCV", "TensorFlow"] },
    { group: "Data", items: ["MySQL", "MongoDB", "PostgreSQL", "Google Sheets / Apps Script"] },
    { group: "Hardware & infra", items: ["Raspberry Pi", "Arduino", "ESP32", "Proxmox", "Home Assistant", "Linux & systemd", "Cisco networking"] },
    { group: "Ways of working", items: ["Agile sprints", "Code review", "UML & requirements", "HCI design", "Testing plans"] },
  ],

  experience: [
    { role: "Student IT HelpZone Shift Leader", org: "North East Scotland College", when: "2023 – 2025", text: "Led shifts, supervised colleagues and handled IT support for students: malware removal, Wi-Fi, accounts, drivers and accessibility setup." },
    { role: "IT Summer Intern", org: "North East Scotland College ITTS", when: "Summer 2023", text: "Ticket-based support, IT asset tracking, network-wide OS deployment and wireless access point upgrades across campus." },
    { role: "Customer Advisor", org: "EE / BT", when: "2022", text: "" },
    { role: "Customer Service Ambassador", org: "OCS Group", when: "2019 – 2022", text: "" },
  ],

  links: {
    github: "https://github.com/itspoppadom",
    linkedin: "https://www.linkedin.com/in/domatsoftware",
    blog: "https://dominiccameronhnd.wordpress.com/",
  },
};
