
gsap.registerPlugin(ScrollTrigger);



document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        document.querySelector("#load").style.top='-150%';
    
    }
  }


function canvas_page() {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;



    window.addEventListener("resize", function () {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })


    const frameCount = 220;

    const images = []
    const currentshowing = {
        frame: 1
    }

    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = `./canvas_web/1 (${i}).webp`;
        images.push(img);


    }
    gsap.to(currentshowing, {
        frame: frameCount,
        snap: "frame",
        ease: "none",
        scrollTrigger: {

            trigger: '#canvas_page',
            start: 'top top',
            end: '+=1000px'
            , scrub: 1,
            pin: true,


        },
        onUpdate: render


    });

    images[1].onload = render;



    function render() {
        drawImageScaled(images[currentshowing.frame], context);
    }

    function drawImageScaled(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;

        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }


    gsap.from(`#overlay-text>h1>span`, {

        scrollTrigger: {
            trigger: '#overlay_canvas',
            start: 'top top',
            end: '+=300px',
            scrub: 0.8,
            toggleActions: "play restart play reverse",
        },
        opacity: 0,
        y: 50,

        color: '#000',
        ease: Power2.easeOut,
        stagger: 0.2,



    });
    gsap.from(`#overlay-text>h4>span`, {

        scrollTrigger: {
            trigger: '#overlay_canvas',
            start: 'top top',
            end: '+=400px'
            , scrub: 0.8,
            toggleActions: "play restart play reverse",
        },
        opacity: 0,
        y: 50,
        color: '#000',
        ease: Power2.easeOut,
        stagger: 0.2,



    });

}

canvas_page();


function contact() {

    for (let i = 1; i <= 3; i++) {

        document.querySelector(`.share>#share${i}`).addEventListener("mouseenter", function () {

            gsap.to(`.share>#share${i}`, {
                y: -10,
                ease: Power1.easeOut

            });
            this.style.color = 'var(--fifth-color)';



        });

        document.querySelector(`.share>#share${i}`).addEventListener("mouseleave", function () {

            gsap.to(`.share>#share${i}`, {
                y: 0,
                ease: Power1.easeOut


            });
            this.style.color = 'var(--fourth-color)';
        });
    }

    document.querySelector("#phone").addEventListener("mouseenter", function () {
        gsap.to('.grew_phone', {

            width: "10vw",
            ease: Power1.easeOut,
            duration: 0.3

        })

    });
    document.querySelector("#phone").addEventListener("mouseleave", function () {
        gsap.to('.grew_phone', {

            width: "0vw",
            ease: Power1.easeOut
        })
    });



    document.querySelector("#email").addEventListener("mouseenter", function () {
        gsap.to('.grew_email', {

            width: "20vw",
            ease: Power1.easeOut,
            duration: 0.3
        })

    });
    document.querySelector("#email").addEventListener("mouseleave", function () {
        gsap.to('.grew_email', {

            width: "0vw",
            ease: Power1.easeOut
        })
    });




    // add it later
    // gsap.from("#cc_l_bottom>h1>span", {
    //     scrollTrigger: {


    //         trigger: "#cc_l_bottom>h1",
    //         toggleActions: "play restart play reverse"
    //     }, stagger: 0.1,
    //     y: 50,
    //     opacity: 0,
    // });


}
contact();



function education() {


    for (var i = 1; i <= 3; i++) {


        gsap.from(`#edu_det${i}`, {
            scrollTrigger: {
                trigger: `#edu_det${i}`,
                toggleActions: 'play restart play reverse'


            },
            left: '-8%',
            duration: 0.7
        });

    }
    document.querySelector(".edu_det")
    for (let i = 1; i <= 3; i++) {

        document.querySelector(`#edu_det${i}`).addEventListener("mouseenter", function () {

            this.style.scale = 1.03;
            document.querySelector(`#circle${i}`).style.backgroundColor = 'var(--fifth-color)';
        });
        document.querySelector(`#edu_det${i}`).addEventListener("mouseleave", function () {
            document.querySelector(`#circle${i}`).style.backgroundColor = 'var(--secondary-color)';

            this.style.scale = 1;
        })
    }


}
education();

function nav_bar() {

    var icons = document.querySelectorAll(".nav_det a");

    var shadow = document.querySelector("#shadow")
    icons.forEach(function (val, index) {
        val.addEventListener("mousemove", function () {

            shadow.style.display = `initial`;


            shadow.style.transform = `translateX(${index * 7}vw)`
        });

    })

    document.querySelector("#nav_right").addEventListener("mouseleave", function () {

        shadow.style.display = `none`;


    });



    $(document).ready(function () {

        $(window).scroll(function () {

            if (this.scrollY > 200) {
                $('#nav').addClass("sticky");
            } else {
                $('#nav').removeClass("sticky");
            }
        })
    });
    var nav = 0;
document.querySelector("#menu_bar").addEventListener("click", function () {
    if (nav === 0) {
        document.querySelector("#nav").style.display = "none";
            
            document.querySelector("#menu_bar").innerHTML = `<i  class="ri-menu-3-line"></i>`;

        nav = 1;
    }
    else {
        document.querySelector("#nav").style.display = "flex";
        document.querySelector("#menu_bar").innerHTML = `<i class="ri-close-line"></i>`;

        nav = 0;
    }


});


}
nav_bar();


function account_page() {
    var media = document.querySelectorAll('.media');
    media.forEach(function (val, index) {

        val.addEventListener("click", function () {


            document.querySelector(`#media${index + 1} a`).click();
        })


    })

}

account_page();



function certificate() {
    for (let i = 1; i <= 3; i++) {
        document.querySelector(`#cert_img${i}`).addEventListener("mousemove", function (dets) {

            document.querySelector(`#cert_img${i}>.moving_circle`).style.scale = 4;


            var dist = this.getBoundingClientRect();
            var orignal_dist_x = dets.clientX - dist.x;
            var orignal_dist_y = dets.clientY - dist.y;
            document.querySelector(`#cert_img${i}>.moving_circle`).style.opacity = 1;


            document.querySelector(`#cert_img${i}>.moving_circle`).style.left = `${orignal_dist_x}px`;
            document.querySelector(`#cert_img${i}>.moving_circle`).style.top = `${orignal_dist_y}px`;


        })
        document.querySelector(`#cert_img${i}`).addEventListener("mouseleave", function (dets) {
            document.querySelector(`#cert_img${i}>.moving_circle`).style.scale = 1;


            document.querySelector(`#cert_img${i}>.moving_circle`).style.opacity = 0;

        });
    }

    document.querySelector("#cert_top h1").addEventListener("mouseenter", function () {

        document.querySelector("#cert_top_img img").style.top = '0%';

    });
    document.querySelector("#cert_top h1").addEventListener("mouseleave", function () {

        document.querySelector("#cert_top_img img").style.top = '65%';

    });
    document.querySelector("#cert_top_img").addEventListener("mouseenter", function () {

        document.querySelector("#cert_top_img img").style.top = '0%';

    });
    document.querySelector("#cert_top_img img").addEventListener("mouseleave", function () {

        document.querySelector("#cert_top_img img").style.top = '65%';

    });


}
certificate();

