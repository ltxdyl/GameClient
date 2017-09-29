namespace StarLib {
    /**
     * StarLib实例
     */
    export class App {
        public static instance: IApplication;

        private static Handler(): IApplication {
            if (App.instance != null)
                return App.instance;
            throw new Error("Application is not instance");
        }

        /// <summary>
        /// 注册服务提供者
        /// </summary>
        /// <param name="provider">服务提供者</param>
        public static Register(provider: IServiceProvider): void {
            this.Handler().Register(provider);
        }

        /// <summary>
        /// 服务提供者是否已经注册过
        /// </summary>
        /// <param name="provider">服务提供者</param>
        /// <returns>服务提供者是否已经注册过</returns>
        public static IsRegisted(provider: IServiceProvider): boolean {
            return this.Handler().IsRegisted(provider);
        }

    }
}