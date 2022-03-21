
let notas,

numMax = Number.NEGATIVE_INFINITY,
numMin = Number.POSITIVE_INFINITY,
 
alumDes = 0,
contDes = 0,
promeDes  ,

alumApr = 0,
contApr = 0,
promeApr  ,

alumPro = 0,
contPro = 0 ,
promePro ;

do{

notas = parseInt(prompt('Ingrese las notas de la comisión'));

if (notas < 4){
alumDes+= notas;
contDes++;
} 
else if(notas >= 4 &&  notas <= 6) {
alumApr+= notas;
contApr++;
} 

else if ( notas >= 7){
alumPro+= notas;
contPro++;
}

if(notas > numMax){
numMax = notas;
} 
if(notas < numMin){
numMin = notas;
}

}while (confirm('Desea ingresar más notas'));

promeDes = alumDes / contDes;
promeApr = alumApr / contApr;
promePro = alumPro / contPro;

document.write(
`<ul>

<li>El promedio de las notas de los alumnos desaprobados es ${promeDes}</li>
<li>El promedio de las notas de los alumnos aprobados es ${promeApr}</li>
<li>El promedio de las notas de los alumnos promocionados es ${promePro} </li>
<li>La mayor nota ingresada  es ${numMax} </li>
<li>La menor nota ingresadanes ${numMin}</li>
</ul>`
);

