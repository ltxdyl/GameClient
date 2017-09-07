//主城面板组件
class ComCity extends fairygui.GComponent{

    public tShowGirl:fairygui.Transition;

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);
		this.tShowGirl = this.getTransition("tShowGirl")
        this.EvenBind();
	}

    protected EvenBind():void{

    }

}