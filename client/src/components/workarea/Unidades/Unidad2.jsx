import fondo from "../../../assets/modulos/img-modulo2-1.gif";

export const Unidad2 = () => {
  return (
    <div className="h-full overflow-y-scroll flex flex-col font-semibold">
      <div className="flex flex-col">
        <img
          src={fondo}
          alt="imagen de programacion"
          className="rounded-3xl h-96 object-cover"
        />

        <h1 id="decision" className="module-title">
          Puedes tomar una decision !!!
        </h1>

        <p>
          Las personas, junto con otros animales, hacen elecciones
          constantemente que tienen un impacto en sus vidas, desde las
          decisiones más triviales como que comer hasta irse a marte o venus
        </p>
        <hr />
      </div>

      {/*condicionales */}
      <div className="flex flex-col mt-3">
        <h1 id="declaracion" className="module-title">
          Declaraciones <span className="module-purple">if ... else</span>
        </h1>

        <p>
          Una sintaxis básica <code>if...else</code> luce así.
        </p>

        <pre className="my-6 p-2 bg-slate-400 rounded-md ">
          {`if (condición) {
  ejecuta código de ser verdadero (true) 
}else{
   ejecuta este otro código  (false) }`}
        </pre>

        <p>
          El código es fácil de comprender: dici "si{" "}
          <code className="module-yellow">(if)</code> la condición retorna
          verdadero (true), entonces ejecute el código A <br />
          sino <code className="module-yellow">(else)</code> ejecute el código
          B"
        </p>

        <hr />
        <h1 id="elseif" className="module-title">
          <span className="module-blue">else if</span>
        </h1>
        <p>
          Hay una forma de encadenar opciones ( resultados adicionales) a
          if...else <br /> usando{" "}
          <span className="font-bold module-blue">else if</span>. Cada opción
          extra requiere un bloque adicional para poner en medio de bloque if()
          ... y else ... <br /> <br /> — Vea el siguiente ejemplo un poco más
          complicado, que podría ser parte de una aplicación para un simple
          pronóstico del tiempo:
        </p>

        <pre className="my-6 p-2 bg-slate-400 rounded-md whitespace-pre-wrap">{`
         if (eleccion === 'soleado') {
            'El día esta agradable y ¡Use pantalones cortos!';
        } else if (eleccion === 'lluvioso') {
            'Está lloviendo, un abrigo para lluvia.';
        } else if (eleccion === 'nevando') {
            'Está nevando ─ mejor es quedarse en casa ;
        } else if (eleccion === 'nublado') {
            'No está lloviendo, pero el cielo está gris';
        } else {
             'por ahora nada';
        }`}</pre>

        <hr />
        <h1 id="anidado" className="module-title">
          Anidando <span className="module-purple">if...else</span>{" "}
          <span className="module-yellow">
            (una declaracion dentro de otra){" "}
          </span>
        </h1>

        <p>
          Está perfectamente permitido poner una declaración{" "}
          <span className="module-purple">if...else</span> dentro de otra
          declaración <span className="module-purple">if...else</span> para
          anidarlas. <br />
          -Por ejemplo, podemos actualizar nuestra aplicación del clima para
          mostrar una serie de opciones dependiendo de cual sea la temperatura:
        </p>

        <pre className="my-6 p-2 bg-slate-400 rounded-md whitespace-pre-wrap">
          {`if (elección === 'soleado') {
  if (temperatura < 86) {
    'Está a ' + temperatura + ' grados afuera — agradable y soleado. Vamos a la playa, o al parque, y comer helado.';
  } else if (temperatura >= 86) {
    'Está a ' + temperatura + ' grados afuera — ¡QUÉ CALOR! Si deseas salir, asegúrate de aplicarte bloqueador solar.';
  }
}`}
        </pre>

        <hr />
        <h1 id="declaracion" className="module-title">
          Operadores logicos
        </h1>

        <table>
          <tr>
            <td></td>
            <th>Explicacion</th>
            <th>Simbolo</th>
            <th>Ejemplo</th>
          </tr>
          <tr>
            <th>AND</th>
            <td>le permite encadenar dos o más expresiones para que <span className="module-yellow"> todas ellas</span> se tengan que evaluar individualmente true para que expresión entera retorne true</td>

            <td>&&</td>
            <td>{`if (eleccion === 'soleado' && temperatura < 86)`}</td>
          </tr>
          <tr>
            <th>OR</th>
            <td>
            le permite encadenar dos o más expresiones para que <span className="module-yellow">una o más </span> de ellas se tengan que evaluar individualmente true para que expresión entera retorne true..
            </td>
            <td>||</td>
            <td>
              {`if (carritoDeHelados || estadoDeLaCasa === 'en llamas') `}
            </td>
          </tr>
          <tr>
            <th>NOT</th>
            <td>
            el operador lógico NOT puede ser usado para negar una expresión.
            </td>
            <td>
              !
            </td>
            <td>{`if (!(carritoDeHelados || estadoDeLaCasa === 'en llamas'))`}</td>
          </tr>
        </table>
        <br />
      </div>
    </div>
  );
};
