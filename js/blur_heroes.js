if ($('#blurry').length > 0) { 
    var canvas = document.getElementById("blurry"),
        ctx = canvas.getContext("2d"),
        toBlur = new Image();
        toBlur.src = "img/hero04.png";

    function drawBlur() {
        var w = canvas.width,
            h = canvas.height;
        ctx.drawImage(toBlur, 0, 0, w, h);
        stackBlurCanvasRGBA("blurry", 0, 0, w, h, 10);
    }

    toBlur.onload = function() {
        drawBlur();
    }
}
if ($('#blurry-left').length > 0) { 
    var canvas2 = document.getElementById("blurry-left"),
                    ctx2 = canvas2.getContext("2d"),
                    toBlur2 = new Image();
                    toBlur2.src = "img/hero06.jpg";

                toBlur2.onload = function() {
                    var w = canvas2.width,
                        h = canvas2.height;
                    ctx2.drawImage(toBlur2, 0, 0, w, h);
                    stackBlurCanvasRGBA("blurry-left", 0, 0, w, h, 10);
                }
}
if ($('#blurry-right').length > 0) { 
                var canvas3 = document.getElementById("blurry-right"),
                    ctx3 = canvas3.getContext("2d"),
                    toBlur3 = new Image();
                    toBlur3.src = "img/hero05.jpg";

                toBlur3.onload = function() {
                    var w = canvas3.width,
                        h = canvas3.height;
                    ctx3.drawImage(toBlur3, 0, 0, w, h);
                    stackBlurCanvasRGBA("blurry-right", 0, 0, w, h, 10);
                }
}