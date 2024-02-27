import TinderCard from "react-tinder-card"
import { useState } from "react"
import ChatContainer from "../components/ChatContainer"
const Dashboard = () => {
    
    const db = [
        {
          name: 'Richard Hendricks',
          url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D'
        },
        {
          name: 'Erlich Bachman',
          url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D'
        },
        {
          name: 'Monica Hall',
          url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D'
        },
        {
          name: 'Jared Dunn',
          url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D'
        },
        {
          name: 'Dinesh Chugtai',
          url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D'
        }
      ]
      const characters = db;
      const [lastDirection, setLastDirection] = useState();

      const swiped = (direction, nameToDelete) => {
          console.log('removing: ' + nameToDelete)
          setLastDirection(direction)
      }

      const outOfFrame = (name) => {
          console.log(name + ' left the screen!')
      }

    return (
      <div className = "dashboard">
        <ChatContainer/>
        <div className="swipe-container">
          <div className='card-container'>
            {characters.map((character) =>
              <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                  <h3>{character.name}</h3>
                </div>
              </TinderCard>
            )}
          
            <div className="swipe-info">
              {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
            </div>
          </div>
        </div>
      </div> 
        );
}
 
export default Dashboard;