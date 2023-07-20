import { Link } from "react-router-dom";
import style from './card.module.css';
import {connect} from 'react-redux'
import {addFav,removeFav} from '../redux/actions'
import {useState, useEffect} from 'react'

 function Card({name,status,species,gender,origin,image,onClose,id,addFav,removeFav,myFavorites}) {
   const [isFav,setIsfav]=useState(false);
   /* -  Si el estado **isFav** es **`true`**,
    entonces settea ese estado en false, y despacha la función **removeFav** que recibiste por props pasándole el **id** del personaje como argumento.
   -  Si el estado **isFav** es **`false`**,
    entonces settea ese estado en true, y despacha la función **addFav** que recibiste por props, pasándole **props** como argumento.*/

   const handleFavorite =()=>{
     if(isFav){
      setIsfav(false);
      removeFav(id);
     }else{
      setIsfav(true);
      addFav({name,status,image,id,gender});
     }
   };
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsfav(true);
         }
      });
   }, [myFavorites]);




   return (
      <div className={style.cardContainer}>
          {onClose ?(
          <button className={style.button} onClick={()=>onClose(id)}>X</button>
          ):null}
             <div className={style.imageContainer}>

                 <img src={image}alt={name} className={style.cardimg}/>
                <div className={style.fav}>
                 {
                    isFav ? (
                   <button onClick={handleFavorite}>❤️</button>
                      ) : (
                   <button onClick={handleFavorite}>🤍</button>
                    )
                    }
               </div>
             </div> 

             <div className={style.atributes}>
                 <Link to={`/detail/${id}`}>
                    <h3 className={style.name}>{name}</h3>
                 </Link>
                 <p>{status}</p>
                 

             </div>

            

         {/*<h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>*/}
         
      </div>
   );
}

const mapDispatchToProps=(dispatch)=>{
   return{
      addFav:(character)=>{ dispatch(addFav(character))},

      removeFav:(id)=>{ dispatch(removeFav(id))}

   }
}

const mapStateToProps=(state)=>{
   return{
      myFavorites: state.myFavorites
   }

}

 export default connect(mapStateToProps,mapDispatchToProps)(Card);



    

