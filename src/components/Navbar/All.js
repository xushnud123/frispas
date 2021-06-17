import React from 'react';
import Slider from "react-slick";
import '../sass/AllLinear.scss';

function All() {
    // var foo = {
    //     bar: "baz",
    //     bar: "qux"
    // };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        // autoplay: true,
        // speed: 2000,
        // autoplaySpeed: 2000,
        // cssEase: "linear"
    };
    return (
        <div>
            <div className="all">
                <div className="rar">  
                    <p>Our Spaces</p>
                    <h3>
                    All facilities are designed to <br/>
                    meet all your needs
                    </h3>
                </div>
                <div className="doc">
                <Slider {...settings}>
                    <div className="tel">
                        <h3>Spacious parking area</h3>
                    </div>
                    <div className="tel">
                        <h3>Comfortable spaces</h3>
                    </div>
                    <div className="tel">
                        <h3>Cozy cafe</h3>
                    </div>
                    <div className="tel">
                        <h3>Child playground</h3>
                    </div>
                    <div className="tel">
                        <h3>Outdoor spaces</h3>
                    </div>
                    <div className="tel">
                        <h3>Spacious parking area</h3>
                    </div>
                </Slider>
                    <div className="images">
                        <img src="/img/vertical.svg" alt="rasm topilmadi"/>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default All
