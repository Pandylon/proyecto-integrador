const {login}=require("../contollers/login")
const {getCharById}=require("../contollers/getCharById")
const {getFav,postFav,deleteFav}=require("../contollers/handleFavorites")

const router=require("express").Router()

router.get("/character/:idChar",(req,res)=>{
    getCharById(req,res);
})
//tambien s epuede pasar directamente el nombre d ela funcion
router.get("/login",login)
router.get("/fav",getFav)

router.post("/fav",(req,res)=>{
    postFav(req,res);
})
router.delete("/fav/:id",(req,res)=>{
    deleteFav(req,res);
})

module.exports={router};