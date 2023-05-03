import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom'; 

const Slider = () => {
    return(
        <Carousel slide={1000}>
        <Carousel.Item>
          <img width={'100%'} height={600}
            className="d-block w-100"
            src="./img/first.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>

            <Link exact to={'/form'}>
              <Button variant="primary">Обратная связь</Button>
            </Link>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={'100%'} height={600}
            className="d-block w-100"
            src="./img/second.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={'100%'} height={600}
            className="d-block w-100"
            src="./img/three.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default Slider;