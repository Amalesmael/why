let nums = document.querySelectorAll(".stats .number");
let statt = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
    if(window.scrollY >= statt.offsetTop){
        if(!started){
            nums.forEach((num) => starCount(num));
        }
        started = true; 
    }
};
function starCount(elee) {
    let goal = elee.dataset.goal;
    let count = setInterval(() => {
        elee.textContent++;
        if(elee.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}