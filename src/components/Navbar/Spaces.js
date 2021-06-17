import React from 'react';
import '../sass/SpacesOne.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Spaces() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 960,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <div className="spaces">
                <div className="rar">
                    <h3>Our Spaces</h3>
                    <p>Our space is designed to give you a different 
                    experience<br/>when working with your team or personally
                    </p>
                </div>
                <Slider {...settings}>
                <div className="flesh">
                    <div className="zip1">
                    <img src="/img/img1.png" alt="rasm topilmadi"/>
                    </div>
                    <div className="zip2">
                    <h3>Working with team</h3>
                    </div>
                    <div className="post">
                        <h3>Check avaibility</h3>
                        <img src="/img/right.svg" alt="rasm topilmadi"/>
                    </div>
                    <div className="host">
                        <div>
                        <h4>Private Space</h4>
                        <p>Comfortable space, Full speed 
                        wifi, Free coffe & Snack 
                        and many more
                        </p>
                        </div>
                    </div>
                </div> 
                <div className="flesh">
                    <div className="zip1">
                    <img src="/img/img2.png" alt="rasm topilmadi"/>
                    </div>
                    <div className="zip2">
                    <h3>Working with team</h3>
                    </div>

                    <div className="post">
                        <h3>Check avaibility</h3>
                        <img src="/img/right.svg" alt="rasm topilmadi"/>
                    </div>
                    <div className="host">
                        <div>
                        <h4>Private Space</h4>
                        <p>Comfortable space, Full speed 
                        wifi, Free coffe & Snack 
                        and many more
                        </p>
                        </div>
                    </div>
                </div> 
                <div className="flesh">
                    <div className="zip1">
                    <img src="/img/img1.png" alt="rasm topilmadi"/>
                    </div>
                    <div className="zip2">
                    <h3>Working with team</h3>
                    </div>

                    <div className="post">
                        <h3>Check avaibility</h3>
                        <img src="/img/right.svg" alt="rasm topilmadi"/>
                    </div>
                    <div className="host">
                        <div>
                        <h4>Private Space</h4>
                        <p>Comfortable space, Full speed 
                        wifi, Free coffe & Snack 
                        and many more
                        </p>
                        </div>
                    </div>
                </div> 
                <div className="flesh">
                    <div className="zip1">
                    <img src="/img/img2.png" alt="rasm topilmadi"/>
                    </div>
                    <div className="zip2">
                    <h3>Working with team</h3>
                    </div>

                    <div className="post">
                        <h3>Check avaibility</h3>
                        <img src="/img/right.svg" alt="rasm topilmadi"/>
                    </div>
                    <div className="host">
                        <div>
                        <h4>Private Space</h4>
                        <p>Comfortable space, Full speed 
                        wifi, Free coffe & Snack 
                        and many more
                        </p>
                        </div>
                    </div>
                </div> 
                <div className="flesh">
                    <div className="zip1">
                    <img src="/img/img1.png" alt="rasm topilmadi"/>
                    </div>
                    <div className="zip2">
                    <h3>Working with team</h3>
                    </div>

                    <div className="post">
                        <h3>Check avaibility</h3>
                        <img src="/img/right.svg" alt="rasm topilmadi"/>
                    </div>
                    <div className="host">
                        <div>
                        <h4>Private Space</h4>
                        <p>Comfortable space, Full speed 
                        wifi, Free coffe & Snack 
                        and many more
                        </p>
                        </div>
                    </div>
                </div> 
                <div className="flesh">
                    <div className="zip1">
                    <img src="/img/img2.png" alt="rasm topilmadi"/>
                    </div>
                    <div className="zip2">
                    <h3>Working with team</h3>
                    </div>

                    <div className="post">
                        <h3>Check avaibility</h3>
                        <img src="/img/right.svg" alt="rasm topilmadi"/>
                    </div>
                    <div className="host">
                        <div>
                        <h4>Private Space</h4>
                        <p>Comfortable space, Full speed 
                        wifi, Free coffe & Snack 
                        and many more
                        </p>
                        </div>
                    </div>
                </div> 
                <div className="flesh">
                    <div className="zip1">
                    <img src="/img/img1.png" alt="rasm topilmadi"/>
                    </div>
                    <div className="zip2">
                    <h3>Working with team</h3>
                    </div>

                    <div className="post">
                        <h3>Check avaibility</h3>
                        <img src="/img/right.svg" alt="rasm topilmadi"/>
                    </div>
                    <div className="host">
                        <div>
                        <h4>Private Space</h4>
                        <p>Comfortable space, Full speed 
                        wifi, Free coffe & Snack 
                        and many more
                        </p>
                        </div>
                    </div>
                </div> 
                <div className="flesh">
                    <div className="zip1">
                    <img src="/img/img2.png" alt="rasm topilmadi"/>
                    </div>
                    <div className="zip2">
                    <h3>Working with team</h3>
                    </div>

                    <div className="post">
                        <h3>Check avaibility</h3>
                        <img src="/img/right.svg" alt="rasm topilmadi"/>
                    </div>
                    <div className="host">
                        <div>
                        <h4>Private Space</h4>
                        <p>Comfortable space, Full speed 
                        wifi, Free coffe & Snack 
                        and many more
                        </p>
                        </div>
                    </div>
                </div> 
            </Slider>
            </div>
        </div>
    )
}

export default Spaces
