import React from 'react'
import ninemm from '../sounds/9mm.mp3'
import shotgun from '../sounds/shotgun.mp3'
import theme from '../sounds/robocop-theme.mp3'


const Contenedor = ({lista,image,setlista}) => {

  //  const [checked, setchecked] = useState(false)
  // const [classCheck, setclassCheck] = useState('')
  
  
    const DelDirective=(valor)=>{
      //Sound Effects
      const shot2kill= new Audio(shotgun)
      shot2kill.play()
      
      let  id=valor
      let object={id:id}
        //Metodo delete
       
       const componentDidMountasync=async ()=>{
        // DELETE request using fetch with async/await
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(object)
        };
        const response = await fetch('http://localhost:3010/del', requestOptions);
        console.log(response)
        const data = await response.json();
        setlista(data)
    }
      
        componentDidMountasync()
       
    }
 

    const patchDirective=(valor)=>{
//Sound Effects
     const oneshot= new Audio(ninemm)
     oneshot.play()

      let  id=valor
      let object={id:id}
        //Metodo delete
       
       const componentDidMountasync=async ()=>{
        // PATCH request using fetch with async/await
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(object)
        };
        const response = await fetch('http://localhost:3010/patch', requestOptions);
        const data = await response.json();
        console.log(data)
        setlista(data)
    }
      
        componentDidMountasync()
       
    }

    const tema=new Audio(theme)

  return (
    <div className="contenedor">
        <div >
          <img className="imagen" 
          src={image}alt='robo'
            onClick={()=>tema.play()}
            onDoubleClick={()=>tema.pause()}
          />
        </div>
        <div className="lista">
          <ul>
              { lista.map((elemento) => 
              <li className="dir" key={elemento.id+1}  
              
              >
              <span
              className={elemento.done?'doneDirective':'numDirective'}
              onClick={(e)=>patchDirective(elemento.id)}
              >{elemento.id}
              </span>
              <span className={elemento.done?'doneDirective':'numDirective'}
              onClick={(e)=>DelDirective(elemento.id)}
              >{elemento.dir}</span> 
             
              
              </li> )}
          </ul>
        </div>
      </div>
      
  )
}

export default Contenedor