import "./Spinner.less";
import imgSpinner from "../../images/spiner.svg";

const Spinner = () => {
  return (
    <section className="container-spinner">
      <h2 className="container-spinner__title">Poker</h2>
      <div className="block-spinner">
        <img alt="block-spinner__img" src={imgSpinner} />
      </div>
    </section>
  );
};

export default Spinner;
