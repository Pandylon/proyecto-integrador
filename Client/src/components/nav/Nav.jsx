import SearchBar from '../search/SearchBar' 
import {NavLink} from 'react-router-dom'
import style from './nav.module.css'

const Nav =({onSearch,random})=>{
    return(
        <nav className={style.navBar} >
        <SearchBar onSearch={onSearch}/>
        <button onClick={random} className={style.random}>Random</button>
        
        <div className={style.navItems}>
        <NavLink to='/'>Logout</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/favorite'>Favorite</NavLink>
        </div>
        </nav>
    )

}

export default Nav;