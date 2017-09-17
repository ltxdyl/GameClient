module Poker{
    /**
     * 扑克玩家类 
     */
    export class PokerPlayer{

        private playerState:PokerPlayerState
        private pokers:Array<PokerCard>;//手牌
        private points:number;//点数

        constructor(pokers:Array<PokerCard>)
        {
            this.points = 0;
            this.pokers = pokers;
            this.updateCard();
            this.calculatePoins();
        }

        /**
         * 叫牌
         * @param poker 
         */
        public bid(poker:PokerCard):void{
            this.pokers.push(poker);
        }

        /**
         * 更新手牌显示
         */
        private updateCard():void{

        }

        /**
         * 计算点数
         */
        private calculatePoins():void{
            this.pokers.forEach(element => {
                this.points += element.num;
            });
        }
    }
}