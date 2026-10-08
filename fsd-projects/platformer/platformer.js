$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
  createPlatform(250, 600, 80, 140, "red");
  createPlatform(600, 550, 50, 50, "red"); 
  createPlatform(700, 2.5, 955, 500, "red");
  createPlatform(800, 411.5, 100, 245, "red"); 
  createFakePlatform(450, 550, 150, 50, "red");  
  createPlatform(425, 490, 25, 120, "red"); 
  createBadPlatform(400, 725, 288, 120, "red"); 



    // TODO 3 - Create Collectables
  createCollectable("max", 1320,500);


    
    // TODO 4 - Create Cannons
   createCannon("bottom", 300, 500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }function setup() {

  // TODO 1 - Enable the Grid
  toggleGrid();


  // TODO 2 - Create Platforms
  createPlatform(250, 600, 80, 140, "red");
  createPlatform(600, 550, 50, 50, "red"); 
  createPlatform(700, 2.5, 955, 500, "red");
  createPlatform(800, 411.5, 100, 245, "red"); 
  createFakePlatform(450, 550, 150, 50, "red");  
  createPlatform(425, 490, 25, 120, "red"); 
  createBadPlatform(400, 725, 288, 120, "red"); 

  // TODO 3 - Create Collectables
   createCollectable("max", 1320,500);


  // TODO 4 - Create Cannons
   createCannon("bottom", 300, 500);

}


  registerSetup(setup);
});
