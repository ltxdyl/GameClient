//弹幕窗口
class WndDanmaku extends WindowBase
{
    private static _wndDanmaku:WndDanmaku;
    public static Inst():WndDanmaku{
        if(this._wndDanmaku == null)
            this._wndDanmaku = new WndDanmaku();
        return this._wndDanmaku;
    }

    private danmakuMaster:DanmakuMaster;

    public constructor() {
        super();
    }
    
    protected onInit():void {
        this.danmakuMaster = new DanmakuMaster();

        this.name = "WndDanmaku";
        this.contentPane = fairygui.UIPackage.createObject("Danmaku",this.name).asCom;
        this.EventBind();
    }

    protected EventBind():void{

    }

    protected OnShown(): void {

    }

    //新增一条弹幕
    private addOneDanmaku(content:string):void{
        let textField = this.danmakuMaster.getFromPool();
        if(textField == null)
            return;
        
        this.contentPane.addChild(textField);
        textField.text = this.danmakuMaster.formatContent(content);
        
        let posX = this.danmakuMaster.getPosX(textField);
        textField.x = posX[0];
        textField.y = this.danmakuMaster.getPosY();
        let moveTime = this.danmakuMaster.getMoveTime();
        Tween.to(textField, { x: posX[1]},moveTime, Ease.linearNone, Handler.create(this, this.moveOver, [textField]));
    }

    //移动结束
    private moveOver(agrs:Array<any>):void{
        let obj:GTextField = <GTextField>agrs[0];
        this.contentPane.removeChild(obj);
        this.danmakuMaster.returnToPool(obj);
    }
}