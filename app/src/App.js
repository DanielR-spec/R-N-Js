import "./App.css";
import Testimonio from "./componentes/Testimonios";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Testimonios de perros</h1>
        <Testimonio
          imagen="tomas"
          nombre="Thomas Rivera en Colombia"
          cargo="Ingeniero de sistemas"
          testimonio="Lorem ipsum dolor sit amet. Aut dignissimos ullam et vero fugiat eum velit omnis quo illum rerum. Ea dolor quod a dolor odit id aperiam atque! Sed doloribus odit qui doloribus ipsum ut aliquid accusantium aut consectetur beatae qui laborum sint quo cupiditate officia. Ut voluptas eligendi ut iste dicta 33 necessitatibus maiores!"
        />
        <Testimonio
          imagen="tomas"
          nombre="Thomas Rivera en Colombia"
          cargo="Ingeniero de sistemas"
          testimonio="Lorem ipsum dolor sit amet. Aut dignissimos ullam et vero fugiat eum velit omnis quo illum rerum. Ea dolor quod a dolor odit id aperiam atque! Sed doloribus odit qui doloribus ipsum ut aliquid accusantium aut consectetur beatae qui laborum sint quo cupiditate officia. Ut voluptas eligendi ut iste dicta 33 necessitatibus maiores!"
        />
        <Testimonio
          imagen="tomas"
          nombre="Thomas Rivera en Colombia"
          cargo="Ingeniero de sistemas"
          testimonio="Lorem ipsum dolor sit amet. Aut dignissimos ullam et vero fugiat eum velit omnis quo illum rerum. Ea dolor quod a dolor odit id aperiam atque! Sed doloribus odit qui doloribus ipsum ut aliquid accusantium aut consectetur beatae qui laborum sint quo cupiditate officia. Ut voluptas eligendi ut iste dicta 33 necessitatibus maiores!"
        />
      </div>
    </div>
  );
}

export default App;
