let navLinks = document.querySelectorAll("nav ul li a");
let navList = document.querySelector(".allLists");
let listBar = document.querySelector(".listbar");

// on loading the page adding the listener to lav links

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
    name: "ReactJS",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
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
  {
    name: "MySQL",
    icon: "https://img.icons8.com/color/48/000000/mysql-logo.png",
  },

  {
    name: "TailwindCSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png",
  },
  {
    name: "Bootstrap",
    icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
  },

  // {
  //   name: "jQuery",
  //   icon: "https://img.icons8.com/ios-filled/48/1169ae/jquery.png",
  // },

  {
    name: "GitHub",
    icon: "https://img.icons8.com/glyph-neue/48/ffffff/github.png",
  },
];

// Adding skills box dinamically using javascript forEach loop
let skillsDiv = document.querySelector(".skillcontainer");

skills.forEach((skill) => {
  let elem = document.createElement("div");
  elem.className = "allSkills";

  let childelem1 = document.createElement("img");
  childelem1.src = skill.icon;
  childelem1.className = "skillicons";
  let childelem2 = document.createElement("p");
  childelem2.innerHTML = skill.name;

  elem.appendChild(childelem1);
  elem.appendChild(childelem2);
  skillsDiv.appendChild(elem);
});

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
    heart.style.transform = "scale(1.1)";
  } else {
    heart.style.transform = "scale(0.8)";
  }

  Up = !Up;
}, 1000);
