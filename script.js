const r = document.querySelector(":root");
const bodyElement = document.body;
const randomizeElement = document.querySelector(".randomize");
const destinations = [
  {
    name: "THAR",
    location: "RAJSTAHN",
    img:
      "https://images.unsplash.com/photo-1510837267498-0148e51cdfc0?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "CHEETA",
    location: "AFRICA",
    img:
      "https://images.unsplash.com/photo-1569600428323-7fd18782b483?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "PENGUIN",
    location: "ANTARTICA",
    img:
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "BLACK-PANTHER",
    location: "WAKANDA",
    img:
      "https://images.unsplash.com/photo-1602474310283-17743c360b4d?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "BENGAL-TIGER",
    location: "INDIA",
    img:
      "https://images.unsplash.com/photo-1500463959177-e0869687df26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "PEACOCK",
    location: "India",
    img:
      "https://images.unsplash.com/photo-1546324427-cfdae4fc5c9a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "SEA-TURTTLE",
    location: "PACIFIC OCEAN",
    img:
      "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "GREAT WHITE-SHARK",
    location: "ANTARTIC OCEAN",
    img:
      "https://images.unsplash.com/photo-1560275619-4662e36fa65c?q=80&w=1500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "ANACONDA",
    location: "AMAZON",
    img: "https://images.unsplash.com/photo-1524676792981-dd766abbfb2f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "WOLF",
    location: "Canada",
    img: "https://images.unsplash.com/photo-1574007477600-91e318b24ccf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "TRANTULLA",
    location: "AUSTRILLA",
    img: "https://media.istockphoto.com/id/954812234/photo/trantula-spider.jpg?s=1024x1024&w=is&k=20&c=-J_ddJ1PHE4z-Ebgd4UtpVU_DarhERLjIzWpwiQObGg="
  },
  {
    name: "COMMODO-DRAGON",
    location: "Vietnam",
    img:
      "https://plus.unsplash.com/premium_photo-1661963413254-77cf576ef8dd?q=80&w=1499&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];
let nextDestination = destinations[1];

const getRandomDestination = () => {
  const randomId = Math.floor(Math.random() * destinations.length);
  return destinations[randomId];
};

const displayNextContent = () => {
  if (bodyElement.classList.contains("body--animated")) {
    return;
  }

  bodyElement.classList.add("body--animated");

  setTimeout(() => {
    r.style.setProperty("--img-current", `url(${nextDestination.img})`);
    r.style.setProperty("--text-current-title", `"${nextDestination.name}"`);
    r.style.setProperty(
      "--text-current-subtitle",
      `"${nextDestination.location}"`
    );
    setTimeout(() => {
      bodyElement.classList.remove("body--animated");
      setTimeout(() => {
        nextDestination = getRandomDestination();
        r.style.setProperty("--img-next", `url(${nextDestination.img})`);
        r.style.setProperty("--text-next-title", `"${nextDestination.name}"`);
        r.style.setProperty(
          "--text-next-subtitle",
          `"${nextDestination.location}"`
        );
      }, 1000);
    }, 1000);
  }, 1000);
};

randomizeElement.addEventListener("click", displayNextContent);

displayNextContent();