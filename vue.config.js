module.exports = {
    devServer: {
        host: '0.0.0.0',
        open: true
    },
    lintOnSave: process.env.NODE_ENV !== 'production'
}
