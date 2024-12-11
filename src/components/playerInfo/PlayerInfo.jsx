import "./PlayerInfo.less";
import star from "../../images/Vector.svg";
import userPhoto from "../../images/userPhoto.svg";
import iconEye from "../../images/btn_balance.svg";

const PlayerInfo = () => {
  return (
    <section className="container-playerInfo">
      <div className="block-playerInfo">
        <h2 className="block-playerInfo__name">LongUserName</h2>
        <div className="wrapper-playerInfo">
          <img
            className="wrapper-playerInfo__star"
            src={star}
            alt="icon-star"
          />
          <img
            className="wrapper-playerInfo__star"
            src={star}
            alt="icon-star"
          />
          <img
            className="wrapper-playerInfo__star"
            src={star}
            alt="icon-star"
          />
          <img
            className="wrapper-playerInfo__star"
            src={star}
            alt="icon-star"
          />
          <img
            className="wrapper-playerInfo__star"
            src={star}
            alt="icon-star"
          />
        </div>
      </div>
      <div className="block-playerInfo">
        <div className="block-user">
          <img className="block-user__img" alt="photo-user" src={userPhoto} />
        </div>
      </div>
      <div className="block-playerInfo_radius">
        <div className="block-eye">
          <img className="block-eye__img" alt="icon-eye" src={iconEye} />
        </div>
        <h2>$100,500.00</h2>
      </div>
    </section>
  );
};

export default PlayerInfo;
