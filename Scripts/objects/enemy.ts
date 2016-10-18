module objects {
    export class Enemy extends objects.GameObject {

        private _move : objects.Vector2;
        private _speed : number;

        private _deathAnimation : string;
        private _life : number;
        private _isDead : boolean;

        // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(imageString:string, life : number, deathAnimString) {
            super(enemyAtlas, imageString, "");
            this._deathAnimation = deathAnimString;
            this._life = life;
            this._isDead = false;
        }

        get life() : number {
            return this._life;
        }

        public update() : void {
            //if out of lives and not already dead, die
            if(this._life <= 0 && this._isDead == false){
                this._isDead = true;
                this.gotoAndPlay(this._deathAnimation);
            }

            if(this.currentAnimationFrame == enemyAtlas.getNumFrames(this._deathAnimation) - 1) {
                this._dead();
            }
        }

        public setPosition(pos : objects.Vector2) : void {
            this.x = pos.x;
            this.y = pos.y;
        }

        public getPosition() : objects.Vector2 {
            return new objects.Vector2(this.x, this.y);
        }

        public shot() : void {
            this._life--;
        }

        private _dead() : void {
            //when an enemy is killed add score, remove enemy, and request new enemy
            score += 5;
            currentScene.removeChild(this);
            newEnemy = true;
        }
    }
}