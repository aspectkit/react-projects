import { useState } from "react";

export default function RandomColor(){

    const [typeOfColor, setTypeOfColor] = useState('HEX');
    const [color, setColor] = useState('#014534');


    function setTypeAndColor(colorType){
        if (colorType === 'HEX'){
            setTypeOfColor('HEX');
            let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
            let colorStr = "#";
            for (let i = 0; i < 6; i++){
                let colorChar = Math.floor(Math.random() * hexArray.length);
                colorStr += hexArray[colorChar];
            }
            setColor(colorStr);
        } else {
            setTypeOfColor('RGB');
            let red = Math.floor(Math.random() * 256)
            let green = Math.floor(Math.random() * 256)
            let blue = Math.floor(Math.random() * 256)

            setColor(`rgb(${red},${green},${blue})`)
        }
    }


    return (
        <div className="container" style={{width: '100vw', height: '50vh', background: color}}>
            <button style={{marginTop: '10px'}} onClick={() => setTypeAndColor('HEX')} className="hexColor">Create HEX Color</button>
            <button style={{marginTop: '10px'}} onClick={() => setTypeAndColor('RGB')} className="rgbColor">Create RGB Color</button>
            <button style={{marginTop: '10px'}} onClick={() => setTypeAndColor(typeOfColor)} className="randomColor">Generate Random Color</button>

            <h1 style={{fontSize: '70px', color: 'white'}}>{typeOfColor}</h1>
            <h1 style={{paddingTop: '20px', fontSize: '100px', color: 'white'}}>{color}</h1>
        </div>
        
    );
}