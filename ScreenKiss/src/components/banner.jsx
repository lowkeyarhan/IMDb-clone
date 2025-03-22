import "../styles/banner.css";
import Poster from "../assets/wallpapersden.com_avengers-endgame-banner_7173x3000.jpg";

function banner() {
  return (
    <div className="banner_container">
      <img src={Poster} alt="" />
      <p>Avengers: Endgame</p>
    </div>
  );
}
export default banner;
