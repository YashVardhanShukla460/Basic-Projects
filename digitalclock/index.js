let time =  document.getElementById("clock");

setInterval(() => {
    time.innerHTML = new Date().toLocaleTimeString('en-US');
}, 1000);