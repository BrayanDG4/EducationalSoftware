import fondoProgramacion from "../../../assets/modulos/img-modulo1-1.gif";
import Notes from "../components/notes";

Notes;

export const Unidad1 = () => {
  return (
    <div className="h-full overflow-y-scroll flex flex-col font-semibold">
      <div className="flex flex-col">
        <img src={fondoProgramacion} alt="imagen de programacion" className="rounded-3xl" />

        <h1 id="variables" className="module-title ">
          Variables
        </h1>

        <p>
          Las Variables son contenedores en los que puedes almacenar valores
          (informacion)
        </p>
      </div>
      <hr />
      {/* tipos de varibles */}
      <div className="flex flex-col mt-3">
        <h1 id="tipovariables" className="module-title">
          Tipos de variables
        </h1>
        <p>
          Usamos <code className="module-blue">let</code> y{" "}
          <code className="module-blue">const</code> para crear variables.{" "}
          <br />
          <br />
          <code className="module-blue">let</code> : Nos permiten crear
          variables mutables que si se puede cambiar. <br />
          <br />
          <code className="module-blue">const</code> : Nos permite declarar
          variables inmutables, osea no se puede cambiar. <br />
        </p>

        <hr />
        {/* creacion de variables */}
        <h1 id="creacionvariables" className="module-title">
          Creacion de variables
        </h1>
        <p>
          Primero debes declarar la variable con la palabra clave{" "}
          <code className="module-blue">let</code> o{" "}
          <code className="module-blue">const</code> seguida del nombre que le
          quieras dar.
        </p>

        <code className="my-6">
          {" "}
          let <code className="module-purple">patataFrita;</code>
        </code>

        <Notes />
        <hr />

        <p>Tras declarar una variable, puedes asignarle un valor</p>

        <code className="my-6">
          let <code className="module-yellow">nombre</code> = 'Bob';
        </code>

        <p>
          Después de haberle dado un valor a la variable, puedes volver a
          cambiarlo:
        </p>

        <code className="my-6">
          let<code className="module-yellow">nombre</code> = 'Bob'; <br />
          <code className="module-yellow">nombre</code> = 'Steve';
        </code>

        <hr />
        {/* tipo de datos */}
        <h1 id="tipodatos" className="module-title">
          Tipos de Datos
        </h1>

        <table>
          <tr>
            <td></td>
            <th>Explicacion</th>
            <th>Ejemplo</th>
          </tr>
          <tr>
            <th>String</th>
            <td>
              Se refiere a un caracteres llamado cadena. Para denotar que una
              variable es una cadena, es necesario encerrarla entre comillas("
              ")
            </td>

            <td>let x = 'Bob';</td>
          </tr>
          <tr>
            <th>Number</th>
            <td>Esto es un número. Los números no tienen comillas.</td>
            <td>let x = 10;</td>
          </tr>
          <tr>
            <th>Boolean</th>
            <td>
              Tienen valor verdadero/falso. <code className="module-purple">true/false</code> son palabras especiales
              en JS, y no necesitan comillas..
            </td>
            <td>let x = true;</td>
          </tr>
        </table>
        <br />

        {/* comentarios */}
        <h1 id="comentarios" className="module-title">
          Comentarios
        </h1>

        <p>
          Puedes escribir comentarios entre el código JavaScript, igual que
          puedes en CSS. El navegador ignora el texto marcado como comentario.
          En JavaScript, los comentarios de una sola línea se escriben así:
        </p>

        <code className="my-6 module-purple">// Esto es un comentario</code>

        {/* operadores */}
        <h1 id="operadores" className="module-title">
          Operadores
        </h1>
        <p>
          Un operador es básicamente un símbolo matemático que puede actuar
          sobre dos valores (o variables) y producir un resultado.
        </p>

        <table>
          <tr>
            <td></td>
            <th>Explicacion</th>
            <th>Simbolo</th>
            <th>Ejemplo</th>
          </tr>
          <tr>
            <th>Suma/concatena</th>
            <td>Se usa para sumar dos números, o juntar dos cadenas en una.</td>

            <td>+</td>
            <td>
              6 <code className="module-yellow">+</code> 9; <br />
              "Hola " + "mundo!";
            </td>
          </tr>
          <tr>
            <th>Resta, multiplicación, división</th>
            <td>
              Estos hacen lo que esperarías que hicieran en las matemáticas
              básicas.
            </td>
            <td>-, *, /</td>
            <td>
              9 - 3; <br />
              8 <code className="module-yellow">*</code> 2; // La multiplicación en JS es un asterisco <br />9 / 3;
            </td>
          </tr>
          <tr>
            <th>Operador de asignación</th>
            <td>
              Los has visto anteriormente: asigna un valor a una variable.
            </td>
            <td><code className="module-yellow">=</code></td>
            <td>let x = 'santi';</td>
          </tr>
          <tr>
            <th>identidad/igualdad</th>
            <td>
              Comprueba si dos valores son iguales entre sí, y devuelve un valor
              de <code className="module-yellow">true/false</code> (booleano).
            </td>
            <td>===</td>
            <td>let x = 3; <br />
              x <code className="module-yellow">===</code> 4;;</td>
          </tr>
        </table>
        <br />
      </div>
    </div>
  );
};
