
import './Tshirt.css'
const TShirt = ({tshtir,handleAddtocart}) => {
    const {picture,name,price} = tshtir ;
    // console.log(tshtir);
    // console.log(tshtir);
    return (
        <div className="t-shirt">
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>${price}</p>
            <button onClick={()=>handleAddtocart(tshtir)} className='button'>Buy Now</button>
        </div>
    );
};

export default TShirt;