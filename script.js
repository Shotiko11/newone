document.addEventListener("DOMContentLoaded", function () {
    let video1 = document.getElementById("background-video");
    let video2 = document.getElementById("second-video");
    let video3 = document.getElementById("third-video");
    let video4 = document.getElementById("fourth-video"); 
    let video5 = document.getElementById("fifth-video"); 

    let activeVideo = video1;
    let isScrolling = false;

    document.addEventListener("wheel", function (event) {
        if (event.deltaY > 0) {
            if (activeVideo === video1) {
                video1.style.display = "none";
                video2.style.display = "block";
                activeVideo = video2;
            } else if (activeVideo === video2) {
                video2.style.display = "none";
                video3.style.display = "block";
                activeVideo = video3;
            } else if (activeVideo === video3) {
                video3.style.display = "none";
                video4.style.display = "block"; 
                activeVideo = video4; 
            } else if (activeVideo === video4) { 
                video4.style.display = "none";
                video5.style.display = "block"; 
                activeVideo = video5; 
            } else if (activeVideo === video5) { 
                video5.style.display = "none";
                video1.style.display = "block";
                activeVideo = video1;
            } 
        }

        isScrolling = true;

        setTimeout(function () {
            isScrolling = false;
        }, 100); 
    });

    window.addEventListener("scroll", function (event) {
        if (isScrolling) {
            event.preventDefault();
        }
    });
});
