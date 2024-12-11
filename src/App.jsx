import { dataConfig } from "./ dataConfig/ dataConfig";
import "./App.less";

import Loader from "./components/loader/Loader";
import PlayerInfo from "./components/playerInfo/PlayerInfo";
import Spinner from "./components/spinner/Spinner";
import TournamentItem from "./components/tournamentItem/TournamentItem";

const App = () => {
  return (
    <main className="main">
      <Spinner />
      <PlayerInfo />
      <Loader />
      <TournamentItem state = {dataConfig.tournamentItem.state}/>
    </main>
  );
};

export default App;
