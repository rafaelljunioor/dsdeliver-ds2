import { useEffect, useState} from 'react';
import { fetchProducts } from '../api';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import OrderLocation from './OrderLocation';

import './styles.css';
import { Product,OrderLocationData } from './Types';

function Orders (){

    const [products,setProducts] = useState<Product[]>([])
    const [orderLocation,setOrderLocation] = useState<OrderLocationData>();

    useEffect(()=>{
       fetchProducts()
       .then(response=>setProducts(response.data))
       .catch(error => console.log(error));

       
    },[]); 

    return (
        <nav className="orders-container">
            <StepsHeader/>
            <ProductsList products = {products}/>
            <OrderLocation onChangeLocation={location =>setOrderLocation(location)}/>
        </nav>
    )

}

export default Orders;