import Cake from "../imgs/cake.png";
import Email from "../imgs/email.svg";
import Phone from "../imgs/phone.svg";

export default function Footer() {
  return (
    <div className="footerHolder">
      <div className="foot1">
        <img src={Cake} alt="cake brand logo"></img>
        <div>
          <img src={Email} alt="email logo"></img>
          <input
            type="email"
            aria-label="enter email here"
            placeholder="Enter your email"
          />
        </div>
        <div className="emptyDiv"></div>
        <div>
          <img src={Phone} alt="phone logo"></img>
          <input
            type="email"
            aria-label="enter phone number here"
            placeholder="Enter phone number"
          />
        </div>
        <div className="emptyDiv"></div>
      </div>
      <div className="foot2">
        <p>COMPANY</p>
        <p>About</p>
        <p>Contact Us</p>
      </div>
      <div className="foot3">
        <p>HELP</p>
        <p>FAQ</p>
        <p>Return Policy</p>
      </div>
      <div className="foot4">
        <p>FOLLOW US</p>
        <div>
          <img></img>
          <p>Instagram</p>
        </div>
        <div>
          <img></img>
          <p>X</p>
        </div>
        <div>
          <img></img>
          <p>Youtube</p>
          <div>
            <img></img>
            <p>Tiktok</p>
          </div>
        </div>
      </div>
    </div>
  );
}
