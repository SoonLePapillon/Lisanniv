const body = document.querySelector("body");
const switchbtn = document.querySelector(".bg-switch");
const allbtn = document.querySelector(".allbtn");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const allneedles = document.querySelector(".allneedles");
const needle = document.querySelector(".needle");

switchbtn.addEventListener("click", () => {
    body.classList.replace("body-black", "body-white");
    allbtn.remove();
    h1.innerText="Merci !";
    h2.innerHTML= `<p>Ah et... J'ai perdu mon aiguille dans cette botte de foin, tu peux la chercher stp ? <img src="./739079179630411799.gif"></p> `;
    needle.classList.add("flex");
});