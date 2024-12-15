function getRandomColour() {
    const colours = ["#FAFACE", "#D4D0F5", "#FDF9E0", "#CCF3F1", "#D1E9CF"];
    const randomIndex = Math.floor(Math.random() * colours.length);
    return colours[randomIndex];
  }
  
  //Write your code here
  const createCard = () => {
    const mainSection = document.querySelector(".sticky-notes")
    const card = document.createElement("div");
    const delButton = document.createElement("button");
  
    delButton.textContent = "X";
    delButton.classList.add("delete-button");
    delButton.addEventListener("click", () => card.remove())
    
    card.classList.add("sticky-note");
    card.textContent = document.querySelector("#new-note").value;
    document.querySelector("#new-note").value = "";
    card.style.backgroundColor = getRandomColour();
    
    card.appendChild(delButton);
    mainSection.appendChild(card);
    
  }
  
  const addButton = document.querySelector(".add-button");
  addButton.addEventListener("click",() => {
    if(document.querySelector("#new-note").value !=="") createCard()
    })
  