let navbar = document.querySelectorAll(".navbar .navbar-nav .nav-link");
navbar.forEach((a)=>{
    a.addEventListener("click" ,function(){
        navbar.forEach((a)=>{
            a.classList.remove("active");
        });
        a.classList.add("active");
    });
});