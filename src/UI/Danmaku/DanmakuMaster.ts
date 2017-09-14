//弹幕移动方向
enum DanmakuMoveDir{LeftToRight,RightToLeft};

//弹幕管理类
class DanmakuMaster {

    public moveDir:DanmakuMoveDir;
    public maxNum:number;//最大弹幕数量
    public moveSpeed:number;//移动速度(移动一屏／秒)

    private textPool:Array<DanmakuItem>;//弹幕组件池

    constructor()
    {
        this.moveDir = DanmakuMoveDir.RightToLeft;
        this.maxNum = 30;
        this.moveSpeed = 10;
        
        this.initTextPool();
    }

    //初始化字幕组件池
    private initTextPool():void{
        this.textPool = new Array<DanmakuItem>();
        for(var i = 0; i < this.maxNum; i++)
        {
            let textField = new DanmakuItem();
            this.textPool.push(textField);
        }
    }

    //获取可用的组件
    public getFromPool():DanmakuItem{
        let textField:DanmakuItem = this.textPool.pop();
        textField.visible = true;
        return textField;
    }

    //将组件放回池子
    public returnToPool(textField:DanmakuItem):void{
        textField.visible = false;
        this.textPool.push(textField);
    }

    //获取起止x轴坐标
    public getPosX(textObj:DanmakuItem){
        let posX:number[] = [0,0];
        switch (this.moveDir) {
            case DanmakuMoveDir.RightToLeft:
                posX[0] = GRoot.inst.width;
                posX[1] = -textObj.width;
                break;
            case DanmakuMoveDir.LeftToRight:
                posX[0] = -textObj.width;
                posX[1] = GRoot.inst.width;
                break;
            default:
                posX[0] = GRoot.inst.width;
                posX[1] = -textObj.width;
                break;
        }
        return posX;
    }

    //获取y轴坐标
    public getPosY():number{
        let posY = Math.random() * GRoot.inst.height;
        return posY;
    }

    //获取移动时间
    public getMoveTime():number{
        let moveTime:number = this.moveSpeed + Math.random() * 3;
        return moveTime;
    }

    public formatContent(content:string):string{
        let result = content;
        return result;
    }
}