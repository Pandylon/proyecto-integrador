import './App.css';
import Nav from './components/nav/Nav';
import Cards from './components/cards/Cards'
import { useState, useEffect } from 'react';
import {Routes,Route, useLocation,useNavigate} from 'react-router-dom';
import axios from 'axios';
import About from './components/about/About';
import Detail from './components/detail/Detail'
import Form from './components/form/Form';
import Error from './components/error-404/Error'
import Favorite from './components/favorito/Favorite';



/*const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};*/
function App() {
   const location=useLocation();
   const navigate= useNavigate();
 
   const [characters,setCharacters]=useState([]);
   const [access,setAcces]=useState(false)
   const username="pp@gmail.com";
   const password= "123asd";

   const login=(form)=>{
 if(username === form.email && password === form.password){
    setAcces(true)
    navigate('/home')
 }

}

   useEffect(()=>{
      !access && navigate('/') 
   },[access])

   const onSearch =(id)=>{
      //setCharacters([...characters,example])
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      
      .then(({ data }) => {
         if (data.name) {
            let exist=characters.find((ch)=>ch.id === data.id)
            if(exist){
              alert ("ya existe")
            }
            else{
      
              setCharacters((oldChars) => [...oldChars, data]);
            }
            
          } else {
             window.alert('¡No hay personajes con este ID!');
          }
      });
     
   }

   const onClose=(id)=>{
      const characterFilter=characters.filter(character =>
         character.id !== Number(id))

         setCharacters(characterFilter)

   }


   function randomHandler() {
   

      let haveIt = [];
      //Generate random number
      let random = (Math.random() * 826).toFixed();
  
      //Coerce to number by boxing
      random = Number(random);
  
      if (!haveIt.includes(random)) {
        haveIt.push(random);
        fetch(`https://rickandmortyapi.com/api/character/${random}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          });
      } else {
        console.log("Ya agregaste todos los personajes");
        return false;
      }
    }





   return (
      <div className='App' style={{padding:'25px'}}>
         { location.pathname !=='/'&& <Nav onSearch={onSearch}  random={randomHandler}/>
         }
          
        <Routes>
         <Route path='/'element={<Form login={login}/>}></Route>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}  />}></Route>
         <Route path='/about'element={<About/>}></Route>
         <Route path='/detail/:id' element={<Detail/>}></Route>
         <Route path='/favorite' element={<Favorite/>}></Route>
         <Route path='*' element={<Error/>}></Route>
        </Routes>
      </div>
   );
}

export default App;
