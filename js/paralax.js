'use strict';
window.addEventListener("scroll", function (event) {
    console.log("scrolling!");

    var layers, topDistance;

    topDistance = this.pageYOffset;

    console.log("Dystans od góry: " + topDistance);

    layers = document.querySelectorAll("[data-type='paralax']");

    var depth, i, layer, len, movement, translate3d;

   

    for (i = 0, len = layers.length; i < len; i++) {
        layer = layers[i];
        depth = layer.getAttribute('data-depth');
        movement = -(topDistance * depth);

        translate3d = 'translate3d(0, ' + movement + 'px, 0)';
        // console.log(translate3d);
        layer.style['-webkit-transform'] = translate3d;
        layer.style['-moz-transform'] = translate3d;
        layer.style['-ms-transform'] = translate3d;
        layer.style['-o-transform'] = translate3d;
        layer.style.transform = translate3d;

    }


    if (topDistance > 494) {
        document.getElementById("companyBigName").style.color = "black";
    } else {
        document.getElementById("companyBigName").style.color = "white";
    }



});
