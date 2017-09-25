/**黑杰克界面*/
class WndBlackJack extends WindowBase {

    private static wndBlackJack: WndBlackJack = null;
    public static GetInst(): WndBlackJack {
        if (this.wndBlackJack == null) {
            this.wndBlackJack = new WndBlackJack();
        }
        return this.wndBlackJack;
    }

    private btnDouble: GButton;//双倍
    private btnDeal: GButton;//分牌
    private btnStop: GButton;//停牌
    private btnGet: GButton;//要牌
    private btn100: GButton;//下注100
    private btn500: GButton;//下注500
    private btn1000: GButton;//下注1000
    private btn10000: GButton;//下注10000
    private btnRepeat: GButton;//重复上一次下注
    private btnBetting: GButton;//下注

    private txtCountdown: GTextField;//倒计时
    private player: Array<PokerPlayer>;//玩家
    private ctrlBottomBtns: GController;//底部按钮控制器

    private pokerDeckNum: number;//几副牌
    private playerNum: number;//玩家数量
    private currentPlayerIndex: number;//当前玩家索引
    private pokerDeck: Array<PokerCard>;//牌堆

    private gameTime: number;//游戏时间
    private playerCountdown: number;//玩家出牌倒计时
    private bettingValue: number;//玩家下注筹码

    public constructor() {
        super();
    }

    protected onInit(): void {
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
        this.player = new Array<PokerPlayer>();
        this.EventBind();
    }

    protected EventBind(): void {
        this.btnDouble.onClick(this, this.btnDoubleOnClick)
        this.btnDeal.onClick(this, this.btnDealOnClick)
        this.btnStop.onClick(this, this.btnStopOnClick)
        this.btnGet.onClick(this, this.btnGetOnClick)
        this.btn100.onClick(this, this.btn100OnClick)
        this.btn500.onClick(this, this.btn500OnClick)
        this.btn1000.onClick(this, this.btn1000OnClick)
        this.btn10000.onClick(this, this.btn10000OnClick)
        this.btnRepeat.onClick(this, this.btnRepeatOnClick)
        this.btnBetting.onClick(this, this.btnBettingOnClick)
    }

    protected OnShown(): void {
        this.gameTime = 0;//初始化游戏时间
        this.bettingValue = 0;
        this.playerCountdown = -1;
        this.txtCountdown.visible = false;
        this.initGame(5);//初始化五个玩家
        this.initPokerDeck();//初始化牌堆

        this.enterPlayer(0, "lin");
    }

    /**每秒回调*/
    protected SecondCallBack(): void {
        this.gameTime++;
        if (this.playerCountdown > 0) {
            this.playerCountdown--;
            this.txtCountdown.text = String(this.playerCountdown);
        }
        else {
            this.txtCountdown.visible = false;
        }
    }

    /**
     * 双倍
     */
    protected btnDoubleOnClick(): void {

    }

    /**
     * 分牌
     */
    protected btnDealOnClick(): void {

    }

    /**
     * 停牌
     */
    protected btnStopOnClick(): void {

    }

    /**
     * 要牌
     */
    protected btnGetOnClick(): void {

    }

    /**
     * 下注100
     */
    protected btn100OnClick(): void {
        this.bettingValue = 100;
    }

    /**
     * 下注500
     */
    protected btn500OnClick(): void {
        this.bettingValue = 500;
    }

    /**
     * 下注1000
     */
    protected btn1000OnClick(): void {
        this.bettingValue = 1000;
    }

    /**
     * 下注10000
     */
    protected btn10000OnClick(): void {
        this.bettingValue = 10000;
    }

    /**
     * 重复上一轮投注
     */
    protected btnRepeatOnClick(): void {

    }

    /**
     * 下注
     */
    protected btnBettingOnClick(): void {
        this.ctrlBottomBtns.selectedPage = "打牌";
    }

    /**
     * 初始化游戏
     */
    public initGame(playerNum: number): void {
        this.ctrlBottomBtns.selectedPage = "下注";
        this.playerNum = playerNum;
        for (var index = 0; index < this.playerNum; index++) {
            this.player[index] = <PokerPlayer>this.contentPane.getChild("player" + index);
            if (index == 1 || index == 2) {
                this.player[index].ctrlSitDir.selectedPage = "右";
            }
        }
    }

    /**
     * 初始化牌堆
     */
    public initPokerDeck(): void {
        this.pokerDeck = new Array<PokerCard>();
        this.pokerDeckNum = Math.ceil(Math.random() * 7) + 1 // 随机生成1-8副牌
        console.debug("当前拥有" + this.pokerDeckNum + "副牌")
        for (var index = 0; index < this.pokerDeckNum; index++) {
            let deck = new PokerDeck();
            for (var index = 0; index < deck.getCount(); index++) {
                this.pokerDeck.push(deck.getCard());
            }
        }
    }

    /**
     * 发牌
     */
    public deal(): void {
        this.beginCountdown();
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.playerNum;
    }

    /**
     * 开始倒计时
     */
    public beginCountdown(): void {
        this.txtCountdown.visible = true;
        this.playerCountdown = BlackJackConfig.PlayerCountdown;
    }

    //新进入一个玩家
    public enterPlayer(index: number, name: string): void {
        this.playerNum++;
        this.player[index].ctrlState.selectedPage = "有人";
        this.player[index].txtName.text = name;
    }
}