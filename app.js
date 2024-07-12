let numeroSecreto = Math.floor (Math.random()*10)+1;
let numeroUsuario = 0
let intentos= 1
let maximoIntentos=3

   while (numeroUsuario != numeroSecreto) {
      numeroUsuario =parseInt(prompt('me indicas un numero del 1 al 10'));
      
      console.log(typeof(numeroUsuario));
      

      if (numeroUsuario == numeroSecreto) {
         alert(`acertaste el numero: ${numeroUsuario}). lo hiciste en ${intentos} ${intentos == 1?'vez' :'veces'}`);
      } else {
      if (numeroUsuario > numeroSecreto){
         alert('el numero es menor');

      } else {
         alert("el numero es mayor")
      }
      intentos ++;
      
      if (intentos>maximoIntentos){
         alert (`llegaste al numero mayor de ${maximoIntentos}intentos`);
         break;
      }
   } 
   }   