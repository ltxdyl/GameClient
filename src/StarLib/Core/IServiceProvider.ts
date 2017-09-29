namespace StarLib {
    /// <summary>
    /// 服务提供者
    /// </summary>
    export interface IServiceProvider {
        /// <summary>
        /// 服务提供者初始化
        /// </summary>
        Init(): void;

        /// <summary>
        /// 当注册服务提供者
        /// </summary>
        Register(): void;
    }
}