// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"


function Header(props){
  return (
    <header>
      <h1>{props.name}'s kitchen</h1>
    </header>
  )
}

function Main(props){
  return (
    <section>
      <p>We serve most {props.adj} food around the world</p>
      <ul>
        {/* each child in a list should have a unique key  */}
        {props.dishesObj.map((dish, i)=><li key={dish.index}>{dish.title}</li>)}
      </ul> 
    </section>
  )
}

function Footer(props){
  return (
    <footer>
      <p>Copyright {props.date}</p>
    </footer>
  )
} 

const dishes = ["french fries", "hamburger", "hash brown"];
const dishesObj = dishes.map((dish, index)=>({title:dish, index:index}));
console.log(dishesObj);


function SecretComponent(){
  return (
      <h1>the sentence from secretComponent</h1>
  )
}

function RegularComponent(){
  return (
      <h1>Everyone can see this component</h1>
  )
}

const [first] = ["apple","banana","orange"];
console.log(first);
const {fishball} = {fishball:"A",cookie:"B"};
console.log(fishball);

function App({authorized}) {

  
  
  
  const [emotion,setemotion] = useState("happy");
  const [secondEmotion,setSecondEmotion] = useState("frustrated");
  useEffect(()=>{console.log(`useEffect ${emotion}`);}, [emotion]);
    useEffect(()=> {console.log(`useEffect ${secondEmotion}`);}, [secondEmotion]);
   
  return (
    <div className='App'>
    {/* components can be nested inside another components  */}
    {/* User-defined components must be capitalized, the tags with lowercases are for built-in HTML tags */}
    <h1>my current emotion is {emotion}</h1>
    <button onClick={()=>setemotion("sad")}>sad</button>
    <button onClick={()=>setemotion("confident")}>confident</button>
    <button onClick = {()=>setSecondEmotion("bad")}>bad</button>
      <Header name="Mark"/> 
      <Main adj = "amazing" dishesObj={dishesObj} />
      <Footer date = {new Date().getFullYear()}/>
      {authorized? <SecretComponent />:<RegularComponent />}
      
    </div>

  );
}

export default App;
