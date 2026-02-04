import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'

function App() {
  function handleClick() {
    alert('Button Clicked')
  }
  const handleClick2 = () => {
    alert('Button-2 Clicked')
  }
  const addToFive = (num) => {
    alert(num + 5)
  }
  return (
    <>
      <h3>React Core Concepts Part-2</h3>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load Data</li>
      </ol>
      <hr />
      <Posts></Posts>
      {/* <Friends></Friends> */}
      {/* <Users></Users> */}
      {/* <Team></Team> */}
      {/* <Counter></Counter> */}

      {/* <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me-2</button>
      <button onClick={() => { alert('Button-3 Clicked') }}>Click Me-3</button> */}

      {/* Complicated system */}
      {/* <button onClick={() => addToFive(3)}>Click Me-4</button> */}
    </>
  )
}

export default App
