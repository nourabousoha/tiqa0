import Express from 'express';
const  app = new Express()
const  port = process.env.PORT || 8000;

app.listen(port);

console.log('tiqa list RESTful API server started on: ' + port);
