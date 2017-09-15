/**
 * 一副扑克牌
 */
module Poker{
    export class PokerDeck{
        public hasJoker:boolean;//是否有大小王

        private pokers:Array<PokerCard>;//牌堆

        constructor(hasJoker:boolean)
        {
            this.hasJoker = hasJoker;
            this.initPokers();
        }

        /**初始化扑克牌*/
        initPokers():void{
            this.pokers = new Array<PokerCard>();
            for (var index = 1; index <= 13; index++){
                this.pokers.push(new PokerCard(index,PokerColor.Club));//梅花
                this.pokers.push(new PokerCard(index,PokerColor.Diamond));//方块
                this.pokers.push(new PokerCard(index,PokerColor.Heart));//红桃
                this.pokers.push(new PokerCard(index,PokerColor.Spade));//黑桃
            }
            if(this.hasJoker)
            {
                this.pokers.push(new PokerCard(14,PokerColor.Joker));//小王
                this.pokers.push(new PokerCard(15,PokerColor.Joker));//大王
            }
        }

        /** 洗牌 */
        shuffle():void{
            let shuffleTime = 100 + Math.floor( Math.random() * 100);//洗牌次数(100 - 200)
            let pos = 0;
            let changePos = 0;
            let temp:PokerCard;
            for (var index = 0; index < shuffleTime; index++) {
                pos = Math.floor(Math.random() * this.pokers.length);
                changePos =  Math.floor(Math.random() * this.pokers.length);
                temp = this.pokers[pos];
                this.pokers[pos] = this.pokers[changePos];
                this.pokers[changePos] = temp;
            }
        }

        /**摸牌*/
        getCard():PokerCard{
            return this.pokers.pop(); 
        }

        toString():string{
            let str = ""
            this.pokers.forEach(element => {
                str = str + element.color + " " + element.num + "\n";
            });
            return str;
        }
    }
}