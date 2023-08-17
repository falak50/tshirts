import { useLoaderData } from "react-router-dom";


const Home = () => {
    const tshirts =useLoaderData();
    return (
        <div>
           <h1>this is homefsf {tshirts.length}</h1> 
        </div>
    );
};

export default Home;