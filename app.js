// Mouvement animation :

const card = document.querySelector('.card');
const container = document.querySelector('.container');

// items anim :
const title = document.querySelector('.title');
const logo = document.querySelector('.logo img');
const purchase = document.querySelector('.purchase button');
const info = document.querySelector('.info h3');
const sizes= document.querySelector('.sizes');

// Mouvement animation quand on le déclenche :

container.addEventListener('mousemove', (e)=> {
    let xAxis = (window.innerWidth / 2 -e.pageX) / 25;
    let yAxis = (window.innerWidth / 2 -e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

// Animation debut :
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';

    title.style.transform = "translateZ(150px)";
    logo.style.transform = "translateZ(200px) rotateZ(-45deg)";
    info.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(105px)";
    purchase.style.transform = "translateZ(75px)";

});


// Animation fin :
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform =`rotateY(0deg) rotatex(0deg)`;

    title.style.transform = "translateZ(0px)";
    logo.style.transform = "translateZ(0px) rotateZ(0deg)";
    info.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";


});
