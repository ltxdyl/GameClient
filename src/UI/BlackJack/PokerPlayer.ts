
/**
 * 扑克玩家类 
 */
class PokerPlayer extends GComponent {

    private playerState: PokerPlayerState
    private points: number;//点数
    private chips: number;//筹码
    private cardNum: number;//手牌数量

    private pokerObjs: Array<CardButton>;//手牌控件
    public txtName: GTextField;//用户名
    public txtChips: GTextField;//筹码
    public txtPoints: GTextField;//手牌总点数
    public ctrlSitDir: GController;//座位方向控制器
    public ctrlState: GController;//状态控制

    protected constructFromXML(xml: any): void {
        super.constructFromXML(xml);

        this.pokerObjs = new Array<CardButton>();
        for (var index = 0; index < 5; index++) {
            let cardButton = <CardButton>this.getChild("card" + index)
            this.pokerObjs.push(cardButton)
        }
        this.txtName = this.getChild("txtName").asTextField;
        this.txtChips = this.getChild("txtChips").asTextField;
        this.txtPoints = this.getChild("txtPoints").asTextField;
        this.ctrlSitDir = this.getController("ctrlSitDir");
        this.ctrlState = this.getController("ctrlState")
        this.clear();
    }

    /**
     * 叫牌
     * @param poker 
     */
    public bid(poker: PokerCard): void {
        this.setCard(poker);
    }

    /**
     * 设置手牌
     */
    public setCard(poker: PokerCard, index?: number): void {
        let setPos = (index == undefined ? this.cardNum : index);
        this.pokerObjs[setPos].setPoker(poker);
        this.cardNum++;
    }

    /**
     * 计算点数
     */
    private calculatePoins(): void {
        this.pokerObjs.forEach(element => {
            this.points += element.poker.num;
        });
    }

    private clear(): void {
        this.ctrlState.selectedPage = "无人";
        this.txtName.text = "";
        this.txtChips.text = "";
        this.txtPoints.text = "";
        this.points = 0;
        this.cardNum = 0;
        this.pokerObjs.forEach(element => {
            element.clear();
        });
    }
}