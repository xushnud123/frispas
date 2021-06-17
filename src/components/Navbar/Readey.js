import React from 'react';
import '../sass/ReadeyOne.scss';


function Readey() {

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
            <div className="readey">
                <div className="readeyOne">
                    <div className="word">
                        <h3>
                        Became a member
                        </h3>
                        <div className="wordOne"></div>
                    </div>
                    <h1>
                    Ready to try different
                    <br/>work experience now?
                    </h1>
                    <p>Get the best working experience that you never 
                    feel before</p>
                    <button type="button" onClick={() => handleClick()}  className="batton">SIGN UP NOW</button>
                </div>
                <div className="readeyTwo">
                    <div className="zip">
                        <img src="/img/Pattern.svg" alt="rasm topilmadi" className="imgBx"/>
                        <div className="zipone">
                            <img src="/img/person.svg" alt="rasm topilmadi"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Readey;
