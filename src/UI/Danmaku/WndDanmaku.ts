//弹幕窗口
class WndDanmaku extends WindowBase
{
    private static _wndDanmaku:WndDanmaku;
    public static GetInst():WndDanmaku{
        if(this._wndDanmaku == null)
            this._wndDanmaku = new WndDanmaku();
        return this._wndDanmaku;
    }

    private danmakuMaster:DanmakuMaster;
    private btnSwich:GButton;

    public constructor() {
        super();
    }
    
    protected onInit():void {
        this.danmakuMaster = new DanmakuMaster();

        this.name = "WndDanmaku";
        this.contentPane = UIPackage.createObject("Danmaku",this.name).asCom;
        this.EventBind();
    }

    protected EventBind():void{
        this.onClick(this,this.wndOnClick)
    }

    protected OnShown(): void {

    }

    private wndOnClick():void{
        let contents = ["红","黄","蓝","绿","粉"];
        let index = Math.floor( Math.random() * 5);
        console.debug(String(index))
        this.addOneDanmaku("我是" + contents[index] +"色的");
    }

    //新增一条弹幕
    private addOneDanmaku(content:string):void{
        let danmakuItem = this.danmakuMaster.getFromPool();
        if(danmakuItem == null)
            return;
        
        this.contentPane.addChild(danmakuItem);
        danmakuItem.titleColor = this.danmakuMaster.GetContentColor(content);
        danmakuItem.text = this.danmakuMaster.formatContent(content);
        
        let posX = this.danmakuMaster.getPosX(danmakuItem);
        danmakuItem.x = posX[0];
        danmakuItem.y = this.danmakuMaster.getPosY();
        let moveTime = this.danmakuMaster.getMoveTime();
        Tween.to(danmakuItem, { x: posX[1]},moveTime, Ease.linearNone, Handler.create(this, this.moveOver, [danmakuItem]));
    }

    //移动结束
    private moveOver(danmakuItem:DanmakuItem):void{
        this.contentPane.removeChild(danmakuItem);
        this.danmakuMaster.returnToPool(danmakuItem);
    }
}