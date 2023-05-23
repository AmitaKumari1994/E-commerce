import React from 'react'
import products from '../products'
import Rating from '../components/Rating'
import HomeScreen from '../screens/HomeScreen';
import { useParams } from 'react-router-dom'
import { OpenLinksButton, ImageLoading, buttonStyling } from '../Assets/Wrappers/ProductScreen'
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'

const ProductScreen = ({ match }) => {

  //match.params.id since we have added /:id in the app.js screen
  const { id } = useParams();
  const product = products.find((item) => item._id === id)
  return (
    <>
      <OpenLinksButton>
        <Link to="/" element={<HomeScreen />}> GO BACK </Link>
      </OpenLinksButton>



      <Row>
        <Col md={6}>
          <Image style={{ margin: `15px` }} src={product.image} alt={product.name} fluid></Image>
        </Col>

        <Col md={3}>
          <ListGroup variant='flush' >
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>

            <ListGroupItem>
              <Rating
                stars={product.rating}
                reviews={`${product.numReviews} reviews`}
              />
            </ListGroupItem>

            <ListGroupItem>
              Price: ${product.price}
            </ListGroupItem>

            <ListGroupItem>
              Description: ${product.description}
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col md={3}>
          <ListGroup as='ul'>


            <ListGroupItem>
              <Row>
                <Col>
                  Price:
                </Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem>
              <Row>
                <Col>
                  Stock:
                </Col>
                <Col>
                  {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                </Col>
              </Row>
            </ListGroupItem>


            
              <ListGroupItem>
                <Button className='btn-block' type='button' >Add to Cart</Button>
              </ListGroupItem>

            


          </ListGroup>
        </Col>
      </Row>


    </>

  )
}

export default ProductScreen
