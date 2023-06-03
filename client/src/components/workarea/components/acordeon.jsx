import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useModuleStore } from "../../../store/moduleStore";

export default function SimpleAccordion() {
  const { valor } = useModuleStore();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          onClick={(e) => {
            valor(0);
          }}
        >
          <Typography>
            <div className="font-bold">
              <h1>Módulo 1: <span className="font-semibold"> Introducción a JavaScript</span> </h1>
            </div>
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            <div className="font-semibold leading-10">
              <a href="#variables">
                <p>Sección 1 - Variables </p>
              </a>

              <a href="#tipovariables">
                <p>Sección 2 - Tipo de Variables </p>
              </a>

              <a href="#creacionvariables">
                <p> Sección 3 - Creacion de Variables</p>
              </a>

              <a href="#tipodatos">
                <p> Sección 4 - Tipos de Datos</p>
              </a>

              <a href="#comentarios">
                <p> Sección 5 - Comentarios</p>
              </a>

              <a href="#operadores">
                <p> Sección 6 - Operadoes</p>
              </a>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          onClick={(e) => {
            valor(1);
          }}
        >
          <Typography className=" font-bold">
            <div className="font-bold ">
              <h1>Módulo 2: <span className="font-semibold"> Condicionales</span></h1>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="font-semibold leading-10">
              <a href="#decision">Seccion 1 - Tomando Desiciones</a>

              <a href="#declaracion">
                <p>Seccion 2 - Declaraciones if ... else </p>
              </a>

              <a href="#elseif">
                <p>Seccion 3 - Else If</p>
              </a>

               <a href="#elseif">
                <p>Seccion 4 - Anidado if...else</p>
              </a>
               <a href="#elseif">
                <p>Seccion  Extra - Operadores logicos</p>
              </a>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          onClick={(e) => {
            valor(2);
          }}
        >
          <Typography>
            <div className="font-bold ">
              <h1>Módulo 3:  <span className="font-semibold"> Bucles</span></h1>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
            <div className="font-semibold leading-10">
              <a  href="for">
              <p>  Sección 1 - For </p> 
              </a>

              <a href="dowhile">
                <p>  Sección 2 - Do While</p>
              </a>

              <a href="while">
                <p>
                  Sección 3 - while 
                </p>
              </a>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>



    //   {/* ---------------------------- */}
    //   <Accordion disabled>
    //     <AccordionSummary
    //       expandIcon={<ExpandMoreIcon />}
    //       aria-controls="panel3a-content"
    //       id="panel3a-header"
    //     >
    //       <Typography>Disabled Accordion</Typography>
    //     </AccordionSummary>
    //   </Accordion>

    // </div>
  );
}
