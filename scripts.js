function userName() {
  //Funksjonen skal ta user input og ved onclick button "Enter" endre tekst "Welcome," i h1 tag.

  //Nr.1: funksjonen skal ta user input

  let userNameInput = document.getElementById("username").value;
  console.log(userNameInput);

  //Nr.2: funksjonen skal endre tekst i h1 tag "innerHTML på h1 tag skal endres"
  document.getElementById("headerTitle").innerHTML =
    "Welcome, " + userNameInput;
}
