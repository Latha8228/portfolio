
```javascript
// =========================
// AOS Animation
// =========================

AOS.init({
    duration:1000,
    once:true
});

// =========================
// Typing Effect
// =========================

const text = [
    "Python Developer",
    "Web Developer",
    "AI Enthusiast",
    "Problem Solver"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(type,1200);

    }

    else{

        setTimeout(type,120);

    }

})();

// =========================
// Scroll Progress Bar
// =========================

window.addEventListener("scroll",()=>{

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop/scrollHeight)*100;

    document.getElementById("progress").style.width =
    progress + "%";

});

// =========================
// Back To Top Button
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// =========================
// Navbar Active Link
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// =========================
// Floating Image Animation
// =========================

const image = document.querySelector(".hero-right img");

setInterval(()=>{

    image.classList.toggle("float");

},2000);

// =========================
// Console Message
// =========================

console.log("Welcome to Ganala Lakshmi Kantham Portfolio 🚀");
```
