import style from './form.module.css'
import { useState } from 'react';
import validation from '../validation/validation';
import logo from '../../assets/scanner.jpg';


const Form =({login})=>{
   const [errors, setErrors]= useState({})
   const [form,setForm]=useState({
                                  email:"",
                                  password:""
                                             })

 const handleChange=(event)=>{
  /*if(event.target.name === "email"){
    setForm({...form,email:event.target.value});
  }
  if(event.target.name === "password"){
    setForm({...form,password:event.target.value});
  }*/
  const property= event.target.name;
  const value=event.target.value;
   setForm({...form,[property]:value})

   setErrors(validation({
    ...form,
    [event.target.name]:event.target.value}
   ))
 }
 const submitHander =(event)=>{

   event.preventDefault();//para que no recargue la pag solo en el evento submit porque submit te recarga la pag
  login(form)
 }

    return(
        <div className={style.conteiner}>
          <form className= {style.form} onSubmit={submitHander} >
              <h1 className={style.title}>Rick and Morty</h1>
              <img src={logo} alt="" />
            <div className={style.inputContainer}>
              <label htmlFor="email" className={style.label}>Email:</label>
                <input
                 className={style.input}
                  type="text"
                   name="email"
                   value={form.email}
                   onChange={handleChange}

                   ></input>
                   {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
                   </div>
              <div className={style.inputContainer}>
                    <label htmlFor="password" className={style.label}>Password:</label>
                <input
                  className={style.input}
                  type="text"
                   name="password"
                   value={form.password}
                   onChange={handleChange}
                   ></input>
                   {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
                   </div>
                   <button type='submit'className={style.submitBtn} >Login</button>
          </form>

        </div>
    )
}

export default Form;