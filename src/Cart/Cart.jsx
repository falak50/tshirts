import './Cart.css'
const Cart = ({cart,handleRoveFromCar}) => {
     console.log(cart.length);
     let m;
     if(cart.length===0){
        m='please add some products' 
     }else{
        m='Thanks from adding products'
     }
    return (
        <div className="cartin">
            <h2>Oder summary : {cart.length} </h2>
            {cart.length > 2 ? <span>You can confirm the order</span> : <span>At least buy plant products </span>}
            <br />
            {m}
             {
                cart.map(tshirt => <p key={tshirt._id}>
                     {tshirt.name}
                    <button className="bnt"
                    onClick={()=>handleRoveFromCar(tshirt._id)}>X</button>
                </p>)
             }
             {
                cart.length===7 && <h4>No more products left to select</h4>
             }
              {
                cart.length===7 || <h4>Keep adding...</h4>
             }
        </div>
    );
};

export default Cart;

/**
 * CONDITIONAL RENDERING 
 * 1 IF US
 * 2 TERNARY : CONDITION ? 'FRO TRUE' : 'FALSE'
 * 4 logical and && -> if true then display
 * 5 logical or || if flase then dislay
 */