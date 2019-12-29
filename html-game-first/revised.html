<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      canvas {
        background-color: #f1f1f1;
      }
      html,
      body {
        width: 100%;
        height: 100%;
        margin: 0px;
        border: 0;
        overflow: hidden;
        display: block;
      }
    </style>
  </head>
  <body onload="startGame()">
    <script>
      var player;
      var scope;
      var bullets = [];
      var rightMouse = false;
      var accelerate = false;

      function startGame() {
        player = new component(50, 50, "red", window.innerWidth/2, window.innerHeight/2);
        scope = new component(30, 30, "red", 0, 0);
        bullets = new component(10, 10, "gray", 0, 0);
        Game.start();
      }

      var Game = {
        canvas: document.createElement("canvas"),
        start: function() {
          this.canvas.width = window.innerWidth;
          this.canvas.height = window.innerHeight;
          this.canvas.style.cursor = "none";
          this.context = this.canvas.getContext("2d");
          document.body.insertBefore(this.canvas, document.body.childNodes[0]);
          this.frameNo = 0;
          this.interval = setInterval(updateGame, 20);
          window.addEventListener("mousemove", function(e) {
            Game.x = e.pageX;
            Game.y = e.pageY;
          });
          window.addEventListener("keydown", function(e) {
            Game.keys = Game.keys || [];
            Game.keys[e.keyCode] = true;
          });
          window.addEventListener("keyup", function(e) {
            Game.keys[e.keyCode] = false;
          });
          window.addEventListener("mousedown", function(e) {
            accelerate = true;
          });
          window.addEventListener("mouseup", function(e) {
            accelerate = false;
          });
          window.addEventListener("contextmenu", function(e) {
              e.preventDefault();
              rightMouse = true;
              return false;
            }, false
          );
        },
        clear: function() {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        stop: function() {
          clearInterval(this.interval);
        }
      };


      function everyinterval(n) {
        if ((myGameArea.frameNo / n) % 1 == 0) {
          return true;
        }
        return false;
      }

      function component(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this, (speedY = 0);
        this.x = x;
        this.y = y;
        this.update = function() {
          ctx = Game.context;
          ctx.fillStyle = color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
        };
        this.newPos = function() {
          this.x += this.speedX;
          this.y += this.speedY;
        };
      }

      function updateGame() {
        var x, y;
         for (i = 0; i < bullets.length; i += 1) {
          if (bullets.collide(bullets[i])) {
          }
        }
        Game.clear();
        /*  Game.frameNo += 1;
  if (Game.frameNo == 1 || everyinterval(150)) {
    x = myGameArea.canvas.width;
    y = myGameArea.canvas.height - 200;
  }
  */
        player.speedX = 0;
        player.speedY = 0;
        var power = 0;
        var maxPower = 3;
        var powerIncrement = 0.1;
        if (accelerate == true) {
            power+=powerIncrement;
            if(Game.y>player.y){player.y-=power;}
            if(Game.y<player.y){player.y+=power;}
            if(Game.x>player.x){player.x -= power;}
            if(Game.x<player.x){player.x += power;}
        }
        if(power>maxPower){power-=0.1}

        var gravity = 0;
        gravity-=0.01;
        if(gravity>1){gravity+=0.01}
        var gravityIncrement;
        player.y+=gravity;

        /*if (Game.keys[37] || Game.keys[65]) {player.speedX = -3; }
    if (Game.keys[39] || Game.keys[68]) {player.speedX = 3; }
    if (Game.keys[38] || Game.keys[87]) {player.speedY = -3; }
    if (Game.keys[40] || Game.keys[83]) {player.speedY = 3; }*/
        if (Game.x && Game.y) {
          scope.x = Game.x;
          scope.y = Game.y;
        }
        player.newPos();
        player.update();
        scope.update();
        bullets.update();
      }
    </script>
  </body>
</html>
