var currentImg = 1;
showGallery(currentImg);

function showGallery(num){
    var x;
    var images = document.getElementsByClassName("galleryImage");
    if (num > images.length)
        {currentImg = 1}
    if (num < 1)
        {currentImg = slides.length}
    for (x = 0; x < images.length; x++){
        images[x].style.display = "none";
    }
    images[currentIndex - 1].style.display = "block";
}

function setImage(num){
    showGallery(currentImg += num);
}