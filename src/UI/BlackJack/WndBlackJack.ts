//黑杰克界面
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

    public constructor() {
        super();
    }
    
    protected onInit():void {
        this.name = "WndBlackJack";
        this.contentPane = UIPackage.createObject("BlackJack",this.name).asCom;
        this.btnTest = this.contentPane.getChild("btnTest").asButton;

        this.EventBind();
    }

    protected EventBind():void{
        this.btnTest.onClick(this,this.OnBtnTestOnClick)
    }

    protected OnShown(): void {

    }

    protected OnBtnTestOnClick():void{
        let pokerDeck = new PokerDeck(true);
        console.debug(pokerDeck.toString());
        pokerDeck.shuffle();
        console.debug("-------------------------------");
        console.debug(pokerDeck.toString());
    }
}