// ====== Constants ======

const profile = {
    name: "Bahar",
    surname: "Pashayeva",
    specialization: "Information security student",
    contact: {
        phone: "+123-456-7890",
        email: "hello@reallygreatstyle.com",
        address: "123 anywhere St., Any City",
        website: "www.reallygreatsite.com"
    },
    education: [
        {
            year: "2009-2030",
            university: "Wardiere University",
            degree: "Master of Business Management"
        },
        {
            year: "2025-2029",
            university: "Wardiere University",
            degree: "Bachelor of Business",
            gpa: "GPA: 3.8 / 4.0"
        }
    ],
    skills: [
        "Project Management", "Public Relationships", "Teamwork", "Time Management",
        "Leadership", "Effective Communication", "Critical Thinking"
    ],
    languages: [
        "English (Fluent)", "French (Fluent)", "German (Basic)", "Spanish (Intermediate)"
    ],
    profileDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    experience: [
        {
            company: "Borchello Studio",
            position: "Marketing manager & Specialist",
            tasks: [
                "Develop and execute comprehensive marketing strategies.",
                "Align strategies with company goals.",
                "Coordinate with cross-functional teams."
            ]
        },
        {
            company: "Fauget Studio",
            position: "Marketing manager & Specialist",
            tasks: [
                "Create and manage marketing budget.",
                "Oversee market research.",
                "Monitor brand consistency."
            ]
        },
        {
            company: "Studio Shodwe",
            position: "Marketing manager & Specialist",
            tasks: [
                "Develop and execute comprehensive marketing strategies."
            ]
        }
    ],
    references: [
        {
            name: "Estelle Darcy",
            title: "Wardiere Inc. / CTO",
            phone: "123-456-7890",
            email: "hello@reallysite.com"
        },
        {
            name: "Harper Richard",
            title: "Wardiere Inc. / CEO",
            phone: "123-456-7890",
            email: "hello@reallysite.com"
        }
    ]
};

// ====== Functions to Render ======

// Fill left side (contact, education, skills, languages)
function renderLeftSide() {
    const leftSide = document.getElementById('left-side');
    leftSide.innerHTML = `
        <div><img class="profile-images" src="images/profile_image.jpg" alt="Profile Image"></div>
        <div class="contact">
            <h2>Contact</h2><hr/>
            <p>${profile.contact.phone}<br>${profile.contact.email}<br>${profile.contact.address}<br>${profile.contact.website}</p>
        </div>
        <div class="education">
            <h2>Education <button class="add-btn" data-section="education">+ Əlavə et</button></h2><hr/>
            <ul>${profile.education.map(edu => `
                <li>
                    <strong>${edu.year}</strong><br>
                    ${edu.university}<br>
                    ${edu.degree}${edu.gpa ? `<br>${edu.gpa}` : ''}
                    <span class="delete-btn">×</span>
                </li>
            `).join('')}</ul>
        </div>
        <div class="skill">
            <h2>Skills <button class="add-btn" data-section="skills">+ Əlavə et</button></h2><hr/>
            <ul>${profile.skills.map(skill => `
                <li>${skill} <span class="delete-btn">×</span></li>
            `).join('')}</ul>
        </div>
        <div class="languages">
            <h2>Languages <button class="add-btn" data-section="languages">+ Əlavə et</button></h2><hr/>
            <ul>${profile.languages.map(lang => `
                <li>${lang} <span class="delete-btn">×</span></li>
            `).join('')}</ul>
        </div>
    `;
}

// Fill right side (name, profile, experience, reference)
function renderRightSide() {
    const rightSide = document.getElementById('right-side');
    rightSide.innerHTML = `
        <div class="name-section">
            <h1><span class="name">${profile.name}</span> <span class="surname">${profile.surname}</span></h1>
            <h2><span class="specialization">${profile.specialization}</span></h2>
            <hr/>
        </div>
        <div class="profile-description">
            <h2>Profile</h2><hr/>
            <p>${profile.profileDescription}</p>
        </div>
        <div class="experience">
            <h2>Work Experience <button class="add-btn" data-section="experience">+ Əlavə et</button></h2><hr/>
            ${profile.experience.map((exp, index) => `
                <div class="experience-item" data-index="${index}">
                    <h3>${exp.company}</h3>
                    <p>${exp.position}</p>
                    <ul>${exp.tasks.map(task => `<li>${task} <span class="delete-btn">×</span></li>`).join('')}</ul>
                    <button class="add-task-btn" data-index="${index}">+ Vəzifə əlavə et</button>
                    <span class="delete-btn">× Bu təcrübəni sil</span>
                </div>
            `).join('')}
        </div>
        <div class="references">
            <h2>Reference <button class="add-btn" data-section="references">+ Əlavə et</button></h2><hr/>
            <div class="first-and-second-containers">
                ${profile.references.map((ref, index) => `
                    <div class="reference-item" data-index="${index}">
                        <h3>${ref.name}</h3>
                        <p>${ref.title}<br>Phone: ${ref.phone}<br>Email: ${ref.email}</p>
                        <span class="delete-btn">×</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}


// Render Page

window.onload = function() {
    renderLeftSide();
    renderRightSide();
};
