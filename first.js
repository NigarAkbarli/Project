const projects = [
  {
    id: 1,
    imageSrc: "./assets/project1.jpg",
    title: "Wildstone Infra Hotel",
    address: "2715 Ash Dr. San Jose, South Dakota",
  },
  {
    id: 2,
    imageSrc: "./assets/project2.jpg",
    title: "Wish Stone Building",
    address: "2972 Westheimer Rd. Santa Ana, Illinois",
  },
  {
    id: 3,
    imageSrc: "./assets/project3.jpg",
    title: "Mr. Parkinston’s House",
    address: "3517 W. Gray St. Utica, Pennsylvania",
  },
  {
    id: 4,
    imageSrc: "./assets/project4.jpg",
    title: "Oregano Height",
    address: "2464 Royal Ln. Mesa, New Jersey",
  },
  {
    id: 5,
    imageSrc: "./assets/project1.jpg",
    title: "Wildstone Infra Hotel",
    address: "2715 Ash Dr. San Jose, South Dakota",
  },
];
const cardContainer = document.querySelector(".project-cards");

for (const project of projects) {
  const card = document.createElement("div");
  cardContainer.appendChild(card);
  card.outerHTML = getProjectCardMarkup(project);
}

function getProjectCardMarkup(project) {
  return `
    <div class="card1">
              <img src="${project.imageSrc}" alt="" />
              <div>
                <p class="par1">${project.title}</p>
                <p class="par2">${project.address}</p>
              </div>
            </div>
            `;
}

let currentSlideNumber = 0;
let dots = document.getElementsByClassName("dot");
const firstCard = document.querySelector(".card1:first-child");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
function handleCarauselButtonClick(direction) {
  currentSlideNumber += direction;
  const margin = -416 * currentSlideNumber;
  firstCard.style.marginLeft = `${margin}px`;
  if (currentSlideNumber === 0) {
    leftButton.setAttribute("disabled", true);
  } else {
    leftButton.removeAttribute("disabled");
  }

  if (currentSlideNumber === projects.length - 2) {
    rightButton.setAttribute("disabled", true);
  } else {
    rightButton.removeAttribute("disabled");
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  projects[currentSlideNumber].style = "block";  
  dots[currentSlideNumber].className += " active";
}
function handleDotClick(currentSlideNumber){
  handleCarauselButtonClick(currentSlideNumber)
}
