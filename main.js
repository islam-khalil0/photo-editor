// upload
let upload = document.querySelector('#upload');

// filters
let sturate = document.querySelector('#sturate');
let contrast = document.querySelector('#contrast');
let brightness = document.querySelector('#brightness');
let sepia = document.querySelector('#sepia');
let Grayscale = document.querySelector('#Grayscale');
let blur = document.querySelector('#blur');
let hue_rotate = document.querySelector('#hue-rotate');

//box of image
let boximage = document.querySelector('.boxImage')

// image
let image = document.querySelector('#image');

// canvas
let canvas = document.querySelector('#canvas');
let cxt = canvas.getContext('2d');

// download && reset 
let download = document.querySelector('#download');
let reset = document.querySelector('#Reset');





window.onload = function () {
    download.style.display = 'none';
    reset.style.display = 'none';
    boximage.style.display = 'none'
}


upload.onchange = function () {
    resetValue();
    download.style.display = 'block';
    reset.style.display = 'block';
    boximage.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function () {
        image.src = file.result;
    }

    image.onload = function () {
        canvas.width = image.width ;
        canvas.height = image.height ;
        cxt.drawImage(image,0,0,canvas.width,canvas.height);
        image.style.display = 'none';
    }


} 

// sturate.addEventListener("input" , function () {
//    image.style.filter = `saturate(${sturate.value}%)`
// });

let filters = document.querySelectorAll('ul li input');
filters.forEach(filter => {
    filter.addEventListener("input" , function () {
            cxt.filter = `
                saturate(${sturate.value}%)
                contrast(${contrast.value}%)
                brightness(${brightness.value}%)
                sepia(${sepia.value}%)
                Grayscale(${Grayscale.value})
                blur(${blur.value}px)
                hue-rotate(${hue_rotate.value}deg)
           `
           cxt.drawImage(image,0,0,canvas.width,canvas.height);
    });
});


function resetValue() {
    cxt.filter = 'none' ;
    cxt.drawImage(image,0,0,canvas.width,canvas.height);
    sturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    Grayscale.value = '0';
    blur.value = '0';
    hue_rotate.value = '0';
}


download.onclick = function () {
    download.href = canvas.toDataURL();
}
