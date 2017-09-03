//单例窗口类
var SingleWnd = (function () {
    function SingleWnd() {
        this._wndtest = null;
        //任务引导主界面
        this._wndGuide = null;
    }
    SingleWnd.GetInst = function () {
        if (this._inst == null) {
            this._inst = new SingleWnd();
        }
        return this._inst;
    };
    Object.defineProperty(SingleWnd.prototype, "wndtest", {
        get: function () {
            if (this._wndtest == null) {
                this._wndtest = new Wndtest();
                this._wndtest.animation = ["fade_in", "shrink"];
            }
            return this._wndtest;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleWnd.prototype, "wndGuide", {
        get: function () {
            if (this._wndGuide == null) {
                this._wndGuide = new WndGuide();
            }
            return this._wndGuide;
        },
        enumerable: true,
        configurable: true
    });
    return SingleWnd;
}());
SingleWnd._inst = null;
//# sourceMappingURL=SingleWnd.js.map