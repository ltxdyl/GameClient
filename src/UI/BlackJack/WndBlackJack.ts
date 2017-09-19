/**黑杰克界面*/
class WndBlackJack extends WindowBase{

    private static wndBlackJack:WndBlackJack = null;
    public static GetInst():WndBlackJack
    {
        if(this.wndBlackJack == null)
        {
            this.wndBlackJack = new WndBlackJack();
        }
        return this.wndBlackJack;
    }

    private btnTest:GButton;
    private btnRefresh:GButton;
    private txtCountdown:GTextField;//倒计时
    private player:Array<PokerPlayer>;//玩家

    private pokerDeckNum:number;//几副牌
    private playerNum:number;//玩家数量
    private currentPlayerIndex:number;//当前玩家索引
    private pokerDeck:Array<PokerCard>;//牌堆

    private gameTime:number;//游戏时间
    private playerCountdown:number;//玩家出牌倒计时

    public constructor() {
        super();
    }
    
    protected onInit():void {
        this.name = "WndBlackJack";
        this.contentPane = UIPackage.createObject("BlackJack",this.name).asCom;
        this.btnTest = this.contentPane.getChild("btnTest").asButton;
        this.btnRefresh = this.contentPane.getChild("btnRefresh").asButton;
        this.txtCountdown = this.contentPane.getChild("txtCountdown").asTextField;
        this.currentPlayerIndex = 0;

        Laya.timer.loop(1000, this, this.SecondCallBack);
        this.player = new Array<PokerPlayer>();
        this.EventBind();
    }

    protected EventBind():void{
        this.btnTest.onClick(this,this.OnBtnTestClick)
        this.btnRefresh.onClick(this,this.OnBtnRefreshClick);
    }

    protected OnShown(): void {
        this.gameTime = 0;//初始化游戏时间
        this.playerCountdown = BlackJackConfig.PlayerCountdown;
        this.initGame(5);//初始化五个玩家
        this.initPokerDeck();//初始化牌堆
    }

    /**每秒回调*/
    protected SecondCallBack():void{
        this.gameTime ++;
        if(this.playerCountdown > 0)
        {
            this.playerCountdown --;
        }
        else
        {
            this.playerCountdown = BlackJackConfig.PlayerCountdown;
        }
        this.txtCountdown.text = String(this.playerCountdown);
    }

    protected OnBtnTestClick():void{

    }

    protected OnBtnRefreshClick():void{
        this.player[0].setCard(new PokerCard(2,PokerColor.Diamond),0);
    }

    /**
     * 初始化游戏
     */
    public initGame(playerNum:number):void{
        this.playerNum = playerNum;
        for (var index = 0; index < this.playerNum; index++) {
            this.player[index] = <PokerPlayer>this.contentPane.getChild("player" + index);
        }
    }

    /**
     * 初始化牌堆
     */
    public initPokerDeck():void{
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
    public deal():void{

    }


}