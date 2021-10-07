module.exports = {
    devServer:{        
        proxy:{
            '/api':{
                //프록시요청을 보낼 주소.
                target: 'http://localhost:3000', //test 서버 
                changeOrigin: true,
                ws: false,
            },
        }
    },
}