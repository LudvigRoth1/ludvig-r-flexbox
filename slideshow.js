var imgArray = [
    './Pictures/slidshowclock.jpg   ',
    './Pictures/blackslideshow.jpg' ,
    './Pictures/blueslideshow.jpg' ,
    './Pictures/blackwhiteslide.jpg',


];
var curIndex = 0;
//Hur läng bilden ska vara på
var imgDuration = 1800;

function slideShow() {
    //  
    document.getElementById('image1').src = imgArray[curIndex];
    curIndex++;
    //om curIndex lika lång som objekten i imgArray, startar sliden om från början

    if (curIndex == imgArray.length) { curIndex = 0; }
    //startar om sliden så att det blir en ny bild
    setTimeout("slideShow()", imgDuration);
}

slideShow();