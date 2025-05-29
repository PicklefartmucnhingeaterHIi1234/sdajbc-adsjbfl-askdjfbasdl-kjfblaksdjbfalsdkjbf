document.addEventListener("DOMContentLoaded", function () {

    const x = document.getElementById("enter");

    function xx() {
        document.fullscreenElement ? document.xxx && document.xxx() : document.documentElement.requestFullscreen();
    }

    x.addEventListener("click", xx);

    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });
});

document.addEventListener("DOMContentLoaded", function () {

    var options = {
        strings: ["bored", ".gg/desiring", "@spence", "0_0"],
        typeSpeed: 45,
        backSpeed: 35,
        backDelay: 500,
        startDelay: 500,
        loop: true,
        showCursor: false 
    };
    
    var typed = new Typed(".description", options);
    
});
