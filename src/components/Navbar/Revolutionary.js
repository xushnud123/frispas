import React , {useState} from 'react';
import DatePicker from "react-datepicker";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-datepicker/dist/react-datepicker.css";
import '../sass/RevoluTionary.scss';


function Revolutionary() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [autor, setAutor] = useState('Vobkent , Buxoro');
    const [privateOne, setPrivate] = useState('Private Office');
    const [startDate, setStartDate] = useState(new Date());


    const handleClick = () => {
    }

    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click',function(e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);

            setTimeout(() => {
                ripples.remove()
            },1000);
        })
    })

    return (
        <div>
            <div className="carausel">
                <div className="inputOne">
                    <div className="estimate">
                    <h2>Find your space now</h2>
                    <div className="rar">
                        <label>Location</label>
                        <select value={autor} onChange={(e) => setAutor(e.target.value)}>
                            <option value="buxoro">Vobkent , Buxoro</option>
                            <option value="jizzah">Paxtakor , Jizzah</option>
                            <option value="paxtaobod">Paxtaobod , Andijon</option>
                            <option value="kattaqo`rg`on">Kattaqo`rg`on , Samarqand</option>
                        </select>
                    </div>
                    <div className="rar">
                        <label>Type</label>
                        <select value={privateOne} onChange={(e) => setPrivate(e.target.value)}>
                            <option value="privateoffice">Private Office</option>
                            <option value="government">Government Office</option>
                        </select>
                    </div>
                    <div className="rar">
                        <label>Date</label>
                        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                    </div>
                    <button type="button" onClick={() => handleClick()} className="find">
                    FIND MY SPACE
                    </button>
                    </div>
                </div>
            <Slider {...settings}>
                <div className="flesh">
                    <img src="/img/home.png" alt="rasm topilmadi"/>
                </div> 
                <div className="flesh">
                    <img src="/img/home.png" alt="rasm topilmadi"/>
                </div>
                <div className="flesh">
                    <img src="/img/home.png" alt="rasm topilmadi"/>
                </div>
                <div className="flesh">
                    <img src="/img/home.png" alt="rasm topilmadi"/>
                </div>
                <div className="flesh">
                    <img src="/img/home.png" alt="rasm topilmadi"/>
                </div>
                <div className="flesh">
                    <img src="/img/home.png" alt="rasm topilmadi"/>
                </div>
            </Slider>
            </div>
        </div>
    )
}

export default Revolutionary
