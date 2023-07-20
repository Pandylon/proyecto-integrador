/*const axios=require("axios")

const getCharById =(res,id)=>{
     axios(`https://rickandmortyapi.com/api/character/${id}`)
     .then((Response) =>Response.data)
    
     .then((data)=>{
        let character={
            id:data.id,
            name:data.name,
            gender:data.gender,
            species: data.species,
            origin:data.origin,
            image:data.image,
            status:data.status,
           
                          }
                         
     res.writeHead(200,{"content-type":"application/json"})
      .end(JSON.stringify(character))                
     })
     .catch((error)=>
        res.writeHead(500,{"content-type":"text/aplain"})
        .end(error.massage)
     )
}
module.exports= getCharById;*/
   

const URL=("https://rickandmortyapi.com/api/character/");
const axios=require ("axios")

async function getCharById(req,res){

  const { idChar } = req.params

   /*axios (`${URL}/${id}`)
   .then(response=>response.data)
   .then(({status,name, species, origin, image,gender})=> {
      if(name){
        let character={
         id,name,species,origin,image,gender,status
        }
        return res.status(200).json(character)
      }
      return res.status(404).send('not found')
   })
     .catch(error=> res.status(500).send(error.message))  

   }*/
   try {
    
      const apiRequest = await axios((`${URL}${idChar}`));
      const { data } = apiRequest;
  
      // Se pudo hacer OK la solicitud de axios pero la API no tiene info entonces me indica un error.
      if (data.error) {
        return res.status(404).send(data.error);
      }
  
      const { id, name, status, species, origin, image, gender } = data;
      const character = {
        id: Number(id),
        name,
        status,
        species,
        origin, // Enviamos el objecto "origin" porque el front lo espera
        image,
        gender,
      };
      return res.status(200).json(character);
    } catch (axiosError) {
      // Error en la solicitud de axios por ejemplo: "estaba mal la URL y no se pudo hacer el get"
      return res.status(500).send(axiosError.message);
    }
}
module.exports={
  getCharById
}