import React from "react";
import "./Footer.css";
import inbo from "./inbo.png";
import mobile from "./mobile.png";
import gps from "./gps.jpg";
import as from "./as.png";
import contact from "./contact.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="dark">
        <div className="outer">
          <div className="box4 common">
            <div className="im in">
              <img src={inbo} alt="inbox" />
            </div>
            <div className="in">
              <p className="tx">Get special discount on your inbox</p>
            </div>
          </div>

          <div className="mail">
            <input type="email" placeholder="Your Email" />
            <button className="button">SEND</button>
          </div>
        </div>

        <div className="outer">
          <div className="box4 common">
            <div className="im in">
              <img src={mobile} alt="mobile" />
            </div>
            <div className="in">
              <p className="tx">EXPERIENCE THE NYKAA MOBILE APP</p>
            </div>
          </div>

          <div className="images">
            <img className="gps" src={gps} alt="gps" />
            <img className="as" src={as} alt="as" />
          </div>
        </div>

        <div className="outer">
          <div className="box4 common">
            <div className="im in">
              <img src={contact} alt="contact" />
            </div>
            <div className="in">
              <p className="tx">
                FOR ANY HELP, YOU MAY CALL US AT 1800-267-4444
              </p>
            </div>
          </div>

          <div className="images">
            <p className="txt1">
              (Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)
            </p>
          </div>
        </div>
      </div>

      <div className="light">
        <div className="lightin">
          <p className="heading1">NYKAA</p>

          <ul className="list">
            <li className="litem">
              <a href="">Who are we?</a>
            </li>
            <li className="litem">
              <a href="">Careers</a>
            </li>
            <li className="litem">
              <a href="">Authenticity</a>
            </li>
            <li className="litem">
              <a href="">Press</a>
            </li>
            <li className="litem">
              <a href="">Testimonials</a>
            </li>
            <li className="litem">
              <a href="">Nykaa CSR</a>
            </li>
            <li className="litem">
              <a href="">Responsible Disclosure</a>
            </li>
            <li className="litem">
              <a href="">Investor Relations</a>
            </li>
          </ul>
        </div>

        <div className="lightin">
          <p className="heading2">Help</p>

          <ul className="list">
            <li className="litem">
              <a href="">Contact Us</a>
            </li>
            <li className="litem">
              <a href="">Frequently asked questions</a>
            </li>
            <li className="litem">
              <a href="">Store Locator</a>
            </li>
            <li className="litem">
              <a href="">Cancellation & Return</a>
            </li>
            <li className="litem">
              <a href="">Shipping & Delivery</a>
            </li>
            <li className="litem">
              <a href="">Sell on Nykaa</a>
            </li>
          </ul>
        </div>

        <div className="lightin">
          <p className="heading2">Inspire Me</p>

          <ul className="list">
            <li className="litem">
              <a href="">Beauty Book</a>
            </li>
            <li className="litem">
              <a href="">Nykaa TV</a>
            </li>
            <li className="litem">
              <a href="">Nykaa Network</a>
            </li>
            <li className="litem">
              <a href="">Buying Guides</a>
            </li>
          </ul>
        </div>

        <div className="lightin">
          <p className="heading2">Quick Links</p>

          <ul className="list">
            <li className="litem">
              <a href="">Offer Zone</a>
            </li>
            <li className="litem">
              <a href="">New Launches</a>
            </li>
            <li className="litem">
              <a href="">Nykaa Man</a>
            </li>
            <li className="litem">
              <a href="">Nykaa Fashion</a>
            </li>
            <li className="litem">
              <a href="">Nykaa Pro</a>
            </li>
          </ul>
        </div>

        <div className="lightin">
          <p className="heading2">Top Categories</p>

          <ul className="list">
            <li className="litem">
              <a href="">Makeup</a>
            </li>
            <li className="litem">
              <a href="">Skin</a>
            </li>
            <li className="litem">
              <a href="">Hair</a>
            </li>
            <li className="litem">
              <a href="">Bath & Body</a>
            </li>
            <li className="litem">
              <a href="">Appliances</a>
            </li>
            <li className="litem">
              <a href="">Mom and Baby</a>
            </li>
            <li className="litem">
              <a href="">Wellness</a>
            </li>
            <li className="litem">
              <a href="">Fragrance</a>
            </li>
            <li className="litem">
              <a href="">Natural</a>
            </li>
            <li className="litem">
              <a href="">Luxe</a>
            </li>
          </ul>
        </div>
      </div>




      <div className="white">
        <div className="align">
            <div className="alignin">
              <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg" alt="" />
              <div className="coltxt">
              <p className="instxt ex">FREE SHIPPING</p>
              <p className="insstxt ex1">On Orders Above ₹299</p>
              </div>
            </div>
        </div>
        <div className="align">
            <div className="alignin">
              <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg" alt="" />
              <div className="coltxt">
              <p className="instxt ex">EASY RETURNS</p>
              <p className="insstxt ex1">15-Day Return Policy</p>
              </div>
            </div>
        </div>
        <div className="align">
            <div className="alignin">
              <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg" alt="" />
              <div className="coltxt">
              <p className="instxt ex">100% AUTHENTIC</p>
              <p className="insstxt ex1">Products Sourced Directly</p>
              </div>
            </div>
        </div>
        <div className="align">
            <div className="alignin">
              <img src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg" alt="" />
              <div className="coltxt">
              <p className="instxt ex">1900+ BRANDS</p>
              <p className="insstxt ex1">1.2 Lakh+ Products</p>
              </div>
            </div>
        </div>
      </div>




      <div className="foot">
        <div className="col">
          <div className="row1 t">
            <div className="item1">
              <span>Terms & Conditions</span>
            </div>
            <div className="item1">
              <span>Shipping Policy</span>
            </div>
            <div className="item1">
              <span>Cancellation Policy</span>
            </div>
            <div className="item1">
              <span>Privacy Policy</span>
            </div>
          </div>

          <div className="row1 cent">
            <p>© 2023 Nykaa E-Retail Pvt. Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
