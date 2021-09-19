import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id:1,
      text: 'Wake up',
      hour: '8:30',
    },
    {
      id:2,
      text: 'Office',
      hour: '9:00',
    },
    {
      id:3,
      text: 'Party',
      hour: '18:00',
    },
  ])

  return (
    <div className="container">
     <Header title='Next task'/>
     <Tasks tasks={tasks}/>
    </div>    
  );
}

 

export default App;
