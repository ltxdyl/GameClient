namespace StarLib {
    /**
     * 应用程序接口
     */
    export interface IApplication {
        /// <summary>
        /// 注册服务提供者
        /// </summary>
        /// <param name="provider">服务提供者</param>
        Register(provider: IServiceProvider): void;

        /// <summary>
        /// 服务提供者是否已经注册过
        /// </summary>
        /// <param name="provider">服务提供者</param>
        /// <returns>服务提供者是否已经注册过</returns>
        IsRegisted(provider: IServiceProvider): boolean;
    }
}