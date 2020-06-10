const number = document.querySelectorAll('.number');
number.forEach(n => {
    var num = parseInt(n.id.substring(3));
    n.style.transform = 'rotate(' + (num * 30) + 'deg)';
    n.querySelector('div').style.transform = 'rotate(' + (-num * 30) + 'deg)';
});

const box = document.querySelectorAll('.box');
box.forEach(b => {
    var num = parseInt(b.id.substring(3));
    b.style.transform = 'rotate(' + (num * 30) + 'deg)';
})

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

time = () => {
    const date = new Date(),
        secondsFrac = date.getSeconds() / 60,
        minutesFrac = (date.getMinutes() + secondsFrac) / 60,
        hoursFrac = (date.getHours() + minutesFrac) / 12;

    secondHand.style.transform = 'translate(-50%, 15%) rotate(' + Math.floor(secondsFrac * 360) + 'deg)';
    minuteHand.style.transform = 'translateX(-50%) rotate(' + Math.floor(minutesFrac * 360) + 'deg)';
    hourHand.style.transform = 'translateX(-50%) rotate(' + Math.floor(hoursFrac * 360) + 'deg)';
}

time();
(() => {
    setInterval(time, 1000);
})();