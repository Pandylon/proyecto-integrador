/*const http=require("http");
const fs=require("fs");
//const data=require("./utils/data")
const getCharById= require("./contollers/getCharById.js")

http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")

    if(req.url.includes( "/rickandmorty/character")) {
        console.log(req.url)
        const id= req.url.split("/").at(-1)
        console.log(req.url)
          getCharById(res,id)
        //const characterFoud=data.find((character)=>{
          // return character.id === +id
       /// })
        
        //res.writeHead(200,{"content-type":"application/json"})
        // return res.end(JSON.stringify(characterFoud))
         /*if(req.url.includes( "/rickandmorty/character/")) {
            const id= req.url.split("/").at(-1)
            getCharById(res,Number(id));*/
     //} 

     
     
        //res.writeHead(404)
        //res.end("error")
 //}).listen(3001,"localhost")

 const express=require ("express")
 const server=express()
 const {router}=require("./routes/index");
 const PORT=3001;
//Crea un middleware que ejecute a **`express.json()`**
 server.use(express.json());//la informacion q me llega a mi de json la pasa objeto js para poderla trabajar

 server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );

  next();
});

  server.use('/rickandmorty',router)//Crea un middleware que agregue el string "**`/rickandmorty`**" antes de cada una de tus rutas.
 server.listen(PORT,()=>{ console.log('server reasid in porto: '+ PORT)})