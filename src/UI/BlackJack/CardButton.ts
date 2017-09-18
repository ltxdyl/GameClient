/**扑克牌按钮*/
class CardButton extends GButton
{
    public poker:PokerCard;

    public constructor(){
        super();
    }

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);
        this.EvenBind();
	}

    /**
     * 设置扑克
     * @param poker 
     */
    public setPoker(poker:PokerCard):void{
        this.poker = poker;
        this.icon = "ui://Icon/" + PokerColor[this.poker.color] + "_" + this.poker.num;
    }

    public clear():void{
        this.icon = "ui://Icon/Transparent"
    }

    protected EvenBind():void{

    }
}