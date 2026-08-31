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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(50, 200, 100, 20, "blue");
    createPlatform(100, 200, 300, 20, "blue");
    createPlatform(400, 200, 20, 100, "blue");
    createPlatform(400, 300, 200, 20, "blue");
    createPlatform(600, 200, 20, 120, "blue");
    createPlatform(600, 200, 600, 20, "blue");
    createPlatform(1380, 0, 20, 400, "blue");
    createPlatform(1000, 400, 600, 20, "blue");
    createPlatform(700, 400, 600, 20, "blue");
    createPlatform(700, 400, 20, 100, "blue");
    createPlatform(500, 500, 220, 20, "blue");
    createPlatform(400, 500, 200, 20, "blue");
    createPlatform(50, 200, 20, 200, "blue");
    createPlatform(300, 500, 100, 20, "blue");
    createPlatform(300, 400, 20, 100, "blue");
    createPlatform(200, 400, 100, 20, "blue");
    createPlatform(200, 400, 10, 10000, "blue");
    createPlatform(9, 499, 200, 20, "blue", 300, 500, 1);
    createPlatform(100, 220, -300, -20, "blue");
    createPlatform(70, 750, -20, -350, "blue");

    // TODO 3 - Create Collectables
    createCollectable("jem", 10, 500, 0.5, 0.7);
    createCollectable("soul", 500, 200, 0.5, 0.7);
    createCollectable("jem", 500, 460, 0, 1);

    // TODO 4 - Create Cannons
    createCannon("top", 400, 1000);
    createCannon("top", 300, 800);
    createCannon("right", 200, 3000);
    createCannon("bottom", 300, 2000);
    createCannon("right", 300, 5000);
    createCannon("right", 400, 3000);
    createCannon("left", 400, 1200);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
