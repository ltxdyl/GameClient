var StarLib;
(function (StarLib) {
    /**
     * StarFramework实例
     */
    var App = (function () {
        function App() {
        }
        Object.defineProperty(App.prototype, "Handler", {
            get: function () {
                if (App.instance != null)
                    return App.instance;
                throw new Error("Application is not instance");
            },
            set: function (value) {
                App.instance = value;
            },
            enumerable: true,
            configurable: true
        });
        return App;
    }());
    StarLib.App = App;
})(StarLib || (StarLib = {}));
//# sourceMappingURL=App.js.map