import React from 'react';
import { Row, Col, Button, Table } from 'react-bootstrap';
import { FaEdit,FaTrash } from 'react-icons/fa';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { LinkContainer } from 'react-router-bootstrap';

const ProductListScreen = () => {
  // Replace 'isloading' with 'isLoading' and 'data:ProductList' with 'data: productList'
  const { data: productList, isLoading, error } = useGetProductsQuery();
  console.log(productList);

  const deleteProduct=(id)=>{
    console.log("delete " +id)
  }

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='d-flex justify-content-end'>
          <Button className='btn-sm'>
            <FaEdit /> Create Product
          </Button>
        </Col>
      </Row>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped hover responsive className='table-sm'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>CATEGORY</th>
                    <th>BRAND</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
                {productList.map((product)=>(
                   <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>
                    <td>
                        <LinkContainer to={`/admin/product/${product._id}/edit`}>
                            <Button variant='light' className='btn-sm mx-2'>
                                <FaEdit/>
                            </Button>
                        </LinkContainer>
                        <Button variant='danger' className='btn-sm' onClick={()=>deleteProduct(product._id)}>
                                <FaTrash/>
                            </Button>
                    </td>





                   </tr> 
                ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default ProductListScreen;
