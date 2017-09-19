var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**扑克牌按钮*/
var CardButton = (function (_super) {
    __extends(CardButton, _super);
    function CardButton() {
        return _super.call(this) || this;
    }
    CardButton.prototype.constructFromXML = function (xml) {
        _super.prototype.constructFromXML.call(this, xml);
        this.EvenBind();
    };
    /**
     * 设置扑克
     * @param poker
     */
    CardButton.prototype.setPoker = function (poker) {
        this.poker = poker;
        this.icon = "ui://Icon/" + PokerColor[this.poker.color] + "_" + this.poker.num;
    };
    CardButton.prototype.clear = function () {
        this.icon = "ui://Icon/Transparent";
    };
    CardButton.prototype.EvenBind = function () {
    };
    return CardButton;
}(GButton));
//# sourceMappingURL=CardButton.js.map