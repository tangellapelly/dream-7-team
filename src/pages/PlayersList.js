import {useEffect,useState} from 'react'
import axios from 'axios'
import ListItem from '../components/ListItem'
import {addPlayer} from '../actions/Player'

import {searchArryOfobj } from '../util/util'

import {useDispatch} from 'react-redux'

const PlayersList = (props) => {

 const dispatch = useDispatch()

 let [players,setPlayers]= useState([])

 let [Bowler,setBowler] = useState([])

 let [Batsman, setBatsman] = useState([])

 let  [AllRounder, setAllRounder] = useState([])



 // Feteching the list of availabe players from the server
    useEffect(() => {
        const fetchPlayer = async () => {
        let player = await axios.get('http://localhost:3000/players.json')
        setPlayers(player.data)
        }
        fetchPlayer()
    }, [])



    const addPlayerHandle = (e) => {
       
        let playerIndex = e.target.id -1
        console.log('playerInfo',e.target.id)
       console.log('role',players[playerIndex].role)
       switch (players[playerIndex].role) {
           case 'Bowler':
               if (!searchArryOfobj(Bowler, players[playerIndex].id) && Bowler.length < 2) {

                   setBowler([...Bowler, players[playerIndex]]);

               }
               break
           case 'All-Rounder':
               if (!searchArryOfobj(AllRounder, players[playerIndex].id) && AllRounder.length < 2) {
                   setAllRounder([...AllRounder, players[playerIndex]])

               }
               break
           case 'Batsman':
               if (!searchArryOfobj(Batsman, players[playerIndex].id) && Batsman.length < 3) {
                   setBatsman([...Batsman, players[playerIndex]])
               }
               break
           default:
               break
       }
       console.log('checking validations')
       ValidateConditions()

    }

    const ValidateConditions = () => {

        if(Batsman.length == 3 && Bowler.length == 2 && AllRounder.length == 2 ){  
            console.log('count of 3 batsman && 2 bowler 2 allrouder satisfied')
                let seletedTeam = [...Batsman,...Bowler,...AllRounder]
                let totalTeamScore = seletedTeam.reduce((acc,player) => acc+Number(player.points),0)
                console.log(totalTeamScore)
                if(totalTeamScore <= 75 ){
                    console.log( totalTeamScore, `condition satisfied `)
                    dispatch(addPlayer([...Batsman,...Bowler,...AllRounder]))
                    console.log('action dispatched')
                }else{
                    
                    setAllRounder([])
                    setBatsman([])
                    setBowler([])
                    alert(`Total Team points are more than 75. Selected Team total Point ${totalTeamScore}. Please select again`)
                    
                }
           }
    }
    
    return (<>
        <h1> List of Available players </h1>
        <p> selected - bowlers:{Bowler.length} batsman:{Batsman.length} AllRounders:{AllRounder.length} </p> 
        <button onClick={ValidateConditions}>Done with selection</button>
   <ul onClick={addPlayerHandle}>
        {players.map((player)=><ListItem player={player}/>)}
    </ul>
    </>
    )

}

export default PlayersList