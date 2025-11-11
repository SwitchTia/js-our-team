const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  }
  
  
];


const teamContainer = document.querySelector(".cards-container");


function printCardGrid (){
  
  let cardsString = "";

  for (let i = 0; i < teamMembers.length; i++) {
    const card = createCard(teamMembers[i]);
    cardsString += card;
  }
  teamContainer.innerHTML = cardsString;
}

function createCard(member) {

  for (let i = 0; i < teamMembers.length; i++) {
    const { name, role, email, img } = member;

    return `
            <div class="col-12 col-md-4 p-1">
              <div class="card shadow">
                <div class="d-flex">
                  <div class="col-4 m-3">
                      <img src="${img}" class="img-fluid">
                  </div>
                  <div class="col-8">
                      <div class="card-body">
                          <h5 class="card-title mb-1">${name}</h5>
                          <p class="card-text text-muted mb-1">${role}</p>
                          <a href="" class="text-decoration-none small">${email}</a>
                      </div>
                  </div>
                </div>
              </div>
            </div>         
  `;
  }
}
printCardGrid(teamMembers);

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value;
    const role = roleInput.value;
    const email = emailInput.value;

  
});