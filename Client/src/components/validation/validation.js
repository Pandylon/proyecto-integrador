

 const validation =(form)=>{
    const errors={}
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email))
    { errors.email= "El email no es inválido"
      
    }
     if(!form.email){
        errors.email="Este campo no puede estar vacío"
     }
     if (form.email.length >35){
        errors.email="El email no puede tener más de 35 caracteres"
     }
    
     if( !/.*d+.*/.test(form.password)){
        errors.password="La contraseña debe tener al menos un numero"
     }
     if(!form.password){
        errors.password="You have entered an invalid password!"
     }if(form.password.length < 6 || form.password.length >10  ){
        errors.password="La contraseña debe contener entre 6 y 10 caracteres!"
     }

     return errors
 }


 export default validation;