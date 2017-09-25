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
        this.btnDouble.onClick(this, this.btnDoubleOnClick);
        this.btnDeal.onClick(this, this.btnDealOnClick);
        this.btnStop.onClick(this, this.btnStopOnClick);
        this.btnGet.onClick(this, this.btnGetOnClick);
        this.btn100.onClick(this, this.btn100OnClick);
        this.btn500.onClick(this, this.btn500OnClick);
        this.btn1000.onClick(this, this.btn1000OnClick);
        this.btn10000.onClick(this, this.btn10000OnClick);
        this.btnRepeat.onClick(this, this.btnRepeatOnClick);
        this.btnBetting.onClick(this, this.btnBettingOnClick);
    };
    WndBlackJack.prototype.OnShown = function () {
        this.gameTime = 0; //初始化游戏时间
        this.bettingValue = 0;
        this.playerCountdown = -1;
        this.txtCountdown.visible = false;
        this.initGame(5); //初始化五个玩家
        this.initPokerDeck(); //初始化牌堆
        this.enterPlayer(0, "lin");
    };
    /**每秒回调*/
    WndBlackJack.prototype.SecondCallBack = function () {
        this.gameTime++;
        if (this.playerCountdown > 0) {
            this.playerCountdown--;
            this.txtCountdown.text = String(this.playerCountdown);
        }
        else {
            this.txtCountdown.visible = false;
        }
    };
    /**
     * 双倍
     */
    WndBlackJack.prototype.btnDoubleOnClick = function () {
    };
    /**
     * 分牌
     */
    WndBlackJack.prototype.btnDealOnClick = function () {
    };
    /**
     * 停牌
     */
    WndBlackJack.prototype.btnStopOnClick = function () {
    };
    /**
     * 要牌
     */
    WndBlackJack.prototype.btnGetOnClick = function () {
    };
    /**
     * 下注100
     */
    WndBlackJack.prototype.btn100OnClick = function () {
        this.bettingValue = 100;
    };
    /**
     * 下注500
     */
    WndBlackJack.prototype.btn500OnClick = function () {
        this.bettingValue = 500;
    };
    /**
     * 下注1000
     */
    WndBlackJack.prototype.btn1000OnClick = function () {
        this.bettingValue = 1000;
    };
    /**
     * 下注10000
     */
    WndBlackJack.prototype.btn10000OnClick = function () {
        this.bettingValue = 10000;
    };
    /**
     * 重复上一轮投注
     */
    WndBlackJack.prototype.btnRepeatOnClick = function () {
    };
    /**
     * 下注
     */
    WndBlackJack.prototype.btnBettingOnClick = function () {
        this.ctrlBottomBtns.selectedPage = "打牌";
    };
    /**
     * 初始化游戏
     */
    WndBlackJack.prototype.initGame = function (playerNum) {
        this.ctrlBottomBtns.selectedPage = "下注";
        this.playerNum = playerNum;
        for (var index = 0; index < this.playerNum; index++) {
            this.player[index] = this.contentPane.getChild("player" + index);
            if (index == 1 || index == 2) {
                this.player[index].ctrlSitDir.selectedPage = "右";
            }
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
        this.beginCountdown();
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.playerNum;
    };
    /**
     * 开始倒计时
     */
    WndBlackJack.prototype.beginCountdown = function () {
        this.txtCountdown.visible = true;
        this.playerCountdown = BlackJackConfig.PlayerCountdown;
    };
    //新进入一个玩家
    WndBlackJack.prototype.enterPlayer = function (index, name) {
        this.playerNum++;
        this.player[index].ctrlState.selectedPage = "有人";
        this.player[index].txtName.text = name;
    };
    return WndBlackJack;
}(WindowBase));
WndBlackJack.wndBlackJack = null;
//# sourceMappingURL=WndBlackJack.js.map