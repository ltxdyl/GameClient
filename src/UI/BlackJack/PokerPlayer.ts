
/**
 * 扑克玩家类 
 */
class PokerPlayer extends GComponent{

    private playerState:PokerPlayerState
    private points:number;//点数
    private cardNum:number;//手牌数量
    private pokerObjs:Array<CardButton>;//手牌控件

    protected constructFromXML(xml: any): void {
	    super.constructFromXML(xml);
        
        for (var index = 0; index < 5; index++) {
            let cardButton = <CardButton>this.getChild("card" + index)
            this.pokerObjs.push(cardButton)
        }
    }

    public initPokers(pokers:Array<PokerCard>)
    {
        this.clear();

        pokers.forEach(element => {
            this.setCard(element);
        });
        this.calculatePoins();
    }

    /**
     * 叫牌
     * @param poker 
     */
    public bid(poker:PokerCard):void{
        this.setCard(poker);
    }

    /**
     * 设置手牌
     */
    public setCard(poker:PokerCard,index?:number):void{
        let setPos = (index == undefined ? this.cardNum : index );
        this.pokerObjs[setPos].setPoker(poker);
        this.cardNum ++;
    }

    /**
     * 计算点数
     */
    private calculatePoins():void{
        this.pokerObjs.forEach(element => {
            this.points += element.poker.num;
        });
    }

    private clear():void{
        this.points = 0;
        this.cardNum = 0;
        this.pokerObjs = new Array<CardButton>();
        this.pokerObjs.forEach(element => {
            element.clear();
        });
    }
}