//单例窗口类
var SingleWnd = (function () {
    function SingleWnd() {
        //登陆界面
        this._wndLogin = null;
        //任务引导主界面
        this._wndGuide = null;
        //战斗界面
        this._wndBattle = null;
        //HUD界面
        this._wndHUD = null;
    }
    SingleWnd.GetInst = function () {
        if (this._inst == null) {
            this._inst = new SingleWnd();
        }
        return this._inst;
    };
    Object.defineProperty(SingleWnd.prototype, "wndLogin", {
        get: function () {
            if (this._wndLogin == null) {
                this._wndLogin = new WndLogin();
                this._wndLogin.animation = ["fade_in", "shrink"];
            }
            return this._wndLogin;
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
    Object.defineProperty(SingleWnd.prototype, "wndBattle", {
        get: function () {
            if (this._wndBattle == null) {
                this._wndBattle == new WndBattle();
            }
            return this._wndBattle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SingleWnd.prototype, "wndHUD", {
        get: function () {
            if (this._wndHUD == null) {
                this._wndHUD = new WndHUD();
            }
            return this._wndHUD;
        },
        enumerable: true,
        configurable: true
    });
    return SingleWnd;
}());
SingleWnd._inst = null;
//# sourceMappingURL=SingleWnd.js.map