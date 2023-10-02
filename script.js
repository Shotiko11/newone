document.addEventListener("DOMContentLoaded", function () {
    let video1 = document.getElementById("background-video");
    let video2 = document.getElementById("second-video");
    let video3 = document.getElementById("third-video");
    let video4 = document.getElementById("fourth-video");
    let video5 = document.getElementById("fifth-video");
    let video6 = document.getElementById("sixth-video");

    let activeVideo = video1;
    let isScrolling = false;

    document.addEventListener("wheel", function (event) {
        if (event.deltaY > 0) {
            // Scroll down
            switch (activeVideo) {
                case video1:
                    video1.style.display = "none";
                    video2.style.display = "block";
                    activeVideo = video2;
                    break;
                case video2:
                    video2.style.display = "none";
                    video3.style.display = "block";
                    activeVideo = video3;
                    break;
                case video3:
                    video3.style.display = "none";
                    video4.style.display = "block";
                    activeVideo = video4;
                    break;
                case video4:
                    video4.style.display = "none";
                    video5.style.display = "block";
                    activeVideo = video5;
                    break;
                case video5:
                    video5.style.display = "none";
                    video6.style.display = "block";
                    activeVideo = video6;
                    break;
                case video6:
                    video6.style.display = "none";
                    video1.style.display = "block";
                    activeVideo = video1;
                    break;
                default:
                    break;
            }
        } else {
            // Scroll up
            switch (activeVideo) {
                case video1:
                    video1.style.display = "none";
                    video6.style.display = "block";
                    activeVideo = video6;
                    break;
                case video2:
                    video2.style.display = "none";
                    video1.style.display = "block";
                    activeVideo = video1;
                    break;
                case video3:
                    video3.style.display = "none";
                    video2.style.display = "block";
                    activeVideo = video2;
                    break;
                case video4:
                    video4.style.display = "none";
                    video3.style.display = "block";
                    activeVideo = video3;
                    break;
                case video5:
                    video5.style.display = "none";
                    video4.style.display = "block";
                    activeVideo = video4;
                    break;
                case video6:
                    video6.style.display = "none";
                    video5.style.display = "block";
                    activeVideo = video5;
                    break;
                default:
                    break;
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
