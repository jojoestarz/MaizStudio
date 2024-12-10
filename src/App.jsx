import "./App.css";
import Card from "./components/Map-Card";
import NavBar from "./components/nav-bar";
import Treeimg from "./assets/trees.png";
import sky from "./assets/skyview.png";
import '@fontsource/league-spartan'; // Defaults to weight 400

function App() {
  return (
    <> 
    <NavBar />
      <div className="bodyContainer">
   
        <h1 id="title">Maiz Studio +</h1> 
        <div id="InfoCard"> <h2>Weekly updates</h2> <p>this is gonna be a carousel of media links, map updates, and dynamic info </p></div>
        <div className="Tycoon-Grid">
        
        <Card img={Treeimg} description="treePic"/>
        <Card img={sky} description="Halloween Tycoon"/>
        <Card img={Treeimg} description="This is a description" />
        <Card img={sky} description="This is a description" /> 
        <Card img={Treeimg} description="This is a description" />
        <Card img={sky} description="This is a description" />
        <Card img={Treeimg} description="This is a description" />
        </div>
        

      </div>  
    </>
  );
}
export default App;
