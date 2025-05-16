interface carouselProps {
    image?: string;
    style?: {};
}

const CarouselImage = ({image,style = {}} : carouselProps) =>{

    const styleC = image ? {
        backgroundImage: `url(${image})`,
        ...style 
      } : {};
    return (
        <div className="carousel-image" style={styleC}>
        </div>
    )
}

export default CarouselImage;