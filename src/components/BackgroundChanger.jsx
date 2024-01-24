
import { useState } from 'react'
let bgColor = localStorage.getItem("bgColor") || "olive";
const BackgroundChanger = () => {
    let [color, setColor] = useState(bgColor)

    let colorChanger=(newColor)=>{
        localStorage.setItem("bgColor",newColor);
        setColor(newColor);
    }
    const buttonContainer = {
        backgroundColor:'white', 
        height:'70px', 
        width:'800px',
        borderRadius:'30px',
        position:'fixed',
        bottom:'30px',
        left:'20%'
    };

    let buttonHandler=(bgColor, color)=>{
        let buttonStyle = {
            height:'40px',
            width:'100px',
            backgroundColor: bgColor,
            borderRadius:'5px',
            border:`1px solid ${color}`,
            color: color,
            margin:'15px 25px'
        }

        return buttonStyle;
    }


  return (
    <div style={{backgroundColor: color,
                 height:'100vh', 
                 width:'100vw'}}>
           <div style={buttonContainer}>
    <button 
        onClick={()=>colorChanger('white')} 
        style={buttonHandler('white','black')}>
        White
    </button>

    <button 
        onClick={()=>colorChanger('black')} 
        style={buttonHandler('black','white')}>
        Black
    </button>

    <button 
        onClick={()=>colorChanger('red')} 
        style={buttonHandler('red','black')}>
        Red
    </button>

    <button 
        onClick={()=>colorChanger('green')} 
        style={buttonHandler('green','black')}>
        Green
    </button>

    <button 
        onClick={()=>colorChanger('yellow')} 
        style={buttonHandler('yellow','black')}>
        Yellow
    </button>
    
    </div>    
    </div>

  )
}

export default BackgroundChanger;