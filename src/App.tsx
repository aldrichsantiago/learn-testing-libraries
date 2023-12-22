import Button from "./components/Button"

function App() {

  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Hello World")
  }

  return (
    <>
      <div>
        <Button onClick={handleClick} type="submit" value="Hello"/>

      </div>
      
    </>
  )
}

export default App
