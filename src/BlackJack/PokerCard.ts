module Poker{
    /**
     * 一张扑克牌
     */
    export class PokerCard{
        public num:number;
        public color:PokerColor;

        constructor(num:number,color:PokerColor){
            this.num = num;
            this.color = color;
        }
    }
}