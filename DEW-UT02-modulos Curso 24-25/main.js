
import ciclo, * as components from "./component.js"

const DOM = {
  ciclo: document.getElementById("ciclo"),
  curso: document.getElementById("curso"),
  modulo: document.getElementById("modulo")
};

(function(){
  DOM.ciclo.textContent = ciclo(); 
  DOM.curso.textContent = components.curso();
  DOM.modulo.textContent = components.modulo();
})()
