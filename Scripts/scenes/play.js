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
            this._tempPos = new objects.Vector2(config.Screen.WIDTH / 2, config.Screen.HEIGHT / 2);
            this._enemy = new objects.Enemy("Enemy", 5);
            this._enemy.setPosition(this._tempPos);
            this.addChild(this._enemy);
            this._enemy.on("click", this._onEnemyClick, this);
            stage.addChild(this);
        };
        Play.prototype.update = function () {
            console.log(this._enemy.life);
            this._enemy.update();
            if (this._enemy.life <= 0) {
                stage.removeChild(this._enemy);
            }
        };
        Play.prototype._onEnemyClick = function (event) {
            this._enemy.shot();
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map