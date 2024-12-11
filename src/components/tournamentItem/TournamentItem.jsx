import "./TournamentItem.less";

const TournamentItem = (props) => {
  console.log(props)
  return <section className="container-tournament">
    <div className="block-tournament">
      <h2 className="block-tournament__state">{props.state.registering}</h2>
    </div>
  </section>;
};
export default TournamentItem;
