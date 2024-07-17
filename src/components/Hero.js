import img from "../assets/banner.jpg";
import "./Hero.css";

function banner() {
  return (
    <div className="bg-banner">
      <figure>
        <img src={img} alt="banner"></img>
        <figcaption>
        Dr. Norman Borlaug, third from the left, trains biologists in Mexico on how to increase wheat yields - part of his life-long war on hunger.
        </figcaption>
      </figure>
    </div>
  );
}

export default banner;
