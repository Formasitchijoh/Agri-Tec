
import  React from 'react'
import  ReactDOM from 'react-dom';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage,useField, useFormik} from "formik";
import * as Yup from 'yup'
import '../Components/styleForm.css'
import eye from '../resources/eye.png'
import hideeye from '../resources/eye-1.png'
import cap from '../resources/banana.jpg'
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
const MyRadioBox = ({label, ...props}) => { 
    const [field, meta] = useField({...props, type:"radio"});
    return ( 
      <div role="group"  className='radio'
      aria-labelledby="my-radio-group">
    <label htmlFor={props.id || props.name} className='label'>
    <input className='radio-input' {...field} {...props}></input>
        {label}</label>
            {meta.touched && meta.error ? (<div className='error'>{meta.error}</div>):null}
        </div>
    )

}

const MyCheckbox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type:'checkbox'});

    return ( 
        <div> 
             <label className='checkbox'>
            <input type='checkbox' {...field} {...props}/>
                {children}
        </label>
        {meta.touched && meta.error ? (
            <div className='error'>{meta.error}</div>
        ) : null}
        </div>
        
    );
};



const Welcome = () =>{
    return (
        <>
        <div>
        <a style={{marginLeft:'14em', textDecoration:'none', fontWeight:'bold',}} href='#'> Sign Up to Agri-Tec</a>
        <h1 style={{marginLeft:'4em', marginTop:'1em' }}>Welcome  to<br/>  Agri-Tec</h1>
        </div>
     </>
       
    )
} 


//main Component
const SignUpPage = () => {  

    //defined states
    const [isShow, setisShow] = useState(false);
     const [initialValues, setinitialValues]  = useState({
        firstName:"",
        contact:"",
        email:"" ,
         password:'',
         confirmpassword:'',
         produce:'',
         age:"",
         sex:"",
        
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
        firstName:Yup.string() .max(15,"Must be 15 characters or less").required("Required"),
        contact:Yup.string().max(20,"Must be 20 words or less") .required('Required'),
        email:Yup.string().email("Inavlid email address").required("required"),
        password:Yup.string()
        .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password ahould contain at least one uppercase and lowercase character")
        .matches(/\d/, "Password should contain at least one number")
        .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character")
        .required('Required'),
        confirmpassword:Yup.string()
        .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password ahould contain at least one uppercase and lowercase character")
        .matches(/\d/, "Password should contain at least one number")
        .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character")
        .required('Required'),
        produce:Yup.string().required('Required'),
        age:Yup.string().max(5, 'Must be 5 characters').required('Required'),
        sex:Yup.string().max(5, 'Must be 5 characters').required('Required'),
    })




    return( 
        <div className='main'>
            <Menu pageName='SignUp'/>
            <Welcome /> 
      
        <div className='formik-container'> 
        <Formik className="formik" initialValues={initialValues}  onSubmit={onSubmit} validationSchema={validationSchema}>
        {(formik) => (
         <Form>
      <MyTextInput label=" Name" name="firstName" type="text" />
      <MyTextInput label="Contact" name="contact" type="text"  />    
      <MyTextInput label="Email Address" name="email" type="email" /> 
       <MyPasswordInput label='PassWord' name='password' type={isvisible} className="password" isvisible={isvisible} handleHidePassword={handleHidePassword} handleShowPassword={handleShowPassword}/>
       <MyPasswordInput label='ConfirmPassWord' name='confirmpassword' type={isvisible} className="password" isvisible={isvisible} handleHidePassword={handleHidePassword} handleShowPassword={handleShowPassword}/>
       <MyTextInput label="Produce" name='produce' type='text' />
       <MyTextInput label='Age' name='age' type='text' />
       <MyTextInput label='Sex' name='sex' type='text' />

       <div className='agreement'>
       <p className='have-account'>Already have an account?<Link to="/LoginPage">Login</Link></p>
          <MyCheckbox name="acceptedTerms">
             I accept the terms and conditions
          </MyCheckbox>
           </div> 
      <button type="submit" >Sign up to drive</button>
      
      {isShow ? ( <div className='main-modal'>
             <div>
                <p>FirstName: {initialValues.firstName}</p>
                <p>LastName: {initialValues.lastName}</p>
                <p>Email: {initialValues.email}</p>
                <p>PassWord: {initialValues.origin}</p>
                <p>Origin: {initialValues.inviteCode}</p>
                <p>inviteCode: {initialValues.password}</p>

                </div>
            <div className='modal'>
                <button type="reset" className='confirm' onClick={()=>
                {
                    formik.resetForm();
                    setisShow(false)
                }
                } >Confirm</button>
                <button className='Edit' onClick={()=> {
                    setisShow(false)
                }}>Edit</button>
            </div>
        </div>) : null }
    </Form> 
        )}
      </Formik>
         </div>
         </div>
        
       
     );
 };

 const ImagePage = () => {
    return(

        <div className='left-div'>
           <div className='opportunity'>
            <h1>Opportunity is <br/>everywhere</h1>
            <p>Make the most of your time on the road on<br/> the platform with the most of active riders</p>
           </div>
            <img src={cap} alt='capture' className='image'/>
    
        </div>
    )
 }

export default SignUpPage














