var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 扑克玩家类
 */
var PokerPlayer = (function (_super) {
    __extends(PokerPlayer, _super);
    function PokerPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.temp = 12;
        return _this;
    }
    PokerPlayer.prototype.constructFromXML = function (xml) {
        _super.prototype.constructFromXML.call(this, xml);
        this.pokerObjs = new Array();
        for (var index = 0; index < 5; index++) {
            var cardButton = this.getChild("card" + index);
            this.pokerObjs.push(cardButton);
        }
    };
    PokerPlayer.prototype.initPokers = function (pokers) {
        this.points = 0;
        this.pokers = pokers;
        this.calculatePoins();
    };
    /**
     * 叫牌
     * @param poker
     */
    PokerPlayer.prototype.bid = function (poker) {
        this.pokers.push(poker);
    };
    /**
     * 设置手牌
     */
    PokerPlayer.prototype.setCard = function (poker, index) {
        this.pokerObjs[index].setPoker(poker);
    };
    /**
     * 计算点数
     */
    PokerPlayer.prototype.calculatePoins = function () {
        var _this = this;
        this.pokers.forEach(function (element) {
            _this.points += element.num;
        });
    };
    return PokerPlayer;
}(GComponent));
//# sourceMappingURL=PokerPlayer.js.map