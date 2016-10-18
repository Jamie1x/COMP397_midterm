module scenes {
    export class Play extends objects.Scene {

        private _gameBg: createjs.Bitmap;
        private _scoreLbl: createjs.Text;
        private _enemy: objects.Enemy;
        private _tempPos: objects.Vector2;

        constructor() {
            super();
            this.start();
        }

        public start(): void {
            //add background
            this._gameBg = new createjs.Bitmap(assets.getResult("GameBg"));
            this.addChild(this._gameBg);

            //add score label
            score = 0;
            this._scoreLbl = new createjs.Text("Score: " + score, "30px Serif", "#ffffff");
            this._scoreLbl.x=10;
            this.addChild(this._scoreLbl);

            newEnemy = true;
            stage.addChild(this);
        }

        public update(): void {
            this._scoreLbl.text = "Score: " + score;

            //spawn new enemy when new enemy is true(old enemy died)
            if(newEnemy==true){
                newEnemy=false;

                this._enemy = new objects.Enemy("robber", Math.floor(Math.random() * 4 + 1), "explode");
                this._tempPos = new objects.Vector2(Math.random() * 700 + 100, Math.random() * 500 + 100);
                this._enemy.setPosition(this._tempPos);
                this._enemy.addEventListener("click", this._onEnemyClick);
                enemy = this._enemy;                
                this.addChild(this._enemy);
            }
            this._enemy.update();
        }        

        private _onEnemyClick(event : createjs.MouseEvent) : void {
                enemy.shot();
        }
    }
}