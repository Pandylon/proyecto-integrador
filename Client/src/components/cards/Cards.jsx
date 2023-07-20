import Card from '../card/Card';
import style from './cards.module.css'

export default function Cards({characters,onClose}) {

   return <div className={style.cardList }>
     {
      characters?.map((element)=>
      <Card
            key={element.id}
            id={element.id}
            name={element.name}
            status={element.status}
            species={element.species}
            gender={element.gender}
            origin={element.origin.name}
            image={element.image}
            onClose={onClose}
      />)
     }
   </div>;
}
