let myFavorites=[];

/*const postFav=(req,res)=>{
    const character=req.body;

    myFavorites.push(character)
    return res.status(200).json(myFavorites)

}

const deleteFav =(req,res)=>{
    const {id}=req.params;

    //pisamos el array oirginal
   myFavorites=myFavorites.filter((favorite)=> favorite.id !== +id)

      return res.status(200).json(myFavorites)                                          
     

}*/

function postFav(req, res) {
  myFavorites.push(req.body);
  return res.json(myFavorites);
}

function deleteFav(req, res) {
  const { id } = req.params;
  const noDelete = myFavorites.filter((pjFav) => pjFav.id !== Number(id));
  myFavorites = noDelete;

  return res.json(myFavorites);
}

function getFav(req, res) {
  return res.json(myFavorites);
}


module.exports = {
    postFav,
    deleteFav,
    getFav
  };