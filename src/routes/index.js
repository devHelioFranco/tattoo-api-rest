
module.exports = app => {
    app.use((req, res, next) => {
        console.log(req.headers.host, new Date().toLocaleTimeString());
        next();
      });
      
    

    app.get('/', (req, res) => res.send('Olá!') )
}