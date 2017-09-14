//模态窗口背景组件
//父类为windowbase对象
class ModalWindowBg extends GLabel{

	public btnClose:GButton;

	public constructor() {
		super();
	}

	protected constructFromXML(xml: any): void {
		super.constructFromXML(xml);
		this.btnClose = this.getChild("btnClose").asButton;
        this.EvenBind();
	}

    protected EvenBind():void{
        this.btnClose.onClick(this,this.OnBtnClose);
    }

    protected OnBtnClose():void{
        (<WindowBase>this.parent.parent).hide();
    }
}