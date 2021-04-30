const ListItem = (props) => {

    const {id,name,role,points} = props.player
    return (
        <li style={{padding:'20px', marginBottom:"2px",border:'1px',borderStyle: 'solid'}} key={id} id={id}>{name} - {role} - {points}</li>
    )

}

export default ListItem