document.querySelector('.logo').addEventListener('mouseover', changeimage);
document.querySelector('.logo').addEventListener('mouseout', changeimage2);

function changeimage() {
   let image= document.querySelector('.logo').src = 'assets/logo2.png';
}

function changeimage2() {
    let image= document.querySelector('.logo').src = 'assets/logo1.png';
}

function setupRollover() {
    var images = document.querySelectorAll('.roll');

    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        var imageSrc = image.getAttribute('src');
        var rolloverSrc = image.getAttribute('data-rollover');
        image.addEventListener('mouseover', function() {
            this.setAttribute('src', rolloverSrc);
        });
        image.addEventListener('mouseout', function() {
            this.setAttribute('src', imageSrc);
        });
    }
}

let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
    let navBar = document.querySelector(".navbar");
    navBar.classList.toggle("active");
});
