import React from 'react';
import './Preloader.css';

export default function Preloader() {
    return (
        <div className="preloader">
            <div className="preloader__container">
                <span className="preloader__round">
                    <span className="preloader__text">Ещё</span>
                </span>
            </div>
        </div>
    )
};
