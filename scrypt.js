let navLinks = document.querySelectorAll("nav ul li a");
let navList = document.querySelector(".allLists");
let listBar = document.querySelector(".listbar");
let projectsContainer = document.querySelector(".allProjects");

// listener for title change
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Portfolio | Mahesh Naik";
  } else {
    document.title = "Come Back To Portfolio";
  }
});

// on loading the page adding the listener to nav links

document.addEventListener("DOMContentLoaded", () => {
  // Set initial active link
  navLinks[0].classList.add("active");

  // Event handling for navbar's links
  navLinks.forEach((link) => {
    link.addEventListener("click", handleClick);
  });
});

// event handling function for navbar's links
function handleClick(e) {
  navLinks.forEach((innerLink) => {
    innerLink.classList.remove("active");
  });
  e.target.classList.add("active");

  let direction = window
    .getComputedStyle(navList)
    .getPropertyValue("flex-direction");

  if (direction === "column") {
    listBar.style.display = "block";
    navList.style.display = "none";
  }
}

// changing active link of navbar on users viewpage
window.addEventListener("scroll", function () {
  // getting live position of the website while scrolled by user
  let scrollPosition = window.scrollY;

  navLinks.forEach((link) => {
    let targetId = link.getAttribute("href").substring(1);
    let targetSection = document.getElementById(targetId);

    if (targetSection === null) return;

    let targetTop = targetSection.offsetTop;
    let targetBottom = targetTop + targetSection.offsetHeight;

    if (targetTop <= scrollPosition && targetBottom > scrollPosition) {
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

// handling the navbar links on small devices

listBar.addEventListener("click", (e) => {
  e.preventDefault();
  listBar.style.display = "none";
  navList.style.display = "flex";
});

// Adding skills box dinamically using javascript forEach loop

function displaySkills(allSkills) {
  let skillsContainer = document.querySelector(".skillcontainer");

  allSkills.forEach((skill) => {
    let elem = document.createElement("div");
    elem.className = "allSkills";

    let childelem1 = document.createElement("img");
    childelem1.src = skill.icon;
    childelem1.className = "skillicons";
    let childelem2 = document.createElement("p");
    childelem2.innerHTML = skill.name;

    elem.appendChild(childelem1);
    elem.appendChild(childelem2);
    skillsContainer.appendChild(elem);
  });
}

// array of images and names of skills
let skills = [
  {
    name: "HTML5",
    icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
  },
  {
    name: "CSS3",
    icon: "https://img.icons8.com/color/48/000000/css3.png",
  },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/48/000000/javascript--v1.png",
  },
  {
    name: "TypeScript",
    icon: "https://img.icons8.com/color/48/000000/typescript--v1.png",
  },

  {
    name: "ReactJS",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
  },
  {
    name: "NextJS",
    icon: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
  },
  {
    name: "ExpressJS",
    icon: "https://img.icons8.com/fluency/48/000000/node-js.png",
  },
  {
    name: "NodeJS",
    icon: "https://img.icons8.com/color/48/000000/nodejs.png",
  },
  {
    name: "Redux",
    icon: "https://img.icons8.com/color/48/000000/redux.png",
  },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/color/48/000000/mongodb.png",
  },
  // {
  //   name: "MySQL",
  //   icon: "https://img.icons8.com/color/48/000000/mysql-logo.png",
  // },

  {
    name: "TailwindCSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png",
  },
  // {
  //   name: "jQuery",
  //   icon: "https://img.icons8.com/ios-filled/48/1169ae/jquery.png",
  // },
  {
    name: "GitHub",
    icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png",
  },
  {
    name: "Heroku",
    icon: "https://img.icons8.com/color/48/000000/heroku.png",
  },
  {
    name: "Netlify",
    icon: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
  },
  {
    name: "DigitalOcean",
    icon: "https://img.icons8.com/ios-filled/48/0080FF/digitalocean.png",
  },
];

displaySkills(skills);

function displayProjects(allProjects) {
  let projectHTML = "";

  allProjects.forEach((project) => {
    projectHTML += `
        <div class="box">
      <img draggable="false" src="/images/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
           
          </div>
        </div>
      </div>
    </div>`;
  });
  projectsContainer.innerHTML = projectHTML;
}

const allProjects = [
  {
    name: "School Administration App [MERN]",
    desc: "A Full Stack MERN Application to Handle a School Management.",
    image: "schoolapp",
    links: {
      view: "https://giis-administration.vercel.app/",
      code: "https://github.com/Mahesh127784/School_Administration-frontEnd",
      backend: "https://github.com/Mahesh127784/school_Administration-backend",
    },
  },
  {
    name: "Music School [NEXT]",
    desc: "A Client Side Music School's App Made In NextJS And Uncooked Framework For UI.",
    image: "musicschool",
    links: {
      view: "https://your-music-school.vercel.app/",
      code: "https://github.com/Mahesh127784/MusicSchool-nextJS",
    },
  },
  {
    name: "e-Notebook [MERN]",
    desc: "A Full Stack MERN Application Which Works As A Notebook To Store Users Note.",
    image: "enotebook",
    links: {
      view: "https://notebook-oncloud.netlify.app/",
      code: "https://github.com/Mahesh127784/e-NOTEBOOK-frontend",
      backend: "https://github.com/Mahesh127784/e-NOTEBOOK-Backend",
    },
  },
  {
    name: "Number-Bubble Game [JS]",
    desc: "A Number Game Made up of HTML CSS and JAVASCRIPT Which make Users Brain",
    image: "bubblegame",
    links: {
      view: "https://bubble-numbergame.netlify.app/",
      code: "https://github.com/Mahesh127784/Bubble-Number_Game",
    },
  },
];

displayProjects(allProjects);

// Redirecting the page which icons are reflecting to
let icons = document.getElementsByClassName("icons");

for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", (e) => {
    let icon = e.target.classList;
    if (icon.contains("github"))
      window.open("https://github.com/Mahesh127784", "_blank");
    if (icon.contains("linkedIn"))
      window.open(
        "https://www.linkedin.com/in/mahesh-naik-7035a22a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
        "_blank"
      );
    if (icon.contains("twitter"))
      window.open(
        "https://x.com/imMaheshnaik?t=in70NHpCzU5NCViK79JdJw&s=09",
        "_blank"
      );
  });
}

let heart = document.querySelector(".heart");
let Up = true;

setInterval(() => {
  if (!Up) {
    heart.style.transform =
      "scale(1.1                                                       )";
  } else {
    heart.style.transform = "scale(0.8)";
  }

  Up = !Up;
}, 1000);
