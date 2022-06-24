import React, { useEffect, useRef, useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { clearItems } from '../redux/itemSlice'
import { addFatora, deleteFatora, updateFatora } from '../redux/personalSlice'
import './Personal.css'

function Personal() {
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [amount , setAmount] = useState('')
    const [isEdit , setIsEdit] = useState(false)
    const [id,setId] = useState(null)

    const fatoraRef = useRef();

    const dispatch = useDispatch();

    const products = useSelector(state => state.items.items)
    const Foatier = useSelector(state => state.fatora.Foatier)
    // const sum = useSelector(state => state.items.sum)

    let sum = 0;

    const clear = () =>{
        sum = 0 ;
    }
    useEffect(() => {
        console.log(Foatier);
    } , [Foatier])

    const addFatoraa = () =>{
        dispatch(addFatora({id:Foatier.length +1 , name , phone , address , amount , products }))
        setName('')
        setPhone('')
        setAddress('')
        setAmount('')
        dispatch(clearItems())   
    }

    const deleteFato = (id) =>{
        dispatch(deleteFatora(id))
    }
    const updateFato = (Fatora) =>{
        dispatch(updateFatora(Fatora))
    }

    // var sum = 0;
  return (
    <div>
        <div className='personal'>
            <input
            type='text'
            placeholder='name'
            value={name}
            onChange={(e) => {setName(e.target.value)}}
            />
            <input 
            type='text'
            placeholder='phone'
            value={phone}
            onChange={(e) => {setPhone(e.target.value)}} 
            />
            <br />
            <input 
            type='text' 
            placeholder='address'
            value={address} 
            onChange={(e) => {setAddress(e.target.value)}}
            />
            <input 
            type='text'
            placeholder='total Amount'
            value={amount}
            onChange={(e) => {setAmount(e.target.value)}}
            />
            <br />
            <button onClick={addFatoraa}>Add Fatora</button>
        </div>
        <div className='foatier'>
            {Foatier.map((product) => <div key={product.id} className='product'>
                <h2>{product.name}</h2>
                <p>{product.address}</p>
                <p>{product.phone}</p>
                <p>{product.products.map((element) =>{
                    sum +=parseInt(element.price);
                    return <div key={element.id}>{element.type} - {element.price} - {element.count}</div>
                })}</p>
                <p>Total Amount: {sum}</p>
                {clear()}
                <button onClick={() => {
                    setIsEdit(true)
                    setId(product.id)
                }}>Edit</button>
                <button onClick={() => deleteFato(product.id)}>Delete</button>
                <button onClick={() => window.print()} >Print Fatora</button> 
                {isEdit && id == product.id && <button onClick={() => updateFato({id : product.id ,name :product.name ,
                    phone : product.phone ,address:product.address , amount:product.amount , products })}>Update</button>}
            </div>)}
        </div>
    </div>
  )
}

export default Personal