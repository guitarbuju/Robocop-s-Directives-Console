import { useState,useEffect } from "react"
import './App.css';
import robocop from './img/firerobo.001.jpeg'
import robocop2 from './img/rob.001.jpeg'
import deadoralive from './sounds/dead-or-alive-you-are-coming-with-me.mp3'
import dropit from './sounds/drop-it.mp3'
import twentys from './sounds/you-have-20-seconds-to-comply.mp3'
import creep from './sounds/your-move-creep.mp3'
import heavymch from './sounds/Heavy Machinegun.mp3'
import lightmch from './sounds/lightmachinegun.mp3'
import Header from "./components/Header";
import Contenedor from "./components/Contenedor";





function App() {

  

  // Hook para tener la lista
  const [lista, setlista] = useState([])
// Nos traemos la lista del servidor con fetch y se la asignamos con el hook de usestate
  const API_URL = 'http://localhost:3010/';
  const fetchDir=async()=> {
    const response = await fetch(API_URL)
    const direct = await response.json();
    console.log(direct)
    setlista(direct)
    
  }

  useEffect(() => {
    fetchDir()
  }, [])
  


const [input, setinput] = useState('')



const [image, setimage] = useState(robocop2)


const cambiaInput=(value)=>{
  setinput(value)
}

const addDirective=()=>{
  let object={
    dir:input,
    id:lista.length+1,
    done:false
  }
  
    //Metodo Post
   
   const componentDidMountasync=async ()=>{
    // POST request using fetch with async/await
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(object)
    };
    const response = await fetch('http://localhost:3010/add', requestOptions);
    console.log(response)
    const data = await response.json();
    setlista(data)
}
  
    componentDidMountasync()

  setinput('')
  setimage(robocop)
  sounds()
  console.log(object)
}



const sounds=()=>{
  let deador= new Audio(deadoralive)
  let drop= new Audio(dropit)
  let comply= new Audio(twentys)
  let creeper= new Audio(creep)
  let HeavyMachineGun= new Audio(heavymch)
  let lightmachinegun= new Audio(lightmch)

  let random= Math.floor(Math.random() * 6) + 1;

  switch (random) {
    case 1:
      deador.play()
      break;
    case 2:
      drop.play()
      break;
    case 3:
      comply.play() 
      break;
    case 4:
      creeper.play()
      break   
    case 5:
      HeavyMachineGun.play()
      break;
    case 6:
      lightmachinegun.play()
      break;    
    default:
      break;
  }
  
}



  return (
    <div className="App">
   
      <Header />
      <Contenedor 
      lista={lista} 
      image={image}
      setlista={setlista}
   
      
      />
     <div className="inputData">
      <h3>New Directives:</h3>
      <div className="cuadro">
      <label >Directive</label>
        <input className="input" type='text' value={input} 
        onChange={(e)=>cambiaInput(e.target.value)} onFocus={()=>setimage(robocop2)}/>
        
        <button onClick={()=>{addDirective();}}  
        >  <i className="gg-software-upload"></i></button>
      </div>
       
      </div>
          
    </div>
  );
}

export default App;
