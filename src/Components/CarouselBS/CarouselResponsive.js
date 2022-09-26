import React from 'react'
import './carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";




function CarouselResponsive() {
    return (
        <div className='main-carousel'>


            <Carousel variant="dark">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block"
                        id='banner-img'
                        src='assets/carousel/1.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block"
                        src='/assets/carousel/2.jpg'

                        id="banner-img2"
                        alt="Second slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src='/assets/carousel/3.jpg'
                        id="banner-img3"
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block "
                        src='/assets/carousel/4.jpg'
                        id="banner-img3"
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src='/assets/carousel/5.jpg'
                        id="banner-img3"
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src='/assets/carousel/7.jpg'
                        id="banner-img3"
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src='/assets/carousel/6.jpg'
                        id="banner-img3"
                        alt="Third slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}
export default CarouselResponsive