var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.call(this);
            this.start();
        }
        Play.prototype.start = function () {
            //add background
            this._gameBg = new createjs.Bitmap(assets.getResult("GameBg"));
            this.addChild(this._gameBg);
            //add score label
            score = 0;
            this._scoreLbl = new createjs.Text("Score: " + score, "30px Serif", "#ffffff");
            this._scoreLbl.x = 10;
            this.addChild(this._scoreLbl);
            newEnemy = true;
            stage.addChild(this);
        };
        Play.prototype.update = function () {
            this._scoreLbl.text = "Score: " + score;
            //spawn new enemy when new enemy is true(old enemy died)
            if (newEnemy == true) {
                newEnemy = false;
                this._enemy = new objects.Enemy("robber", Math.floor(Math.random() * 4 + 1), "explode");
                this._tempPos = new objects.Vector2(Math.random() * 700 + 100, Math.random() * 500 + 100);
                this._enemy.setPosition(this._tempPos);
                this._enemy.addEventListener("click", this._onEnemyClick);
                enemy = this._enemy;
                this.addChild(this._enemy);
            }
            this._enemy.update();
        };
        Play.prototype._onEnemyClick = function (event) {
            enemy.shot();
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map