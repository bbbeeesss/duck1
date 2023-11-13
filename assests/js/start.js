// var favicon_images = [
//   './assests/imgs/duck/frame_00_delay-0.04s.png',
//   './assests/imgs/duck/frame_01_delay-0.04s.png',
//   './assests/imgs/duck/frame_02_delay-0.04s.png',
//   './assests/imgs/duck/frame_03_delay-0.04s.png',
//   './assests/imgs/duck/frame_04_delay-0.04s.png',
//   './assests/imgs/duck/frame_05_delay-0.04s.png',
//   './assests/imgs/duck/frame_06_delay-0.04s.png',
//   './assests/imgs/duck/frame_07_delay-0.04s.png',
//   './assests/imgs/duck/frame_08_delay-0.04s.png',
//   './assests/imgs/duck/frame_09_delay-0.04s.png',
//   './assests/imgs/duck/frame_10_delay-0.04s.png',
//   './assests/imgs/duck/frame_11_delay-0.04s.png',
//   './assests/imgs/duck/frame_12_delay-0.04s.png',
//   './assests/imgs/duck/frame_13_delay-0.04s.png',
//   './assests/imgs/duck/frame_14_delay-0.04s.png'

// ],
// image_counter = 0; 

// setInterval(function() {
// if(document.querySelector("link[rel='icon']") !== null)
// document.querySelector("link[rel='icon']").remove();
// if(document.querySelector("link[rel='shortcut icon']") !== null)
// document.querySelector("link[rel='shortcut icon']").remove();

// document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');
  
// if(image_counter == favicon_images.length -1)
// image_counter = 0;
// else
// image_counter++;
// }, 100);


// Converting string to required date format
let deadline = new Date("Oct 31, 2023 00:00.00")
                .getTime();

// To call defined fuction every second
let x = setInterval(function () {
     
    // Getting current time in required format
    let now = new Date().getTime();

    // Calculating the difference
    let t = deadline - now;

    // Getting value of days, hours, minutes, seconds
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
        (t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor(
        (t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor(
        (t % (1000 * 60)) / 1000);

    // Output the remaining time
    document.getElementById("Count-Down").innerHTML =
        days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // Output for over time
    if (t < 0) {
        clearInterval(x);
        document.getElementById("Count-Down")
                .innerHTML = "THE HOLIDAY HAS PASSED";
    }
}, 1000);
