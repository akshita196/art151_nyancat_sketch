//April Fernandez and Aryan Patel
//Please have each group member DUPLICATE THIS SKETCH and have it saved in your accounts
//Everyone will be submitting their versions individually 
//There are ~24 bugs + version control 
//please add a comment to what was fixed or adjusted for each one. Note that you may need to delete stuff. 
let nyan;
let noNyan;
// 1. don't have let for nyanBg (unused variable, so commented out)
// let nyanBg; 
// 27. unused variable
//let variable; 
let circles = [];

// 8. changes color to colors
let colors = [
 [255, 0, 0],     // red 
  [255, 165, 0],   // orange 
  [255, 255, 0],   // yellow
  [0, 255, 0],     // green
  [0, 0, 255],     // blue
  [148, 0, 211],   // purple
  [150, 150, 150], // grey 
  [100, 100, 100], // darker grey 
  [255, 182, 193], // pink 
  // 2. missing green value for hotpink
  [255, 105, 180], // hot pink 
  [255, 228, 181], // beige 
  [0, 0, 0],       // black 
  [255, 255, 255]  // white 
];

let playbackRate = 1.0;


async function setup() {
  createCanvas(400, 400);
// 28. moved to draw
//background(noNyan);
  // 4. folder named medias, NyanCat needs to be nyanCat
   nyan = await loadSound('medias/nyanCat.mp3');
   // 5. folder named medias, NyanCatless needs to be nyancatless
  // 25. missing semi colon
  noNyan = await loadImage('medias/nyancatless.gif');
  // 6. non-exisiting file (commented out)
  //sprinkles = await loadImage('sprinkles.jpg'); 
 
}

function draw() {
// 28. moved from async setup
  background(noNyan);
  // Draw all circles
  // 7. changes circels to circles
  for (let circle of circles) {
    // 26. changed colors to color
    fill(circle.color); 
    // 17. ellipse spelt wrong
    ellipse(circle.x, circle.y, 50, 50); 
  }
  

  if (mouseIsPressed) {
    let c = random(colors); 
    // 3. changed new Circle to newCircle, because can't have space between variables
    let newCircle = { 
      // 9. changes MouseX to mouseX because p5 is case sensitive
      x: mouseX, 
      y: mouseY,
      // 10. c(0) should be c[0]
      color: color(c[0], c[1], c[2]) 
    };
    circles.push(newCircle);
  }
}

function mousePressed() {
  userStartAudio(); // make sure the browser's audio is unlocked
  let c = random(colors);
  let newCircle = {
    x: mouseX,
    y: mouseY,
    color: color(c[0], c[1], c[2])
  };
  circles.push(newCircle);
  // 11. nayn needs to be nyan
  //update for version 2
  nyan.amp(0.5); 
  // 13. playbakRate needs to be playbackRate
  nyan.rate(playbackRate); 
  nyan.loop();
  
}
function mouseReleased(){
  nyan.stop();
  // 14. missing closing brace
}


function keyPressed() {
  // 15. need to use === to compare
  // 16. C needs to be capital in keyCodes
  // 22. unnecessary semicolon
  if (keyCode === UP_ARROW) { 
    // 19. playBackRate needs to be playbackRate
    playbackRate += 0.1; 
    nyan.rate(playbackRate); 
    // 18. missing if
    // 20. Down_Arrow needs to be in all caps
    // 21. need to use === to compare
  } else if (keyCode === DOWN_ARROW) { 
    playbackRate = max(0.1, playbackRate - 0.2); 
    nyan.rate(playbackRate);
  } else if (keyCode === LEFT_ARROW) { 
    // 12. *1 did not change anything
    playbackRate = 1.0;
    // 24. playBackRate needs to be playbackRate
    nyan.rate(playbackRate); 
  }
}
// 23. unnecessary closing brackets