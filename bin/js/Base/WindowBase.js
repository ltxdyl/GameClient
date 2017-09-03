var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Tween = laya.utils.Tween;
var Ease = laya.utils.Ease;
//窗口基类
var WindowBase = (function (_super) {
    __extends(WindowBase, _super);
    //构造函数
    function WindowBase() {
        var _this = _super.call(this) || this;
        _this.animation = ["", ""];
        _this._originPosX = 0;
        _this._originPosY = 0;
        _this.bringToFontOnClick = false;
        _this.DoInit();
        return _this;
    }
    WindowBase.prototype.Popup = function (adjustObj) {
        fairygui.GRoot.inst.showPopup(this, adjustObj);
    };
    WindowBase.prototype.show = function () {
        _super.prototype.show.call(this);
        this.setPivot(0.5, 0.5);
        this.center();
        this.DoShowAnimation();
    };
    WindowBase.prototype.hide = function () {
        this.DoHideAnimation();
    };
    //显示动画
    WindowBase.prototype.DoShowAnimation = function () {
        this._originPosX = this.x;
        this._originPosY = this.y;
        var ani = this.animation[0];
        switch (ani) {
            case "eject":
                this.setScale(0.9, 0.9);
                Tween.to(this, { scaleX: 1, scaleY: 1 }, 300, Ease.backInOut, Handler.create(this, this.CallOnShown));
                break;
            case "fade_in":
                this.alpha = 0;
                Tween.to(this, { alpha: 1 }, 300, Ease.quadInOut, Handler.create(this, this.CallOnShown));
                break;
            case "move_up":
                this.y = fairygui.GRoot.inst.height;
                Tween.to(this, { y: this._originPosY }, 300, Ease.quadOut, Handler.create(this, this.CallOnShown));
                break;
            case "move_left":
                this.x = fairygui.GRoot.inst.width;
                Tween.to(this, { x: this._originPosX }, 300, Ease.quadInOut, Handler.create(this, this.CallOnShown));
                break;
            case "move_right":
                this.y = -this.width - 30;
                Tween.to(this, { x: this._originPosX }, 300, Ease.quadOut, Handler.create(this, this.CallOnShown));
                break;
            default:
                this.CallOnShown();
        }
    };
    //隐藏动画
    WindowBase.prototype.DoHideAnimation = function () {
        this._originPosX = this.x;
        this._originPosY = this.y;
        var ani = this.animation[1];
        switch (ani) {
            case "shrink":
                this.setScale(1, 1);
                Tween.to(this, { scaleX: 0.8, scaleY: 0.8 }, 200, Ease.expoIn, Handler.create(this, this.CallOnHide));
                break;
            case "move_down":
                Tween.to(this, { y: fairygui.GRoot.inst.height + 30 }, 300, Ease.quadInOut, Handler.create(this, this.CallOnHide));
                break;
            case "move_left":
                Tween.to(this, { x: -this.width - 30 }, 300, Ease.quadInOut, Handler.create(this, this.CallOnHide));
                break;
            case "move_right":
                Tween.to(this, { x: fairygui.GRoot.inst.width + 30 }, 300, Ease.quadInOut, Handler.create(this, this.CallOnHide));
                break;
            default:
                this.CallOnHide();
        }
    };
    WindowBase.prototype.CallOnShown = function () {
        this.setScale(1, 1);
        this.alpha = 1;
        this.x = this._originPosX;
        this.y = this._originPosY;
        this.OnShown();
    };
    WindowBase.prototype.CallOnHide = function () {
        this.setScale(1, 1);
        this.alpha = 1;
        this.x = this._originPosX;
        this.y = this._originPosY;
        this.hideImmediately();
    };
    WindowBase.prototype.DoInit = function () {
    };
    WindowBase.prototype.OnShown = function () {
    };
    WindowBase.prototype.OnHide = function () {
    };
    return WindowBase;
}(fairygui.Window));
//# sourceMappingURL=WindowBase.js.map