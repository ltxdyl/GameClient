//战斗组件
class ComBattle extends GComponent
{
	public leftHP:GProgressBar;
	public leftMP:GProgressBar;
	public rightHP:GProgressBar;
	public rightMP:GProgressBar;

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);
		this.leftHP = this.getChild("leftHP").asProgress;
		this.leftMP = this.getChild("leftMP").asProgress;
		this.rightHP = this.getChild("rightHP").asProgress;
		this.rightMP = this.getChild("rightMP").asProgress;

        this.EvenBind();
	}

    protected EvenBind():void{

    }

	public OnShow():void{
		this.InitBattleInfo();
        //定时执行一次(间隔时间)
        Laya.timer.once(1000, this, this.Attack);
	}

	//初始化战斗数据
	protected InitBattleInfo():void{
		this.leftHP.max = 10000;
		this.leftHP.value = this.leftHP.max;
		this.leftMP.max = 1000;
		this.leftMP.value = this.leftMP.max;
		this.rightHP.max = 8000;
		this.rightHP.value = this.rightHP.max;
		this.rightMP.max = 1200;
		this.rightMP.value = this.rightMP.max;
	}

	protected Attack():void{
		this.leftHP.tweenValue(5000,1);
	}
}