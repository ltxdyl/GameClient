/**弹幕管理类*/
var DanmakuMaster = (function () {
    function DanmakuMaster() {
        this.moveDir = DanmakuMoveDir.RightToLeft;
        this.maxNum = 30;
        this.moveSpeed = 10;
        this.initTextPool();
    }
    //初始化字幕组件池
    DanmakuMaster.prototype.initTextPool = function () {
        this.textPool = new Array();
        for (var i = 0; i < this.maxNum; i++) {
            var textField = UIPackage.createObject("Danmaku", "DanmakuItem");
            this.textPool.push(textField);
        }
    };
    //获取可用的组件
    DanmakuMaster.prototype.getFromPool = function () {
        var textField = this.textPool.pop();
        if (textField != undefined) {
            textField.visible = true;
            return textField;
        }
    };
    //将组件放回池子
    DanmakuMaster.prototype.returnToPool = function (textField) {
        textField.visible = false;
        this.textPool.push(textField);
    };
    //获取起止x轴坐标
    DanmakuMaster.prototype.getPosX = function (textObj) {
        var posX = [0, 0];
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
    };
    //获取y轴坐标
    DanmakuMaster.prototype.getPosY = function () {
        var posY = Math.random() * GRoot.inst.height;
        return posY;
    };
    //获取移动时间
    DanmakuMaster.prototype.getMoveTime = function () {
        var moveTime = (this.moveSpeed + Math.random() * 3) * 1000; //毫秒
        return moveTime;
    };
    //内容整理
    DanmakuMaster.prototype.formatContent = function (content) {
        var result = content;
        return result;
    };
    //获取颜色
    DanmakuMaster.prototype.GetContentColor = function (content) {
        for (var key in ColorConfig) {
            if (content.indexOf(key) > 0) {
                return ColorConfig[key];
            }
        }
        return "#FFFFFF";
    };
    return DanmakuMaster;
}());
//# sourceMappingURL=DanmakuMaster.js.map