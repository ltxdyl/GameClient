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
        this.btnDouble.onClick(this, this.btnDoubleOnclick)
    }

    protected OnShown(): void {
        this.gameTime = 0;//初始化游戏时间
        this.playerCountdown = BlackJackConfig.PlayerCountdown;
        this.initGame(5);//初始化五个玩家
        this.initPokerDeck();//初始化牌堆
    }

    /**每秒回调*/
    protected SecondCallBack(): void {
        this.gameTime++;
        if (this.playerCountdown > 0) {
            this.playerCountdown--;
        }
        else {
            this.playerCountdown = BlackJackConfig.PlayerCountdown;
        }
        this.txtCountdown.text = String(this.playerCountdown);
    }

    /**
     * 双倍
     */
    protected btnDoubleOnclick(): void {

    }

    /**
     * 初始化游戏
     */
    public initGame(playerNum: number): void {
        this.playerNum = playerNum;
        for (var index = 0; index < this.playerNum; index++) {
            this.player[index] = <PokerPlayer>this.contentPane.getChild("player" + index);
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

    }


}