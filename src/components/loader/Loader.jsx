import "./Loader.less";
import "../../ dataConfig/ dataConfig";

const Loader = () => {
  return (
    <section className="container-loader">
      <div className="block-loader">
        <div className="block-loader__green" />
      </div>
      <h2 className="container-loader__title">Loadind 70%</h2>
    </section>
  );
};

export default Loader;
