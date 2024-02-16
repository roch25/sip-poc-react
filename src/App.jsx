import './App.css'

function App() {
  const env = import.meta.env?.VITE_SOME_KEY
  console.log(env)
  return <>{'hi ' + env}</>
}

export default App
