import { useState } from 'react';

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const sliderStyles = {
        height: '100%',
        position: 'relative',
    };

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    };

    const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: 'rgb(255, 204, 0)',
        zIndex: 1,
        cursor: 'pointer',
    };

    const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: 'rgb(255, 204, 0)',
        zIndex: 1,
        cursor: 'pointer',
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
    };

    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '20px',
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className="imageslider" style={ sliderStyles }>
            <div className="leftarrow" style={leftArrowStyles} onClick={goToPrevious}>←</div>
            <div className="rightarrow" style={rightArrowStyles} onClick={goToNext}>→</div>
            <div className="image" style={ slideStyles }></div>
            <div style={dotsContainerStyles} className="slide-option">{slides.map((slide, slideIndex) => (
                <div style={dotStyles} key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                    ○
                </div>
            ))}</div>
        </div>
    );
};
export default ImageSlider;