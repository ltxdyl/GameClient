var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//模态窗口背景组件
//父类为windowbase对象
var ModalWindowBg = (function (_super) {
    __extends(ModalWindowBg, _super);
    function ModalWindowBg() {
        return _super.call(this) || this;
    }
    ModalWindowBg.prototype.constructFromXML = function (xml) {
        _super.prototype.constructFromXML.call(this, xml);
        this.background = this.getChild("background").asImage;
        this.btnClose = this.getChild("btnClose").asButton;
        this.EvenBind();
    };
    ModalWindowBg.prototype.EvenBind = function () {
        this.btnClose.onClick(this, this.OnBtnClose);
    };
    ModalWindowBg.prototype.OnBtnClose = function () {
        this.parent.parent.hide();
    };
    return ModalWindowBg;
}(fairygui.GComponent));
//# sourceMappingURL=ModalWindowBg.js.map