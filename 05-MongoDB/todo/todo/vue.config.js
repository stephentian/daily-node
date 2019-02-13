module.exports = {
    devServer: {
        // 将全部 api 开头的 URL 转移到自己的服务器
        proxy: {
            "/api/*": {
                target: "http://localhost:8081",
                secure: false
            }
        }
    }
}