import * as icons from './icons'
import './App.css'

function App() {
  return (
    <main className="app">
      <h1>Icon Library</h1>
      <div className="iconsContainer">
        {Object.entries(icons).map(([key, Icon]) => (
        <div className="iconContainer" key={key}>
          <Icon />
          <div>{key}</div>
        </div>
        ))}
      </div>
      <p className="footnote">Icons used with permission from <a href="https://www.svgrepo.com/collection/avatar-duotone-vectors/">svgrepo.com</a></p>
    </main>
  )
}

export default App
