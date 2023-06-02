import fondoProgramacion from "../../../assets/modulos/img-modulo3-1.gif";
export function Unidad3() {
  return (
    <div className="h-full overflow-y-scroll flex flex-col font-semibold">
      <div className="flex flex-col">
        <img
          src={fondoProgramacion}
          alt="imagen de programacion"
          className="rounded-3xl h-96 object-cover "
        />

        <h1 id="" className="module-title ">
          Bucles
        </h1>

        <p>
          Los bucles ofrecen una forma rápida y sencilla de hacer algo
          repetidamente. <br /> <br />
          Puedes pensar en un bucle como una versión computarizada del juego en
          la que le dices a alguien que dé X pasos en una dirección y luego Y
          pasos en otra. <br /> <br />
          Por ejemplo, la idea "Ve cinco pasos hacia el este" se podría expresar
          de esta manera como un bucle:
        </p>

        <pre className="my-6 p-2 bg-slate-400 rounded-md whitespace-pre-wrap">{`for (let step = 0; step < 5; step++) {
    // Se ejecuta 5 veces, con valores del paso 0 al 4.
    console.log('Camina un paso hacia el este');
              }`}</pre>
      </div>
      <hr />

      {/*bucles*/}
      <div className="flex flex-col mt-3 ">
        <h1 id="declaracion" className="module-title">
          for
        </h1>

        <p>
          Un ciclo for se repite hasta que una condición especificada se evalúe
        </p>
        <br />
        <pre className="my-6 p-2 bg-slate-400 rounded-md">
          <p>
            Una declaración <code className="module-purple">for</code> tiene el
            siguiente aspecto:
          </p>

          {`for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización])
        instrucción`}
        </pre>

        <p>Cuando se ejecuta un bucle <code className="module-purple">for</code>, ocurre lo siguiente: </p>
        <br />
        <ol className="table-column-group ">
          <li><span className="module-yellow">1</span> Se ejecuta la expresión de iniciación expresiónInicial, si existe. Esta expresión normalmente inicia uno o más contadores de bucle, pero la sintaxis permite una expresión de cualquier grado de complejidad. Esta expresión también puede declarar variables.</li> <br />
          <li><span className="module-yellow">2</span> Se evalúa la expresión expresiónCondicional. Si el valor de expresiónCondicional es verdadero, se ejecutan las instrucciones del bucle. Si el valor de condición es falso, el bucle for termina. (Si la expresión condición se omite por completo, se supone que la condición es verdadera).</li> <br />
          <li><span className="module-yellow">3</span> Se ejecuta la instrucción. Para ejecutar varias instrucciones, usa una declaración de bloque ( ... ) para agrupar esas declaraciones.</li> <br />
          <li><span className="module-yellow">4</span> Si está presente, se ejecuta la expresión de actualización expresiónDeActualización.</li> <br />
          <li><span className="module-yellow">5</span> El control regresa al paso 2. </li>
        </ol>


        <hr />
        <h1 id="declaracion" className="module-title">
          DO While
        </h1>



      </div>
    </div>
  );
}
