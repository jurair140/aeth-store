import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../allApi';
import { Col, Row } from 'react-bootstrap';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
    };
    loadProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className='container mt-5'>
        <Row>
            <Col>
            <img src={product.image} alt={product.title}  className="img-fluid h-75" />
            </Col>
            <Col className='d-flex justify-content-center m-5'>
                <div>
                    <h1 m-5>{product.title}</h1>
                    <h2 className='mb-5'>${product.price}</h2>
                    <p>{product.description}</p>
                </div>
            </Col>
        </Row>

    </div>
   
  );
}

export default ProductDetail;




