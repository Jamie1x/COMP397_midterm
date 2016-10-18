var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy(imageString, life, deathAnimString) {
            _super.call(this, enemyAtlas, imageString, "");
            this._deathAnimation = deathAnimString;
            this._life = life;
            this._isDead = false;
        }
        Object.defineProperty(Enemy.prototype, "life", {
            get: function () {
                return this._life;
            },
            enumerable: true,
            configurable: true
        });
        Enemy.prototype.update = function () {
            //if out of lives and not already dead, die
            if (this._life <= 0 && this._isDead == false) {
                this._isDead = true;
                this.gotoAndPlay(this._deathAnimation);
            }
            if (this.currentAnimationFrame == enemyAtlas.getNumFrames(this._deathAnimation) - 1) {
                this._dead();
            }
        };
        Enemy.prototype.setPosition = function (pos) {
            this.x = pos.x;
            this.y = pos.y;
        };
        Enemy.prototype.getPosition = function () {
            return new objects.Vector2(this.x, this.y);
        };
        Enemy.prototype.shot = function () {
            this._life--;
        };
        Enemy.prototype._dead = function () {
            //when an enemy is killed add score, remove enemy, and request new enemy
            score += 5;
            currentScene.removeChild(this);
            newEnemy = true;
        };
        return Enemy;
    })(objects.GameObject);
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map