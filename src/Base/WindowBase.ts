import Tween = laya.utils.Tween
import Ease = laya.utils.Ease

//窗口基类
class WindowBase extends fairygui.Window{

    public animation:string[];//0 显示动画 1 关闭动画
    private _originPosX:number;
    private _originPosY:number;

    //构造函数
    public constructor(){
        super();
        this.animation = ["",""];
        this._originPosX = 0;
        this._originPosY = 0;
        this.bringToFontOnClick = false;
        this.DoInit();
    }

    public Popup(adjustObj):void{
        fairygui.GRoot.inst.showPopup(this,adjustObj);
    }

    public show():void{
        super.show();
        this.setPivot(0.5,0.5);
        this.center();
        this.DoShowAnimation();
    }

    public hide():void{
        this.DoHideAnimation();
    }

    //显示动画
    protected DoShowAnimation():void{
        this._originPosX = this.x;
        this._originPosY = this.y;
        let ani = this.animation[0];
        switch(ani)
        {
            case "eject":
                this.setScale(0.9, 0.9);
                Tween.to(this, { scaleX: 1,scaleY: 1 },300, Ease.backInOut, Handler.create(this, this.CallOnShown));
                break;
            case "fade_in":
                this.alpha = 0;
                Tween.to(this,{alpha:1},300,Ease.quadInOut,Handler.create(this,this.CallOnShown));
                break;
            case "move_up":
                this.y = fairygui.GRoot.inst.height;
                Tween.to(this,{y:this._originPosY},300,Ease.quadOut,Handler.create(this,this.CallOnShown));
                break;
            case "move_left":
                this.x = fairygui.GRoot.inst.width;
                Tween.to(this,{x:this._originPosX},300,Ease.quadInOut,Handler.create(this,this.CallOnShown));
                break;
            case "move_right":
                this.y = -this.width - 30;
                Tween.to(this,{x:this._originPosX},300,Ease.quadOut,Handler.create(this,this.CallOnShown));
                break;
            default:
                this.CallOnShown();
        }
    }

    //隐藏动画
    protected DoHideAnimation():void{
        this._originPosX = this.x;
        this._originPosY = this.y;
        let ani = this.animation[1];
        switch(ani)
        {
            case "shrink":
                this.setScale(1,1);
                Tween.to(this, { scaleX: 0.8,scaleY: 0.8 },200, Ease.expoIn, Handler.create(this, this.CallOnHide));
                break;
            case "move_down":
                Tween.to(this,{y:fairygui.GRoot.inst.height + 30},300,Ease.quadInOut,Handler.create(this,this.CallOnHide));
                break;
            case "move_left":
                Tween.to(this,{x:-this.width-30},300,Ease.quadInOut,Handler.create(this,this.CallOnHide));
                break;
            case "move_right":
                Tween.to(this,{x:fairygui.GRoot.inst.width + 30},300,Ease.quadInOut,Handler.create(this,this.CallOnHide));
                break;
            default:
                this.CallOnHide();
        }
    }

    protected CallOnShown():void{
        this.setScale(1,1);
        this.alpha = 1;
        this.x = this._originPosX;
        this.y = this._originPosY;
        this.OnShown();
    }

    protected CallOnHide():void{
        this.setScale(1,1);
        this.alpha = 1;
        this.x = this._originPosX;
        this.y = this._originPosY;
        this.hideImmediately();
    }

    protected DoInit():void{

    }

    protected OnShown():void{

    }

    protected OnHide():void{

    }
}