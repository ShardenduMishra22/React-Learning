import './App.css'
import Card from "./components/card"

function App() {

  return (
    <>
      <Card />
      <hr/><br/>
      <Card username="Mishra" college='IIT Dharwad' email="mishra@gmail.com"/>
      <hr/><br/>
      <Card username="no info yet" college='no info yet' email="no info yet"/>
    </>
  )
}

export default App
