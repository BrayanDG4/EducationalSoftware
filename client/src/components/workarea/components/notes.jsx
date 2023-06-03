import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Notes() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Nota 1" {...a11yProps(0)} />
          <Tab label="Nota 2" {...a11yProps(1)} />
          <Tab label="Nota 3" {...a11yProps(2)} />
        </Tabs>
      </Box>{" "}
      <TabPanel value={value} index={0}>
        <p className=" font-medium"> 
        <span className="module-purple font-bold">Nota</span>: todas las líneas en JS deben acabar en punto y coma <code className="module-purple font-bold">(;)</code> para
          indicar que es ahí donde termina la declaración. Si no los incluyes
          puedes obtener <span className="module-purple font-bold">resultados inesperados.</span>
        </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className=" font-medium">
          <span className="module-purple font-bold">Nota</span>:
          JavaScript distingue entre mayúsculas y minúsculas.
          <span className="module-purple font-bold">miVariable</span> es
          distinto a{" "}
          <span className="module-purple font-bold">mivariable</span>.Si
          estás teniendo problemas en tu código, revisa las mayúsculas y
          minúsculas.
        </p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p className=" font-medium">
          <span className="module-purple font-bold">Nota</span>: puedes
          llamar a una variable con casi cualquier nombre, pero hay algunas
          <span className="module-purple font-bold">restricciones</span>{" "}
        </p>
      </TabPanel>
    </Box>
  );
}
