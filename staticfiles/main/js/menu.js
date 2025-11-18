function openMENU() {
    //document.getElementById("hamburger").style.display = "none";
    const menu=document.getElementById("nav-bottom");
    menu.classList.add("open");
    const button=document.getElementById("close-menu");
    button.classList.remove("mobile-hide");
    const scrollbutton=document.getElementById("scroll-button");
    scrollbutton.style.display="none"
}

function closeMENU() {
    //document.getElementById("hamburger").style.display = "block";
    const menu=document.getElementById("nav-bottom");
    menu.classList.remove("open");
    const button=document.getElementById("close-menu");
    button.classList.add("mobile-hide");
    const scrollbutton=document.getElementById("scroll-button");
    scrollbutton.style.display="flex";
}

function scrollToTop() {
    window.scrollTo({
    top: 0,
    behavior: 'smooth' // płynne przewijanie
    });
  }



