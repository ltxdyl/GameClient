//一张扑克牌
module Poker{
    export class PokerCard{
        public num:number;
        public color:PokerColor;

        constructor(num:number,color:PokerColor){
            this.num = num;
            this.color = color;
        }
    }
}