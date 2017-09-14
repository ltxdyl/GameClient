var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//弹幕文字标签
var DanmakuItem = (function (_super) {
    __extends(DanmakuItem, _super);
    function DanmakuItem() {
        return _super.call(this) || this;
    }
    DanmakuItem.prototype.constructFromXML = function (xml) {
        _super.prototype.constructFromXML.call(this, xml);
    };
    return DanmakuItem;
}(GLabel));
//# sourceMappingURL=DanmakuItem.js.map