const users = require('./userRoute')

module.exports = app => {

    app.use((req, res, next) => {
        console.log(req.headers.host, new Date().toLocaleTimeString());
        next();
      });
      
    app.use(users)

}