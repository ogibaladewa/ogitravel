const cards = document.querySelectorAll(".card");
const images = document.querySelectorAll(".card img");
const buttons = document.querySelectorAll(".card button");
const buttonGo = document.querySelector(".buttonGo");
const toggleNav = document.querySelector("#toggleNav");

for (let i = 0; i < cards.length; i++) {
    console.log(buttons[i]);
    const img = images[i];
    const card = cards[i];
    card.addEventListener("click", () => {
        for (let i = 0; i < cards.length; i++) {
            const card = cards [i];
            if (card.style.backgroundColor === "white") {
                card.style.backgroundColor = "#bbb";
                card.style.border = "1px solid #bbb";
                card.style.boxShadow = "none";
            }
        }
        document.body.style.backgroundImage = `url(${img.src})`;
        card.style.backgroundColor = "white";
        card.style.border = "1px solid white";
        card.style.boxShadow = "0px 0px 5px 3px #fff";
        buttonGo.style.color = "white";
        buttonGo.style.border = "1px solid white";
        buttonGo.style.cursor = "pointer";
    });
    buttons[i].addEventListener("click", openDetailBox);
}

function openDetailBox() {
    const detailBox = document.querySelector(".detailBox");
    detailBox.style.display = "block";
}

function closeButtonBox() {
    const detailBox = document.querySelector(".detailBox");
    detailBox.style.display = "none";
}


toggleNav.addEventListener("click", clickToggleNav);

function clickToggleNav() {
    const hiddenNav = document.getElementById("hiddenNav");
    const header = document.querySelector("header");
    console.log(hiddenNav.style.display);
    if (hiddenNav.style.display == "" || hiddenNav.style.display == "none") {
        header.style.backgroundColor = "#111111";
        header.style.color = "#ffffff";
        hiddenNav.style.display = "block";
    } else {   
        header.style.backgroundColor = "white";
        header.style.color = "black";
        hiddenNav.style.display = "none";
    }
}