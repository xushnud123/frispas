import React from 'react';
import '../sass/FindOne.scss';
import { FiChevronDown } from 'react-icons/fi';

function Find() {
    return (
        <div>
            <div className="find">
                <div className="findone">
                    <h1>
                    Find the answers to anything 
                    <br/>you need in our Help Center
                    </h1>
                </div>
                <div className="find_grid">
                    <div className="card">
                        <h2>How do I know if a <br/>
                        space is available?</h2>
                        <div className="card-footer">
                            <span><FiChevronDown/></span>
                        </div>
                    </div>
                    <div className="card">
                        <h2>How do i book a <br/>space?</h2>
                        <div className="card-footer">
                            <span><FiChevronDown/></span>
                        </div>
                    </div>
                    <div className="card">
                        <h2>How do reviews <br/>work?</h2>
                        <div className="card-footer">
                            <span><FiChevronDown/></span>
                        </div>
                    </div>
                </div>
                <div className="find_footer">
                    <p>More questions</p>
                    <img src="/img/onga.svg" alt="rasm topilmadi"/>
                </div>
            </div>
        </div>
    )
}

export default Find
