
import  React from 'react'
import  ReactDOM from 'react-dom';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage,useField, useFormik} from "formik";
import * as Yup from 'yup'
import '../Components/styleLogin.css'
import eye from '../resources/eye.png'
import hideeye from '../resources/eye-1.png'
import { Link } from 'react-router-dom';
import Menu from '../Components/Menu';
const MyTextInput = ({label, setradioInput,  ...props}) =>{
    
    const [field, meta] = useField(props);
    return (
        <div className='container'>
        <label htmlFor={props.id || props.name} className='label'>{label}</label>
        <input className='text-input' {...field} {...props}/>
        {meta.touched && meta.error ?
         (<div className='error'>{meta.error}</div>):null}

        </div>
    );
};
const MyPasswordInput = ({label, isvisible, handleHidePassword,handleShowPassword, ...props}) =>{
    
    const [field, meta] = useField(props);
    return (
        <div className='container'>
        <label htmlFor={props.id || props.name} className='label'>{label}</label>
        <input className='text-input' {...field} {...props}/>
       
        {isvisible ==="password"?(
            // <span className='pwd-eye-hide'>
                <img  src={hideeye}  onClick={handleHidePassword} className='pwd-eye-hide' alt=""/>
        ): (
                <img src={eye} alt=""  className='pwd-eye-show' onClick={handleShowPassword}/>
        )}
        {meta.touched && meta.error ?
         (<div className='error'>{meta.error}</div>):null}

        </div>
    );
};




const Welcome = () =>{
    return (
        <>
        <div>
        <a style={{marginLeft:'14em', textDecoration:'none', fontWeight:'bold', color:'black'}} href='#'> SignUp to Agri-Tec</a>
        <h1 style={{marginLeft:'4em', marginTop:'4em' }}>Login</h1>
        </div>
     </>
       
    )
} 

const ButtonComponent = () => { 
    <div style={{marginTop:'5em', width:'1em', height:'0.5em'}}>
      <button >Login</button>
    </div>
    
}

//main Component
const LoginPage = () => {  

    //defined states
    const [isShow, setisShow] = useState(false);
     const [initialValues, setinitialValues]  = useState({
        
        email:"" ,
         password:'',
        
      });
const [isvisible, setisvisible] = useState("password") 


const handleHidePassword =() =>{ 
    setisvisible("text")
}
const handleShowPassword =() => {
    setisvisible("password")

}

      //Formik methods 
const onSubmit = (values) => { 
    setisShow(true)
    setinitialValues(values)
}
const validationSchema =
    Yup.object({
       
        email:Yup.string().email("Inavlid email address").required("required"),
        password:Yup.string()
        .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password ahould contain at least one uppercase and lowercase character")
        .matches(/\d/, "Password should contain at least one number")
        .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character")
        .required('Required'),
      
    })

    return( 
        <div className='login'>
            <Menu pageName='Login'/>
            <Welcome /> 
      
        <div className='formik-container'> 
        <Formik className="formik" initialValues={initialValues}  onSubmit={onSubmit} validationSchema={validationSchema}>
        {(formik) => (
         <Form>
       
      <MyTextInput label="Email Address" name="email" type="email" /> 
       <MyPasswordInput label='PassWord' name='password' type={isvisible} className="password" isvisible={isvisible} handleHidePassword={handleHidePassword} handleShowPassword={handleShowPassword}/>
       <p className='have-account'>Already have an account?<Link to="/">Sign Up </Link></p>
       <button  style={{marginTop:'3em',  marginLeft:'6em',width:'8em', height:'3em', color:'black', fontSize:'0.8em', fontWeight:'40em'}}>Login</button>
    </Form> 
    
        )}

        
      </Formik>
         </div>
         </div>
        
       
     );
 };


export default LoginPage














