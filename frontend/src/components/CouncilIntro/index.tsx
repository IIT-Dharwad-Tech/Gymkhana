import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap';
// import logo from '../../assets/interiitsmeet.jpg';

interface IProps {
  // images: {
  //   image1: string,
  //   title1: string,
  //   caption1: string,
  //   image2: string,
  //   title2: string,
  //   caption2: string,
  //   image3: string,
  //   title3: string,
  //   caption3: string,
  // }
}

const councilInfo = {
  about: ""
}


const CouncilIntro = (prop: IProps) => {

  // var image1 = prop.images.image1
  return (

    <div >
      {/* <Carousel fade>
        <Carousel.Item interval={100}>
          <img
            className="d-block w-100"
            // `url(${require(`../../assets/logoc.jpg`)})`
            src={prop.images.image1}
            alt={prop.images.caption1}
            style={{ height: '600px' }}
          />
          <Carousel.Caption>
            <h3>{prop.images.title1}</h3>
            <p>{prop.images.caption1}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={prop.images.image2}
            alt={prop.images.caption2}
            style={{ height: '600px' }}
          />

          <Carousel.Caption>
            <h3>{prop.images.title2}</h3>
            <p>{prop.images.caption2}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={prop.images.image3}
            alt={prop.images.caption3}
            style={{ height: '600px' }}
          />

          <Carousel.Caption>
            <h3>{prop.images.title3}</h3>
            <p>{prop.images.caption3}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </div>
  )
}

export default CouncilIntro