/**
 * 一副扑克牌
 */
var Poker;
(function (Poker) {
    var PokerDeck = (function () {
        function PokerDeck(hasJoker) {
            hasJoker == undefined ? this.hasJoker = false : this.hasJoker = hasJoker;
            this.initPokers();
        }
        /**初始化扑克牌*/
        PokerDeck.prototype.initPokers = function () {
            this.pokers = new Array();
            for (var index = 1; index <= 13; index++) {
                this.pokers.push(new Poker.PokerCard(index, PokerColor.Club)); //梅花
                this.pokers.push(new Poker.PokerCard(index, PokerColor.Diamond)); //方块
                this.pokers.push(new Poker.PokerCard(index, PokerColor.Heart)); //红桃
                this.pokers.push(new Poker.PokerCard(index, PokerColor.Spade)); //黑桃
            }
            if (this.hasJoker) {
                this.pokers.push(new Poker.PokerCard(14, PokerColor.Joker)); //小王
                this.pokers.push(new Poker.PokerCard(15, PokerColor.Joker)); //大王
            }
        };
        /** 洗牌 */
        PokerDeck.prototype.shuffle = function () {
            var shuffleTime = 100 + Math.floor(Math.random() * 100); //洗牌次数(100 - 200)
            var pos = 0;
            var changePos = 0;
            var temp;
            for (var index = 0; index < shuffleTime; index++) {
                pos = Math.floor(Math.random() * this.pokers.length);
                changePos = Math.floor(Math.random() * this.pokers.length);
                temp = this.pokers[pos];
                this.pokers[pos] = this.pokers[changePos];
                this.pokers[changePos] = temp;
            }
        };
        /**摸牌*/
        PokerDeck.prototype.getCard = function () {
            return this.pokers.pop();
        };
        /**牌剩余数量 */
        PokerDeck.prototype.getCount = function () {
            return this.pokers.length;
        };
        PokerDeck.prototype.toString = function () {
            var str = "";
            this.pokers.forEach(function (element) {
                str = str + element.color + " " + element.num + "\n";
            });
            return str;
        };
        return PokerDeck;
    }());
    Poker.PokerDeck = PokerDeck;
})(Poker || (Poker = {}));
//# sourceMappingURL=PokerDeck.js.map