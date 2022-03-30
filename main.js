"use strict";

// Make navbar transparent when it is on top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  //   console.log(navbarHeight);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar-dark");
  } else {
    navbar.classList.remove("navbar-dark");
  }
});

const clickListener = (event) => {
  const target = event.target;
  console.log(target);
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  console.log(link);

  scrollIntoView(link);
};

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", clickListener);

// Handle scrolling when tapping on the contact me
const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", clickListener);

// Change Home element opacity when scrolling
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  //   console.log(navbarHeight);

  if (window.scrollY > homeHeight) {
    return;
  }
  const percentVisible = (homeHeight - window.scrollY) / homeHeight;
  home.style.opacity = percentVisible;
});

// Show "arrow" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// handle click on the "arrow up" button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e)=> {
  const element = e.target;
  const filter = getDatasetFilter(element) || getDatasetFilter(element.parentNode);
  if(filter == null) {
    return;
  }
  console.log(filter);

  console.log('-------------------');

  projects.forEach((project) => {
    // console.log(project.dataset.type);
    if (filter === '*' || filter === project.dataset.type) {
      project.classList.remove('invisible');
    } else {
      project.classList.add('invisible');

    }

  });
});

function getDatasetFilter(e) {
  return e.dataset.filter;
}

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
