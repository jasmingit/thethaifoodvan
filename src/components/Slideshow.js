import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Slideshow = () => {
    const images = [
        "https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/300642235_1230066464222752_2744210694058289704_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=KxIWBnhO4ToAX_wkPcT&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfCckh_IUpJ2KQlpgKsBknFgRJ-_zmfRF_o3aypvp-Tiyg&oe=6381859C",
        "https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/222628287_973492233213511_2635685708643861088_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=wxC4WpwZQGUAX_bJXaP&tn=nhF4PrzY5BcjBWSo&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfC737n7O9wBfhW6BVZiTUoz-OJr7CFlPCxK4oCVyFiJ4w&oe=6381EB14",
        "https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/300167878_1224793848083347_7401809603282697864_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=hShr5Qsj6kkAX--0V6X&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfD5beK1qQyCd0Qc_YlZFSkC2gxDvkR00hBnD6KblKdjAQ&oe=6381E651",
    ];

    return (
        <Slide autoplay={true} className="slideshow">
                <div className="classname">
                    <img className="slideshow-image" src={images[0]} alt="The Thai Food Van Trailer in Colne surrounded by flowers."/>
                </div>
                <div className="classname">
                    <img className="slideshow-image" src={images[1]} alt="The Thai Food Van Trailer in the Peak District with fields of sheep behind."/>
                </div>
                <div className="classname">
                    <img className="slideshow-image" src={images[2]} alt="Chef holding Thai Green Curry with rice with our The Thai Food Van apron."/>
                </div>
        </Slide>
    );
};

export default Slideshow;