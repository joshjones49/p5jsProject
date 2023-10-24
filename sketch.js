const subDiv = document.querySelector('.subdiv1');
subDiv.mousePressed(createPageOne);

function createPageOne() {
    mainDiv.innerHTML = ''; 

}

function setup() {
  let myCanvas = createCanvas(900, 900)
  myCanvas.parent('maindiv')
  background(255)
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {

  background(10, 20, 50)
  noFill()
  
  translate(width / 2, height / 2)
  
  for(let i = 0; i < 200; i++) {
    push()
    
    rotate(sin(frameCount + i) * 100)
    
    let r = map(sin(frameCount), -1, 1, 50, 255)
    let g = map(sin(frameCount/2), -1, 1, 50, 255)
    let b = map(sin(frameCount/4), -1, 1, 50, 255)
    stroke(r, g, b)
    rect(0, 0, 900 - i * 3, 600 - i * 3, 200 - i )
    pop()
  }
}