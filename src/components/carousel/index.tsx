import { Carousel}  from "react-bootstrap";
import "./carousel.css";
import CarouselImage from "./carouselImage";

interface CarouselSlide {
  image?: string;
  style?: {};
  title: string;
  content: string;
}

interface PlumberCarouselProps {
  CarouselSlides: CarouselSlide[];
}

const PlumberCarousel: React.FC<PlumberCarouselProps> = ({
  CarouselSlides,
}) => {
  return (
    <Carousel fade >
      {CarouselSlides &&
        CarouselSlides.map((item,index) => (
          <Carousel.Item key={index}>
            <CarouselImage style={item.style} image={item.image}></CarouselImage>
            <Carousel.Caption>
              <h1>{item.title}</h1>
              <p>{item.content}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default PlumberCarousel;
