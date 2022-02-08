import MfeAvatar from "./lib/component/mfeAvatar";
import MfeButton from "./lib/component/mfeButton";
import MfeText from "./lib/component/mfeText";

function App() {
  
    return (
    <div className="App">
      <MfeButton text="test button" onClick={()=>{alert('button click')}}/>
      <MfeAvatar text="RK" />
      <MfeText text="RK" onChange={(e)=>{console.log(e.target.value)}} />
    </div>
  );
}

export default App;
