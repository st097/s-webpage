var typed = new Typed( ".text", {
    strings: ["HTML" , "CSS" , "JavaScript" , "React","Delphi","SQL"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", ()=>{
    navLinks.classList.toggle("active");
});


