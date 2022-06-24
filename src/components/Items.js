import React, { useEffect, useRef, useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { addItem, sumItems } from '../redux/itemSlice';
import './Items.css';


function Items() {
    const [type,setType] =useState('');
    const [price,setPrice] =useState('');
    const [count,setCount] =useState('');
    
    const dispatch = useDispatch();

    const items = useSelector(state => state.items.items)

    
    useEffect(() =>{
        console.log(items);
    },[items])

    // const addItemm =  () =>{
    //     dispatch(addItem({id:items.length +1 , type , price , count}))
    //     dispatch(sumItems())
    //     setPrice('');
    //     setCount('');
    // }
    
  return (
    <div>
        <div className='Items'>
            <div className='category'>
            Category of Item : &nbsp; &nbsp;
            <input 
            type='radio' 
            name='item'
            id='Electronic'
            onClick={(e) =>{e.target.checked && setType(e.target.id)}}
            /> <label htmlFor="Electronic">Electronic</label>  

            <input 
            type='radio' 
            name='item'
            id='Food' 
            onClick={(e) =>{e.target.checked && setType(e.target.id)}}
            /> <label htmlFor="Food">Food</label> 

            <input 
            type='radio' 
            name='item' 
            id='Sports' 
            onClick={(e) =>{e.target.checked && setType(e.target.id)}}
            /> <label htmlFor="Sports">Sports</label> 
            
            <input 
            type='radio' 
            name='item' 
            id='Clothes'
            onClick={(e) =>{e.target.checked && setType(e.target.id)}}
            /> <label htmlFor="Clothes">Clothes</label> 
            
                <div className='price'>    
                    <input type='text' placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
                    <input type='text' placeholder='count' value={count} onChange={(e) => setCount(e.target.value)}/>

                    <button onClick={() =>{
                        if(type && price && count ){ 
                        dispatch(addItem({id:items.length +1 , type , price , count}));
                        setPrice('');
                        setCount('');
                        dispatch(sumItems())
                        }else{
                            alert("Please Fill All Product Data !!")
                        }
                    }}>Add Item</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Items