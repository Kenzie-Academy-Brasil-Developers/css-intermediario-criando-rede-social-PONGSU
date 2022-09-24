let users = [
  {
    id: 1,
    user: "Samuel Leão",
    stack: "Front end Engineer",
    img: "../../assets/img/user1.svg",
    email: 'SamuelL@teste.com',
    password: 'SamuelL',
  },
  {
    id: 2,
    user: "Juliana Pessoa",
    stack: "Front end Engineer",
    img: "../../assets/img/user6.svg",
    email: 'JulianaP@teste.com',
    password: 'JulianaP',
  },
  {
    id: 3,
    user: "Carlos Lima",
    stack: "UX e UI Designer",
    img: "../../assets/img/user3.svg",
    email: 'CalrlosL@teste.com',
    password: 'CalrlosL',
  },
  {
    id: 4,
    user: "Carla Maria",
    stack: "Back end Engineer",
    img: "../../assets/img/user4.svg",
    email: 'CarlaM@teste.com',
    password: 'CarlaM',
  },
  {
    id: 5,
    user: "Júlia Martins",
    stack: "Devop's",
    img: "../../assets/img/user5.svg",
    email: 'JuliaM@teste.com',
    password: 'JuliaM',
  },
  {
    id: 6,
    user: "Filipe Gutierry",
    stack: "Devop's",
    img: "../../assets/img/user7.svg",
    email: 'FelipeG@teste.com',
    password: 'FelipeG',
  }
  ,
  {
    id: 7,
    user: "Samuel Persuhn",
    stack: "Back end Engineer",
    img: "../../assets/img/user2.svg",
    email: 'SamuelPer@teste.com',
    password: 'SamuelPer',
  },
];

let userIn = {
  id: 6,
  user: "Filipe Gutierry",
  stack: "Devop's",
  img: "../../assets/img/user7.svg",
  email: 'FelipeG@teste.com',
  password: 'FelipeG',
}

if (localStorage.getItem('userIn') != null) {
  userIn = JSON.parse(localStorage.getItem('userIn'))
  localStorage.removeItem(userIn)
}

if (localStorage.getItem('users') != null) {
  users = JSON.parse(localStorage.getItem('users'))
}
