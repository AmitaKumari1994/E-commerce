import React from 'react'
import products from '../products.js'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'


const HomeScreen = () => {
  return (

    <>
      <h1 className='text-success text-center'>PRODUCTS</h1>
     
        <Row>
          {products.map((product,{_id})=>(
            <Col sm={12} md={6} lg={4} xl={3}>
             <Product key={_id} product={product}/>
            </Col>
            ))}
        </Row>
    
          

    </>

  )
}

export default HomeScreen
