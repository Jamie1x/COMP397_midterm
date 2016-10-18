module scenes {
    export class Play extends objects.Scene {

        private _enemy: objects.Enemy;
        private _tempPos: objects.Vector2;

        constructor() {
            super();
            this.start();
        }

        public start(): void {
            this._tempPos = new objects.Vector2(config.Screen.WIDTH / 2, config.Screen.HEIGHT / 2);
            this._enemy = new objects.Enemy("Enemy", 5);
            this._enemy.setPosition(this._tempPos);
            this.addChild(this._enemy);
            this._enemy.on("click", this._onEnemyClick, this);

            stage.addChild(this);
        }

        public update(): void {
            console.log(this._enemy.life);
            this._enemy.update();
            if(this._enemy.life <= 0){
                stage.removeChild(this._enemy);
            }
        }

        private _onEnemyClick(event: createjs.MouseEvent): void {
            this._enemy.shot();
        }
    }
}