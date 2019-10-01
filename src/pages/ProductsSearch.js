import React from 'react';
import { VerticalProductComponent } from '../components/Product';
import {
    Container
} from 'reactstrap';

export default function SearchProducts() {

    const productsSearch = JSON.parse(localStorage.getItem("productsSearch"))
    const products = Array.isArray(productsSearch) ? productsSearch : [productsSearch];
   

    return (
        <>
            <Container>
                <br/>
                <VerticalProductComponent  products={products} col={3} maxwidth={1} />
            </Container>
        </>
    )
}



