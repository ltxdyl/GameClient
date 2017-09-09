//主城面板组件
class ComCity extends fairygui.GComponent{

    public tShowGirl:fairygui.Transition;
	public tShowFuncButtons:fairygui.Transition;

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);
		this.tShowGirl = this.getTransition("tShowGirl")
		this.tShowFuncButtons = this.getTransition("tShowFuncButtons")
        this.EvenBind();
	}

    protected EvenBind():void{

    }

	public OnShow():void{
		this.tShowGirl.play();
		this.tShowFuncButtons.play();
	}

}