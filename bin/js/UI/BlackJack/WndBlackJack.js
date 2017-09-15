var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//黑杰克界面
var WndBlackJack = (function (_super) {
    __extends(WndBlackJack, _super);
    function WndBlackJack() {
        return _super.call(this) || this;
    }
    WndBlackJack.GetInst = function () {
        if (this.wndBlackJack == null) {
            this.wndBlackJack = new WndBlackJack();
        }
        return this.wndBlackJack;
    };
    WndBlackJack.prototype.onInit = function () {
        this.name = "WndBlackJack";
        this.contentPane = UIPackage.createObject("BlackJack", this.name).asCom;
        this.btnTest = this.contentPane.getChild("btnTest").asButton;
        this.EventBind();
    };
    WndBlackJack.prototype.EventBind = function () {
        this.btnTest.onClick(this, this.OnBtnTestOnClick);
    };
    WndBlackJack.prototype.OnShown = function () {
    };
    WndBlackJack.prototype.OnBtnTestOnClick = function () {
        var pokerDeck = new PokerDeck(true);
        console.debug(pokerDeck.toString());
        pokerDeck.shuffle();
        console.debug("-------------------------------");
        console.debug(pokerDeck.toString());
    };
    return WndBlackJack;
}(WindowBase));
WndBlackJack.wndBlackJack = null;
//# sourceMappingURL=WndBlackJack.js.map