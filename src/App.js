import "./App.css";
import Perfil from "./componentes/Perfil.js";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Mis cuentas favoritas de YouTube son:</h1>
        <Perfil
          nombre="Fazt"
          pais="Peru"
          imagen="fazt"
          cargo="Autodidacta"
          empresa="YouTube"
          resena="Es un canal en donde podrás encontrar una variedad de videos de programación, desarrollo Web y muchos otros temas relacionados al mundo de la informática en general. Desde aprender las bases de un lenguaje de programacion hasta subir tu sitio o aplicación Web."
        />
        <Perfil
          nombre="Brais Moure"
          pais="España"
          imagen="brais"
          cargo="Ingeniero de software"
          empresa="Moure
                Dev"
          resena="Canal con tutoriales de programación y desarrollo de software. Enseña a crear aplicaciones Android e iOS con Android Studio, Xcode, Flutter, Kotlin, Swift, Dart, a programar con Python y mucho más.."
        />
        <Perfil
          nombre="Miguel Ángel Durán"
          pais="España"
          imagen="midudev"
          cargo="Ingeniero de software"
          empresa="YouTube"
          resena="Programador que enseña sobre desarrollo con javascript, programación web y full stack con React, Node.js, HTML, CSS, Tailwind, Next.js y Deno."
        />
      </div>
    </div>
  );
}

export default App;
