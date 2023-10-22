fragmentos_literarios = {
    el_nombre_de_la_rosa : ['En el principio era el Verbo y el Verbo era en Dios, y el Verbo era Dios. Esto era en el principio, en Dios, y el monje fiel debería repetir cada día con salmodiante humildad ese acontecimiento inmutable cuya verdad es la única que puede afirmarse con certeza incontrovertible.'],
    historia_de_dos_ciudades : ['Era el mejor de los tiempos, era el peor de los tiempos, la edad de la sabiduría, y también de la locura; la época de las creencias y de la incredulidad; la era de la luz y de las tinieblas; la primavera de la esperanza y el invierno de la desesperación. Todo lo poseíamos, pero no teníamos nada; caminábamos en derechura al cielo y nos extraviábamos por el camino opuesto. En una palabra, aquella época era tan parecida a la actual, que nuestras más notables autoridades insisten en que, tanto en lo que se refiere al bien como al mal, sólo es aceptable la comparación en grado superlativo.'],
    el_extranjero: ['Hoy ha muerto mamá. O quizá ayer. No lo sé. Recibí un telegrama del asilo: "Falleció su madre. Entierro mañana. Sentidas condolencias". Pero no quiere decir nada. Quizá haya sido ayer.'],
    asfixia: ['Si vas a leer esto, no te preocupes. Al cabo de un par de páginas ya no querrás estar aquí. Así que olvídalo. Aléjate. Lárgate mientras sigas entero. Sálvate. Seguro que hay algo mejor en la televisión. O, ya que tienes tanto tiempo libre, a lo mejor puedes hacer un cursillo nocturno. Hazte médico. Puedes hacer algo útil con tu vida. Llévate a ti mismo a cenar. Tíñete el pelo. No te vas a volver más joven. Al principio lo que se cuenta aquí te va a cabrear. Luego se volverá cada vez peor.']
}

const objetosSeparados = {}; // Nuevo objeto para almacenar los arrays de palabras

for(const key in fragmentos_literarios){
    if(fragmentos_literarios.hasOwnProperty(key)){
        const fragmento = fragmentos_literarios[key][0];

        const palabras = fragmento.split(' ');

        objetosSeparados[key] = palabras
    }
}

function obtenerElementosAlAzar(arr, cantidad) {
    const elementosAlAzar = [];
    const copiaArray = arr.slice();
  
    for (let i = 0; i < cantidad; i++) {
      const indiceAleatorio = Math.floor(Math.random() * copiaArray.length);
      elementosAlAzar.push(copiaArray.splice(indiceAleatorio, 1)[0]);
    }
  
    return elementosAlAzar;
  }
  
  const elementosAlAzarString = {}; // Nuevo objeto para almacenar los strings con elementos al azar
  
  for (const propiedad in objetosSeparados) {
    if (objetosSeparados.hasOwnProperty(propiedad)) {
      const arrayDePalabras = objetosSeparados[propiedad];
      const elementosAlAzar = obtenerElementosAlAzar(arrayDePalabras, 3);
      
      // Construimos un string a partir de los elementos al azar
      const elementosAlAzarComoString = elementosAlAzar.join(' ');
      
      elementosAlAzarString[propiedad] = elementosAlAzarComoString;
    }
  }
  
  // Construimos un string final que contiene todos los elementos al azar
  let resultadoFinal = '';
  
  for (const propiedad in elementosAlAzarString) {
    if (elementosAlAzarString.hasOwnProperty(propiedad)) {
      resultadoFinal += `${elementosAlAzarString[propiedad]} `;
    }
  }
  
  console.log(resultadoFinal); // Imprime el string final
  