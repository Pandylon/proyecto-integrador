import { useSelector,useDispatch } from "react-redux"
import Card from "../card/Card"
import { filterCards, orderCards} from "../redux/actions"
import style from "../favorito/favorito.module.css"
import { useState } from "react"



const Favorite =()=>{
    const [aux,setAux]=useState(false)
    const favorite= useSelector(state =>state.myFavorites)
    const dispatch=useDispatch()
    
    const handleOrder =(event)=>{
        dispatch(orderCards(event.target.value))
        setAux(true);

    }
    const handleFilter =(event)=>{
        dispatch(filterCards(event.target.value))
    }

    return(
        <div className={style.cardContainer}>
                <select onChange={handleOrder }>
                    <option value="A">ascendente</option>
                    <option value="B">descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                    <option value="allCharacters">All characters</option>
                </select>
             <div className={style.favList}>
              {favorite?.map((element)=>
           <Card
           key={element.id}
           id={element.id}
           name={element.name}
           status={element.status}
           image={element.image}
           gender={element.gender}
           
      />)
     }</div>
        </div>
    )
}

export default Favorite