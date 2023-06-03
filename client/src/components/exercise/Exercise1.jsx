import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { useExerciseStore } from "../../store/exerciseStore.js";

export default function Exercise1() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Elegir sabiamente");
  const { increment } = useExerciseStore();

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "best") {
      setHelperText("lo entendiste!");
      setError(false);
      increment();
    } else if (value === "worst") {
      setHelperText("Mal loopito, intenta otra vez!");
      setError(true);
    } else {
      setHelperText("Porfavor selecciona un opcion.");
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <h1 className="bg-slate-400 rounded-md font-semibold p-1">
          1. selecciona si la sintaxis es...
        </h1>
        <FormLabel id="demo-error-radios">
          conts myVar = "Hola Erney espero te guste el programa";
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="best"
            control={<Radio />}
            label="Incorrecto"
          />
          <FormControlLabel
            value="worst"
            control={<Radio />}
            label="Correcto"
          />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          MIRAR RESPUESTA
        </Button>
      </FormControl>
    </form>
  );
}
