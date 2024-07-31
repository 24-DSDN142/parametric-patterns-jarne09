//your parameter variables go here!
let ringwidth = 230 //beetween 160 and 300, default230
let ringheight = 40 //between 30 and 70, default40
let planetrotation = 20 //between -80 and 80, default20
let planetsize = 100 //between 70 and 120, default100
let planetXaxis = 125 //between 0 and 250, default125


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 250;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(63, 73, 150); //dark blue
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  strokeWeight(2) //planet outline

  
  push(); //helps with rotation
  translate(planetXaxis,100)
  rotate(planetrotation)
 
  fill(196, 115, 81) //light brown
  circle(0,0,planetsize) //planetbottom
  
  fill(107, 65, 47) //dark brown
  ellipse(0,0,ringwidth,ringheight) //ringoutside
  

  fill(63, 73, 150) //dark blue (same as background)

  ellipse(0,0,150,20) //ringinside

  rotate(170) //keeps arc angled correctly
 
  fill(196, 115, 81) //light brown 
  arc(0,0,planetsize,planetsize,0,200,OPEN) //planettop
  pop();
 
strokeWeight(0) //no outline for star
fill(255, 255, 0) //yellow for star
  
  //building of individual star shapes 

  beginShape(); //top left shape

  vertex(10,0);
  vertex(20,20);
  vertex(0,10);
  vertex(0,0);

  endShape(CLOSE);


  beginShape(); //top right shape

  vertex(240,0);
  vertex(230,20);
  vertex(250,10);
  vertex(250,0);

  endShape(CLOSE);


  beginShape(); //bottom left shape part 1

  vertex(10,185);
  vertex(30,185);
  vertex(10,200);
  vertex(0,165);

  endShape(CLOSE);


  beginShape(); //bottom left shape part 2

  vertex(10,200);
  vertex(10,190)
  vertex(0,165);
  vertex(0,200)

  endShape(CLOSE);


  beginShape(); //bottom right shape part 1


  vertex(250,165)
  vertex(240,185)
  vertex(220,185)
  vertex(240,200)

  endShape(CLOSE);


  beginShape(); //bottom right shape part 2


  vertex(250,165)
  vertex(240,185)
  vertex(240,200)
  vertex(250,200)

  endShape(CLOSE);

  if(planetrotation<0){ //changes star colour when planet is tilted to the left
    
    strokeWeight(0)
fill(255,255,255) //white

  beginShape(); //top left shape

  vertex(10,0);
  vertex(20,20);
  vertex(0,10);
  vertex(0,0);

  endShape(CLOSE);


  beginShape(); //top right shape

  vertex(240,0);
  vertex(230,20);
  vertex(250,10);
  vertex(250,0);

  endShape(CLOSE);


  beginShape(); //bottom left shape part 1

  vertex(10,185);
  vertex(30,185);
  vertex(10,200);
  vertex(0,165);

  endShape(CLOSE);


  beginShape(); //bottom left shape part 2

  vertex(10,200);
  vertex(10,190)
  vertex(0,165);
  vertex(0,200)

  endShape(CLOSE);


  beginShape(); //bottom right shape part 1


  vertex(250,165)
  vertex(240,185)
  vertex(220,185)
  vertex(240,200)

  endShape(CLOSE);


  beginShape(); //bottom right shape part 2


  vertex(250,165)
  vertex(240,185)
  vertex(240,200)
  vertex(250,200)

  endShape(CLOSE);

}
}

