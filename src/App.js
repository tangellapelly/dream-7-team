
import './App.css';
import {addPlayer,removePlayer} from './actions/Player'
import {useSelector,useDispatch} from 'react-redux'
import PlayersList from './pages/PlayersList'
import SelectedPlayer from './pages/SelectedPlayer'

function App() {

  const selectedTeam = useSelector(state => state.PlayerTeam) 
  const dispatach = useDispatch()

  return (
    <div className="App">
     <h1>Dream 7 Team</h1>
     <h4>Selected PLayers Count: {selectedTeam.length}</h4>
     
      
      { selectedTeam.length > 0 ? <SelectedPlayer/>:<PlayersList/>}
      
    </div>
  );
}

export default App;
