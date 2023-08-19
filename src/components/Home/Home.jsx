import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import Cart from "../../Cart/Cart";
import './Home.css'
import { useState } from "react";
import toast from 'react-hot-toast';
const Home = () => {
    const tshirts =useLoaderData();
    const [cart,setCart] = useState([]);
    const handleAddtocart = tshirt =>{
        const exists = cart.find(ts => ts._id==tshirt._id) 
        if(exists){
            toast('You have already added this tshirt')
        }
        else {
            const newCart = [...cart,tshirt]
            setCart(newCart);
        }
 
    }
    const handleRoveFromCart = id => {
      const reamining = cart.filter(tshirt => tshirt._id!==id);
      setCart(reamining);
    }
    return (
        <div className="home-container">
            
         <div className="t-shirt-container">
         {
               tshirts.map(tshtir =>  <TShirt
                key={tshtir._id}
                tshtir={tshtir}
                handleAddtocart={handleAddtocart}
                ></TShirt>) 
          }
         </div>
         <div className="cart-container">
            <Cart 
            cart={cart}
            handleRoveFromCar={handleRoveFromCart}
            ></Cart>
         </div>
        </div>
    );
};

export default Home;