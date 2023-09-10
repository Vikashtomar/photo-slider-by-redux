 import React, { useEffect } from 'react'
 import {useDispatch,useSelector} from 'react-redux'

 import './App.css'
 import axios from 'axios'
 import { setProductData,setnextProduct, setPrevious } from './Slider'


 function App() {

  const dispatch = useDispatch();
  const products = useSelector((state)=>  state.product.products)
  const currentIndex = useSelector((state)=>state.product.currentIndex);

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
      console.log(res.data)
      dispatch(setProductData(res.data));      
    })
  },[dispatch])

  console.log(products)

  function handlenext()
  {
    dispatch(setnextProduct())
  }
  
  function handlePrevious()
  {
    dispatch(setPrevious())
  }

   return (
     <div>
      <div className="box">
              
        <img src={products[currentIndex].image} alt="mypic" /> 

        <h3>{products[currentIndex].title}</h3>     
      </div>
      
      <button onClick={handlePrevious} >Previous</button>
      <br />
      <button  onClick={handlenext}>Next</button>
     </div>
   )
 }
 
 export default App