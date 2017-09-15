//一张扑克牌
var Poker;
(function (Poker) {
    var PokerCard = (function () {
        function PokerCard(num, color) {
            this.num = num;
            this.color = color;
        }
        return PokerCard;
    }());
    Poker.PokerCard = PokerCard;
})(Poker || (Poker = {}));
//# sourceMappingURL=PokerCard.js.map