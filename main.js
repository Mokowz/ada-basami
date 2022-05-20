const hamburgerMenu = document.getElementById("ham");

window.addEventListener("scroll", () => {
    let reveals = document.querySelectorAll(".reveal")

    for(let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint){
            reveals[i].classList.add("active");
        }
        // else{
        //     reveals[i].classList.remove("active");
        // }
    }
})

function toggleMenu(x){
    x.classList.toggle("bi-x-lg");
};

$("#ham").click(function() {
    $(".nav-list").toggleClass("show");
})
$(".nav-list").click(function() {
    $(".nav-list").toggleClass("show");
})