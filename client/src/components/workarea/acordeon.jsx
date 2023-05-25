import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaArrowCircleDown } from "react-icons/fa";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<FaArrowCircleDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <div className="font-bold">
              <h1>
                PE1: Módulo 1. Introducción a JavaScript y a la Programación
                Informática
              </h1>
            </div>
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            <div className="font-semibold leading-10">
              <a className="" href="#unida2">
                1.0 Bienvenido a fundamentos JavaScript
              </a>

              <a href="s">
                <p> 1.1 Sección 1 - Introducción a la programación</p>
              </a>

              <a href="c">
                <p>1.2 Sección 2 – Introducción a Python</p>
              </a>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className=" font-bold">
            <div className="font-bold ">
              <h1>
                PE1: Módulo 2. Tipos de datos, Variables, Operaciones Básicas de
                Entrada y Salida, Operadores Básicos
              </h1>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="font-semibold leading-10">
              <a className="" href="x">
                2.1. Sección 1 – El Programa "¡Hola, Mundo!"
              </a>

              <a href="s">
                <p> 2.2. Sección 2 – Literales de Python</p>
              </a>

              <a href="c">
                <p>
                  2.3. Sección 3 – Operadores - herramientas de manipulación de
                  datos
                </p>
              </a>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <div className="font-bold ">
              <h1>
                PE1: Módulo 3. Valores Booleanos, Ejecución Condicional, Bucles,
                Listas y su procesamiento, Operaciones Lógicas y de Bit a Bit
              </h1>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="font-semibold leading-10">
              <a className="" href="x">
                3.1. Sección 1 – Cómo tomar decisiones en Python
              </a>

              <a href="s">
                <p> 3.2. Sección 2 – Bucles en Python</p>
              </a>

              <a href="c">
                <p>
                  3.3. Sección 3 – Operadores lógicos y operaciones bit a bit en
                  Python
                </p>
              </a>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <div className="font-bold ">
              <h1>
                PE1: Módulo 4. Funciones, Tuplas, Diccionarios, Excepciones y
                Procesamiento de Datos
              </h1>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="font-semibold leading-10">
              <a className="" href="x">
                4.1. Sección 1 – Funciones
              </a>

              <a href="s">
                <p> 4.3. Sección 3 – Devolviendo el resultado de una función</p>
              </a>

              <a href="c">
                <p>4.3. Sección 3 – Devolviendo el resultado de una función</p>
              </a>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* ---------------------------- */}
      {/* <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}

    </div>
  );
}
