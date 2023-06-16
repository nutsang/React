import './Shop.css';
import { useState } from 'react';
const Item = (props) =>{
    return (<div onClick={()=>props.callback(props.id)}>
        <img src={props.img} width={200} height={200}/><br/>
        id: {props.id}<br/>
        Name: {props.name}<br/>
        Price: {props.price}<br/>
    </div>);
}

export default function Shop(){
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const handleClick = id=>{
        alert("Add success!");
        setCart([...cart, products[id]]);
        setTotal(total+products[id].price);
    }

    const ClearCart=()=>{
        setCart([]);
        setTotal(0);
    }
        const productsList = products.map(item=><Item callback={handleClick} {...item}/>);
        const carList=cart.map(item=><li>{item.id} {item.name} {item.price}</li>);
    return (<>
    <div className="grid-container">{productsList}</div>
    <h1>Cart <button onClick={()=>ClearCart()}>Clear</button></h1>
    <ol>{carList}</ol>
    <h1>Total {total}</h1>
    </>);
}