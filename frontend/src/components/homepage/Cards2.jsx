import React from 'react';
import kay from './kay.png';
import maybelline from './maybelline.png';
import nykaac from './nykaac.png';
import nykaac2 from './nykaac2.png';
import loreal from './loreal.png';
import bluma from './bluma.png';
import './Cards2.css';

export default function Cards2() {
  return (
    <>
    <div className="block">
        <div className="items">
            <a href="">
                <img src={bluma} alt="bluma" />
            </a>
        </div>
        <div className="items">
            <a href="">
                <img src={nykaac} alt="nykaac" />
            </a>
        </div>
        <div className="items">
            <a href="">
                <img src={maybelline} alt="maybelline" />
            </a>
        </div>
        <div className="items">
            <a href="">
                <img src={nykaac2} alt="nykaac2" />
            </a>
        </div>
        <div className="items">
            <a href="">
                <img src={loreal} alt="loreal" />
            </a>
        </div>
        <div className="items">
            <a href="">
                <img src={kay} alt="kay" />
            </a>
        </div>
    </div>
    </>
  )
}
