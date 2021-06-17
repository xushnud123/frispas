import React from 'react';
import '../sass/WorkSpace.scss'

function Workspace() {
    return (
        <div>
            <div className="workspace">
                <div className="reference">
                    <div className="refOne">
                        <div className="son">
                            <img src="/img/rasm1.svg" alt="rasm topilmadi"/>
                        </div>
                        <div className="son">
                            <img src="/img/rasm2.svg" alt="rasm topilmadi"/>
                        </div>
                        <div className="son">
                            <img src="/img/rasm3.svg" alt="rasm topilmadi"/>
                        </div>
                    </div>
                    <div className="refOne">
                        <div className="son">
                            <img src="/img/rasm4.svg" alt="rasm topilmadi"/>
                        </div>
                        <div className="son">
                            <img src="/img/rasm5.svg" alt="rasm topilmadi"/>
                        </div>
                        <div className="son">
                            <img src="/img/rasm6.svg" alt="rasm topilmadi"/>
                        </div>
                    </div>
                </div>
                <div className="we">
                    <div className="word">
                        <h3>
                            Why Frispes
                        </h3>
                        <div className="wordOne"></div>
                    </div>
                    <h2>We revolutionize your <br/> 
                    workspace
                    </h2>
                    <p>
                    With a decade of insights 
                    and expertise, we're decided 
                    to reimagine co-working space, 
                    designed to help a new startup 
                    grow up and realize their ideas 
                    so they can give a positive 
                    impacts on many people
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Workspace
