/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */


document.write('<footer  >');
document.write('   <a>Made by a duck :)</a>');
document.write('</footer>');



var arrayOfCursors = ['url(./assests/imgs/coursors/Charmander.png), auto', 'url(./assests/imgs/coursors/Kirby.png), auto', 'url(./assests/imgs/coursors/dorito.png), auto', 'url(./assests/imgs/coursors/cup.png), auto', 'url(./assests/imgs/coursors/bag.png), auto', 'url(./assests/imgs/coursors/queenFace.png), auto', 'url(./assests/imgs/coursors/wiir.png), auto', 'url(./assests/imgs/coursors/wiic.png), auto', 'url(./assests/imgs/coursors/wheat.png), auto', 'url(./assests/imgs/coursors/villager.png), auto', 'url(./assests/imgs/coursors/toothbrush.png), auto', 'url(./assests/imgs/coursors/pic.png), auto', 'url(./assests/imgs/coursors/mouse.png), auto', 'url(./assests/imgs/coursors/duck.png), auto', 'url(./assests/imgs/coursors/Mace_Windu_Face.png), auto', 'url(./assests/imgs/coursors/Mace_Windu_Lightsaber.png), auto', 'url(./assests/imgs/coursors/RedThing.png), auto', 'url(./assests/imgs/coursors/GreenThing.png), auto'];
function random(arr){
  var num = Math.floor(Math.random() * arr.length);
  return arr[num];
} 
var el = document.getElementById('idName');
el.style.cursor = random(arrayOfCursors);


// var arrayImg = new Array();
// arrayImg[0] = "./assests/imgs/logos/offline.png";
// arrayImg[1] = "./assests/imgs/logos/offline1.png";
// arrayImg[2] = "./assests/imgs/logos/offline2.png";
// arrayImg[3] = "./assests/imgs/logos/offline3.png";
// arrayImg[4] = "./assests/imgs/logos/offline6.png";
// arrayImg[5] = "./assests/imgs/logos/offline5.png";



// getRandomImage(arrayImg, "");

// function getRandomImage(imgAr, path) {
//     var num = Math.floor( Math.random() * imgAr.length );
//     var img = imgAr[ num ];
//     var imgStr = '<img src="' + img + '">';
//     console.log(imgStr)
//     document.getElementById('logo').innerHTML = imgStr;
// } 

var favicon_images = [
  './assests/imgs/duck/frame_00_delay-0.04s.png',
  './assests/imgs/duck/frame_01_delay-0.04s.png',
  './assests/imgs/duck/frame_02_delay-0.04s.png',
  './assests/imgs/duck/frame_03_delay-0.04s.png',
  './assests/imgs/duck/frame_04_delay-0.04s.png',
  './assests/imgs/duck/frame_05_delay-0.04s.png',
  './assests/imgs/duck/frame_06_delay-0.04s.png',
  './assests/imgs/duck/frame_07_delay-0.04s.png',
  './assests/imgs/duck/frame_08_delay-0.04s.png',
  './assests/imgs/duck/frame_09_delay-0.04s.png',
  './assests/imgs/duck/frame_10_delay-0.04s.png',
  './assests/imgs/duck/frame_11_delay-0.04s.png',
  './assests/imgs/duck/frame_12_delay-0.04s.png',
  './assests/imgs/duck/frame_13_delay-0.04s.png',
  './assests/imgs/duck/frame_14_delay-0.04s.png'

],
image_counter = 0; 

setInterval(function() {
if(document.querySelector("link[rel='icon']") !== null)
document.querySelector("link[rel='icon']").remove();
if(document.querySelector("link[rel='shortcut icon']") !== null)
document.querySelector("link[rel='shortcut icon']").remove();

document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');
  
if(image_counter == favicon_images.length -1)
image_counter = 0;
else
image_counter++;
}, 100);




