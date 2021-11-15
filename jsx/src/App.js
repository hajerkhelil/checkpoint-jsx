import './App.css';
import Pic from "./photo.jpg";

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
        <h1 className="title-red">Your name here</h1>
        <br />
        <img src={Pic} alt='pic' />
        <br />
        <img src="/photo.jpg" alt='pic' />
      </div>
      <br />
      <video src="myVideo.mp4" width="320" height="240" type="video/mp4" controls />
    </div>
  );
}
export default App;
