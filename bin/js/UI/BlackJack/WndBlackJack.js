var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**黑杰克界面*/
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
        this.btnDouble = this.contentPane.getChild("btnDouble").asButton;
        this.btnDeal = this.contentPane.getChild("btnDeal").asButton;
        this.btnStop = this.contentPane.getChild("btnStop").asButton;
        this.btnGet = this.contentPane.getChild("btnGet").asButton;
        this.btn100 = this.contentPane.getChild("btn100").asButton;
        this.btn500 = this.contentPane.getChild("btn500").asButton;
        this.btn1000 = this.contentPane.getChild("btn1000").asButton;
        this.btn10000 = this.contentPane.getChild("btn10000").asButton;
        this.btnRepeat = this.contentPane.getChild("btnRepeat").asButton;
        this.btnBetting = this.contentPane.getChild("btnBetting").asButton;
        this.txtCountdown = this.contentPane.getChild("txtCountdown").asTextField;
        this.ctrlBottomBtns = this.contentPane.getController("ctrlBottomBtns");
        this.currentPlayerIndex = 0;
        Laya.timer.loop(1000, this, this.SecondCallBack);
        this.player = new Array();
        this.EventBind();
    };
    WndBlackJack.prototype.EventBind = function () {
        this.btnDouble.onClick(this, this.btnDoubleOnclick);
    };
    WndBlackJack.prototype.OnShown = function () {
        this.gameTime = 0; //初始化游戏时间
        this.playerCountdown = BlackJackConfig.PlayerCountdown;
        this.initGame(5); //初始化五个玩家
        this.initPokerDeck(); //初始化牌堆
    };
    /**每秒回调*/
    WndBlackJack.prototype.SecondCallBack = function () {
        this.gameTime++;
        if (this.playerCountdown > 0) {
            this.playerCountdown--;
        }
        else {
            this.playerCountdown = BlackJackConfig.PlayerCountdown;
        }
        this.txtCountdown.text = String(this.playerCountdown);
    };
    /**
     * 双倍
     */
    WndBlackJack.prototype.btnDoubleOnclick = function () {
    };
    /**
     * 初始化游戏
     */
    WndBlackJack.prototype.initGame = function (playerNum) {
        this.playerNum = playerNum;
        for (var index = 0; index < this.playerNum; index++) {
            this.player[index] = this.contentPane.getChild("player" + index);
        }
    };
    /**
     * 初始化牌堆
     */
    WndBlackJack.prototype.initPokerDeck = function () {
        this.pokerDeck = new Array();
        this.pokerDeckNum = Math.ceil(Math.random() * 7) + 1; // 随机生成1-8副牌
        console.debug("当前拥有" + this.pokerDeckNum + "副牌");
        for (var index = 0; index < this.pokerDeckNum; index++) {
            var deck = new PokerDeck();
            for (var index = 0; index < deck.getCount(); index++) {
                this.pokerDeck.push(deck.getCard());
            }
        }
    };
    /**
     * 发牌
     */
    WndBlackJack.prototype.deal = function () {
    };
    return WndBlackJack;
}(WindowBase));
WndBlackJack.wndBlackJack = null;
//# sourceMappingURL=WndBlackJack.js.map