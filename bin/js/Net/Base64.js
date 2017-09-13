var Base64 = (function () {
    function Base64() {
    }
    Base64.GetInst = function () {
        if (this._base64 == null)
            this._base64 = new Base64();
        return this._base64;
    };
    return Base64;
}());
Base64._base64 = null;
//# sourceMappingURL=Base64.js.map