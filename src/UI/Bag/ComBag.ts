//主城面板组件
class ComBag extends GComponent{

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);
        this.EvenBind();
	}

    protected EvenBind():void{

    }

}