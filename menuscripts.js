window.onload = addActiveClass();

function addActiveClass() {
  console.log(document.getElementsByClassName("menuItemLink"));

  let current = location.pathname.split("/")[6];
  console.log(current);
  if (current === "") return;
  let menuItems = document.querySelectorAll(".menuItemLink");
  for (let i = 0, len = menuItems.length; i < len; i++) {
    if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
      menuItems[i].className += " menuItemLinkActive";
    }
  }
}

console.log(location.pathname);

//Remember to console.log everything you dont understand - maybe you'll get it then

//Funksjonen skal hente alle a elementer i menyen
//Funksjonen skal iterere gjennom disse
//For hvert element skal den gjøre følgende:
//Sjekk om texten på meny-elementet inneholder riktig path
//if ja: legg til class "active" på elementet
