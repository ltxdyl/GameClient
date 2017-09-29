namespace StarLib {
    /**
     * 守卫
     */
    export class Guard {

        /**
         * 验证一个条件,并在该协定的条件失败时引发异常
         * @param condition 
         */
        public static Requires(TError: { new (): Error }, condition: boolean): void {
            if (condition) {
                return;
            }
            throw new TError();
        }

        /**
         * 内容不为Null
         * @param argumentValue 
         * @param argumentName 
         */
        public static NotNull(argumentValue: string, argumentName: string): void {
            if (argumentValue == null)
                throw Error(argumentName + " is NotNull");
        }

        /**
         * 内容不为空或Null
         * @param argumentValue 
         * @param argumentName 
         */
        public static NotEmptyOrNull(argumentValue: string, argumentName: string): void {
            if (argumentValue == null || argumentValue == "")
                throw Error(argumentName + " is NotEmptyOrNull");
        }

        /**
         * 长度大于0
         * @param argumentValue 
         * @param argumentName 
         */
        public static CountGreaterZero<T>(argumentValue: Array<T>, argumentName: string): void {
            if (argumentValue.length <= 0)
                throw Error(argumentName + " is count less or equal zero");
        }

        /**
         * 元素不为空或者Null
         * @param argumentValue 
         * @param argumentName 
         */
        public static ElementNotEmptyOrNull(argumentValue: Array<string>, argumentName: string): void {
            argumentValue.forEach(element => {
                Guard.NotNull(element, argumentName);
            });
        }

    }
}