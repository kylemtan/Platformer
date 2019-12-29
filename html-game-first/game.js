var player;

function startGame() {
    player = new component(50,50,"red",300,300);
    Game.start();
  }
  
  var Game = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.canvas.color = "red";
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.interval = setInterval(updateGame, 20);
    window.addEventListener('keydown', function (e) {
        Game.keys = (Game.keys || []);
        Game.keys[e.keyCode] = true;
       })
      window.addEventListener('keyup', function (e) {
        Game.keys[e.keyCode] = false;
      })
    },
    clear : function(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height,);
    }
  }
  
  function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this,speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
    ctx = Game.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
    }
  }

  function updateGame() {
    Game.clear();
    player.speedX = 0;
    player.speedY = 0;
    if (Game.keys && Game.keys[37]) {player.speedX = -3; }
    if (Game.keys && Game.keys[39]) {player.speedX = 3; }
    if (Game.keys && Game.keys[38]) {player.speedY = -3; }
    if (Game.keys && Game.keys[40]) {player.speedY = 3; }
    player.newPos();
    player.update();
  }