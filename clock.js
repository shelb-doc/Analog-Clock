const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const clock = document.querySelector('.clock');
const body = document.querySelector('body');
const title = document.querySelector('h1');

setInterval(() => {
    let day = new Date();
    let hour = day.getHours()
    let hh = hour * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    if((hour >= 1 ) && (hour <= 11)) {
        document.title = 'Good morning';
        title.innerHTML = 'Good morning';
        clock.style.borderColor = 'lightskyblue';
        body.style.background = 'linear-gradient(to right, #1c3c72, #2a5298)'
    }
    else if ((hour >= 12 ) && (hour <= 16)) {
        document.title = 'Good afternoon';
        title.innerHTML = 'Good afternoon';
        clock.style.borderColor = 'lightsalmon';
        body.style.background = 'linear-gradient(to right, #721c1c, #982a2a)'
    }
    else {
        document.title = 'Good evening';
        title.innerHTML = 'Good evening';
        clock.style.borderColor = 'grey';
        body.style.background = 'linear-gradient(to right, #23262a, #474b52)'
    }
});