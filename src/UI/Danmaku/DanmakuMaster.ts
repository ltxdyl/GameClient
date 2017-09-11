import GTextField = fairygui.GTextField;

//弹幕移动方向
enum DanmakuMoveDir{Left,Right};

//弹幕管理类
class DanmakuMaster {

    public moveDir:DanmakuMoveDir;
    public maxNum:number;//最大弹幕数量
    public moveSpeed:number;//移动速度(移动一屏／秒)

    private textPool:Array<fairygui.GTextField>;//弹幕组件池

    constructor()
    {
        this.moveDir = DanmakuMoveDir.Left;
        this.maxNum = 30;
        this.moveSpeed = 10;
    }

    //初始化字幕组件池
    private initTextPool():void{
        this.textPool = new Array<GTextField>();
        for(var i = 0; i < this.maxNum; i++)
        {
            this.textPool.push(new GTextField());
        }
    }

    //获取可用的组件
    public GetFromPool():GTextField{
        return this.textPool.pop();
    }

    //将组件放回池子
    public ReturnToPool(textField:GTextField):void{
        this.textPool.push(textField);
    }

    //新增一条弹幕
    public AddOneDanmaku(content:string):void{
        let textField = this.GetFromPool();
        
    }
}