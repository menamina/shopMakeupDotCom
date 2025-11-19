import Cake from "./cake.png";
import Email from "./email.svg";
import Phone from "./phone.svg";

export default function Footer() {
  <div className="footerHolder">
    <div className="foot1">
      <img src={Cake}></img>
      <div>
        <img src={Email} alt="email logo"></img>
      </div>
      <div>
        <img src={Phone} alt="phone logo"></img>
      </div>
    </div>
    <div className="foot2"></div>
    <div className="foot3"></div>
    <div className="foot4"></div>
  </div>;
}
