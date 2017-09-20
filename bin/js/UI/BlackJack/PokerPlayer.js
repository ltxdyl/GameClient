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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PokerPlayer.prototype.constructFromXML = function (xml) {
        _super.prototype.constructFromXML.call(this, xml);
        this.pokerObjs = new Array();
        for (var index = 0; index < 5; index++) {
            var cardButton = this.getChild("card" + index);
            this.pokerObjs.push(cardButton);
        }
        this.txtName = this.getChild("txtName").asTextField;
        this.txtChips = this.getChild("txtChips").asTextField;
        this.txtPoints = this.getChild("txtPoints").asTextField;
        this.ctrlSitDir = this.getController("ctrlSitDIr");
    };
    /**
     * 叫牌
     * @param poker
     */
    PokerPlayer.prototype.bid = function (poker) {
        this.setCard(poker);
    };
    /**
     * 设置手牌
     */
    PokerPlayer.prototype.setCard = function (poker, index) {
        var setPos = (index == undefined ? this.cardNum : index);
        this.pokerObjs[setPos].setPoker(poker);
        this.cardNum++;
    };
    /**
     * 计算点数
     */
    PokerPlayer.prototype.calculatePoins = function () {
        var _this = this;
        this.pokerObjs.forEach(function (element) {
            _this.points += element.poker.num;
        });
    };
    PokerPlayer.prototype.clear = function () {
        this.points = 0;
        this.cardNum = 0;
        this.pokerObjs.forEach(function (element) {
            element.clear();
        });
    };
    return PokerPlayer;
}(GComponent));
//# sourceMappingURL=PokerPlayer.js.map