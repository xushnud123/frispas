import React from 'react';
import '../sass/NewsOne.scss';

function News() {
    return (
        <div>
            <div className="news">
                <div className="newsOne">
                    <div>
                        <h1>News, events and insights for you</h1>
                    </div>
                    <div className="more">
                        <p>See more</p>
                        <img src="/img/onga.svg" alt="rasm topilmadi"/>
                    </div>
                </div>
                <div className="newsTwo">
                    <div className="google">
                        <div className="sunday">
                            <img src="/img/sunday.png" alt="rasm topilmadi" />
                        </div>
                        <div className="comment">
                            <h1>Google I / O 2020 <br/>news update</h1>
                            <p>Out of concern for the health 
                            and safety of our developers, employees, 
                            and local communities — and in line with recent 
                            ...</p>
                            <div className="rar">
                                <div className="rar_bir">
                                    <img src="/img/sundaypichai.svg" alt="rasm topilmaadi"/>
                                </div>
                                <div className="rar_ikki">
                                    <h1>Sundar Pichai</h1>
                                    <p>CEO art Google</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mini">
                        <div className="mini_one">
                            <img src="/img/komp.png" alt="rasm topilmaadi"/>
                        </div>
                        <div className="mini_two">
                            <h1>Minimal workspace for inspirations</h1>
                            <p>Anthony Masional</p>
                        </div>
                    </div>
                    <div className="mini">
                        <div className="mini_one">
                            <img src="/img/oyla.png" alt="rasm topilmaadi"/>
                        </div>
                        <div className="mini_two">
                            <h1>Does productivity increase 
                                when working remotely?
                            </h1>
                            <p>Frank Martin</p>
                        </div>
                    </div>
                    <div className="mini">
                        <div className="mini_one">
                            <img src="/img/gurux.png" alt="rasm topilmaadi"/>
                        </div>
                        <div className="mini_two">
                            <h1>Morning routine to boost your mood</h1>
                            <p>Elizabth Swan</p>
                        </div>
                    </div>
                    <div className="mini">
                        <div className="mini_one">
                            <img src="/img/uy.png" alt="rasm topilmaadi"/>
                        </div>
                        <div className="mini_two">
                            <h1>5+ tips to find comfortable co-working space</h1>
                            <p>Mykola Ilschenko</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
