
import ListItem from '../components/ListItem'
import {React} from 'react'
import {useSelector } from 'react-redux'

const SelectedPlayer = (props) => {
const SelectedTeam = useSelector(state => state.PlayerTeam)
    return (
    <>
    <h1>Seleted Team list</h1>
    <ul>
        {SelectedTeam.map((player)=><ListItem player={player}/>)}
    </ul>
    </>
    )
        
    
}

export default SelectedPlayer