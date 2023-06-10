import React, { useState }  from 'react'
import '../style.css'
import SelectDropDown from '../Components/SelectDropDown'
import Menu from '../Components/Menu'
import garri from '../resources/egusi.jpg'
import selectItems from '../Components/datastore'
import productArray from '../data/productData'
const ProductCategory = [
    {
      value: 1,
      text: 'Food Stock',
  
    },
    {
      value: 2,
      text: 'Cash Crop',
   
    },
    {
      value: 3,
      text: 'Dairy Food',
   
    },
    {
      value: 4,
      text: 'LiveStock',
   
    }
  ]


  const InputFieldWithLabel = (props) => {
    return (
      <div className='inputContainer'>
        <label className='label'> {props.label} </label>
           <input
          value={props.itemValue}
           onChange={props.handleInputChange}
            className='input'
            type="text"
            name={props.name}
            ></input>
            {/* <p>{props.itemValue}</p> */}
        
      </div>
    )
  }
  function MyComponent() {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <div>
        {/* <input type="text" value={inputValue} onChange={handleInputChange} /> */}
        {/* <p>The input value is: {inputValue}</p> */}
        
      <InputFieldWithLabel label={'Hello'} value={inputValue} handleInputChange={handleInputChange} />
      <button onClick={()=> alert(inputValue)}>Click to Submit the form</button>
      
      </div>
    );
  }
  function MyComponents() {
    const [formData, setFormData] = useState({
      name: '',
      email: ''
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
      alert(event.target.value);
      console.log(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
     alert(formData.name + formData.email);
      // Do something with the form data, such as sending it to a server
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      
      </form>
    );
  }


const UploadProductPage = () => {  
const [product, setproduct] = useState({category:'',name:'', price:'', quantity:'', location:''})
const [selectedOption, setselectedOption] = useState(null)

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setproduct({ ...product, [name]: value });
 
};

const handleSubmit = (event) => {
  event.preventDefault();
 console.log(product.name + product.price);

  // Do something with the form data, such as sending it to a server
};
  
  return (
    <div className='uploadproduct-container'>
         <Menu pageName='Add Product'/>
         {/* <h1 style={{marginLeft:'1em', fontSize:'3em'}}>
          Add Product
         </h1> */}

         {/* <MyComponents/> */}
         <form className='addproduct-container' onSubmit={handleSubmit}>
          <div className='inputContainer'>
          <label className='label'>
              Select Product Category
              </label>
            <SelectDropDown  selectItems={productArray} selectedOption={selectedOption} setselectedOption={setselectedOption} />
          </div>
          <InputFieldWithLabel itemValue={product.name} name='name' handleInputChange={handleInputChange} label={"Product-Name"}/>
          <InputFieldWithLabel itemValue={product.quantity} name='quantity' handleInputChange={handleInputChange}  label={"Quantity"}/>
          <InputFieldWithLabel itemValue={product.price} name="price" handleInputChange={handleInputChange} label={"Price"}/>
          <InputFieldWithLabel itemValue={product.location} name='location'handleInputChange={handleInputChange}  label={"Location"}/>
          <div style={{marginTop:'1em', marginLeft:'0.2em', width:'100%', height:'12em'}}>
          <label className='label'>
          Select Image
           </label>
          <img src={garri} alt='' style={{ width:'90%', marginTop:'0.5em', marginLeft:'0.2em', borderRadius:'0.5em', height:'100%'}}/>
      </div> 
           
           <button style={{marginTop:'6em',  marginLeft:'5em',width:'8em', height:'3em', color:'black', fontSize:'0.8em', fontWeight:'40em', backgroundColor:'#4c8352'}} onClick={()=> alert(product.name + " " + product.price + " "  + ""  + selectItems[selectedOption.value].text + " " + selectItems[selectedOption.value].value)} type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default UploadProductPage