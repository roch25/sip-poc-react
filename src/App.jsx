import './App.css'

function App() {
  const env = import.meta.env?.VITE_SOME_KEY
  console.log(env)
  return (
    <>
      <h1>{'hi ' + env}</h1>
      <img src="https://app.dev.usemango.co.uk/static/media/usemango_logo.13d8fa05.png" alt="um logo" />
    </>
  )
}

export default App
