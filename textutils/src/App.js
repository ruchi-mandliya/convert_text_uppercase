import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
        
      <div className="container my-5">
        <TextForm heading = "Enter the text to analyze below"/>
      </div>
      
     
    </>
  );
}

export default App;
