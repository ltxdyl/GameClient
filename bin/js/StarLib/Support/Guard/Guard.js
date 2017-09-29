var StarLib;
(function (StarLib) {
    /**
     * 守卫
     */
    var Guard = (function () {
        function Guard() {
        }
        /**
         * 验证一个条件,并在该协定的条件失败时引发异常
         * @param condition
         */
        Guard.Requires = function (TError, condition) {
            if (condition) {
                return;
            }
            throw new TError();
        };
        /**
         * 内容不为Null
         * @param argumentValue
         * @param argumentName
         */
        Guard.NotNull = function (argumentValue, argumentName) {
            if (argumentValue == null)
                throw Error(argumentName + " is NotNull");
        };
        /**
         * 内容不为空或Null
         * @param argumentValue
         * @param argumentName
         */
        Guard.NotEmptyOrNull = function (argumentValue, argumentName) {
            if (argumentValue == null || argumentValue == "")
                throw Error(argumentName + " is NotEmptyOrNull");
        };
        /**
         * 长度大于0
         * @param argumentValue
         * @param argumentName
         */
        Guard.CountGreaterZero = function (argumentValue, argumentName) {
            if (argumentValue.length <= 0)
                throw Error(argumentName + " is count less or equal zero");
        };
        /**
         * 元素不为空或者Null
         * @param argumentValue
         * @param argumentName
         */
        Guard.ElementNotEmptyOrNull = function (argumentValue, argumentName) {
            argumentValue.forEach(function (element) {
                Guard.NotNull(element, argumentName);
            });
        };
        return Guard;
    }());
    StarLib.Guard = Guard;
})(StarLib || (StarLib = {}));
//# sourceMappingURL=Guard.js.map