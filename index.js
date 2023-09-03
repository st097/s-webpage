var typed = new Typed( ".text", {
    strings: ["HTML" , "CSS" , "JavaScript" , "React"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBar = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () =>{
    navBar.classList.toggle('active')
})



