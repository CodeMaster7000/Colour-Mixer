"use strict"
window.onload = () => {
  const color1 = document.getElementsByClassName('color1')[0];
  const color2 = document.getElementsByClassName('color2')[0];
  
  const r1 = document.getElementById('r1');
  const g1 = document.getElementById('g1');
  const b1 = document.getElementById('b1');
  const r2 = document.getElementById('r2');
  const g2 = document.getElementById('g2');
  const b2 = document.getElementById('b2');
  
  document.body.addEventListener('mouseup', (e) => {
    let r1Val = +r1.value;
    let g1Val = +g1.value;
    let b1Val = +b1.value;
    let fontColor1 = calculateIntensity(r1Val, g1Val, b1Val);
    color1.style.background = `rgb(${r1Val}, ${g1Val}, ${b1Val})`;
    color1.style.color = fontColor1;
    let color1Hex = calculateHex(r1Val, g1Val, b1Val);
    updateHex(color1Hex, 'color1-hex');
    
    let r2Val = +r2.value;
    let g2Val = +g2.value;
    let b2Val = +b2.value;
    let fontColor2 = calculateIntensity(r2Val, g2Val, b2Val);
    color2.style.background = `rgb(${r2Val}, ${g2Val}, ${b2Val})`;
    color2.style.color = fontColor2;
    let color2Hex = calculateHex(r2Val, g2Val, b2Val);
    updateHex(color2Hex, 'color2-hex');
    
    
    mixColors(r1Val, g1Val, b1Val, r2Val, g2Val, b2Val);
  });

  function calculateIntensity(red, green, blue) {
     
    let intensity = (red * 0.299) + (green * 0.587) + (blue * 0.114);

    if(intensity > 186) {
      return '#000000';
    } else {
      return '#FFFFFF';
    }
  }
  
  function mixColors(r1, g1, b1, r2, g2, b2) {
    let red = Math.round((r1 + r2) / 2);
    let green = Math.round((g1 + g2) / 2);
    let blue = Math.round((b1 + b2) / 2);
    
    const output = document.getElementById('output');
    let fontColor = calculateIntensity(red, green, blue);
    output.style.background = `rgb(${red},${green},${blue})`;
    output.style.color = fontColor;
    let outputHex = calculateHex(red, green, blue);
    updateHex(outputHex, 'output-hex');
  }
  
  function calculateHex(r,g,b) {
    r = addZeros(r.toString(16));
    g = addZeros(g.toString(16));
    b = addZeros(b.toString(16));

    let hex = '#' + r + g + b;
    return hex.toUpperCase();
  }
  
  function addZeros(val) {
    return val.padStart(2,'0');
  }
  
  function updateHex(hex, id) {
    document.getElementById(id).textContent = hex;
  }
};
