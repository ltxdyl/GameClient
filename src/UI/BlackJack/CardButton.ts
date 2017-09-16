/**扑克牌按钮*/
class CardButton extends GComponent
{
    private poker:PokerCard;

    public constructor(poker:PokerCard){
        super();
        this.poker = poker;
    }

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);

        this.icon = "ui://Icon/" + this.poker.color + "_" + this.poker.num;
        this.EvenBind();
	}

    protected EvenBind():void{

    }
}