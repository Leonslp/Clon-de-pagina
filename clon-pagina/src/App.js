/* eslint-disable react/jsx-no-undef */
import "./App.css";
import Testimonios from "./componentes/testimonios";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>!Este es un curso de React desde 0¡</h1>
        <Testimonios 
        nombre='Santiago Leon'
        pais='Colombia'
        imagen='1'
        cargo='Reclutador TI'
        empresa='Autonomic Mind'
        testimonio='The old apple revels in its authority. As she walked along the street and looked in the gutter, she realized facemasks had become the new cigarette butts. Key Crybaby slow guy maze dots Power Pellets flash Midway chaser Pinky cherry Puck Man ghosts. Fluffy pink unicorns are a popular status symbol among macho men. The beauty of the sunset was obscured by the industrial cranes.'
        />

        <Testimonios
        nombre='Santiago Leon'
        pais='Colombia'
        imagen='2'
        cargo='Reclutador TI'
        empresa='Autonomic Mind'
        testimonio='The old apple revels in its authority. As she walked along the street and looked in the gutter, she realized facemasks had become the new cigarette butts. Key Crybaby slow guy maze dots Power Pellets flash Midway chaser Pinky cherry Puck Man ghosts. Fluffy pink unicorns are a popular status symbol among macho men. The beauty of the sunset was obscured by the industrial cranes.'
        />

        <Testimonios
        nombre='Santiago Leon'
        pais='Colombia'
        imagen='3'
        cargo='Reclutador TI'
        empresa='Autonomic Mind'
        testimonio='The old apple revels in its authority. As she walked along the street and looked in the gutter, she realized facemasks had become the new cigarette butts. Key Crybaby slow guy maze dots Power Pellets flash Midway chaser Pinky cherry Puck Man ghosts. Fluffy pink unicorns are a popular status symbol among macho men. The beauty of the sunset was obscured by the industrial cranes.'
        />
      </div>
    </div>
  );
}

export default App;
