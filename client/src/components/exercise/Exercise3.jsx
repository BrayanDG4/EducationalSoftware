import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { useExerciseStore } from "../../store/exerciseStore.js";

export default function Exercise3() {
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
    } else if (value === "worst1") {
      setHelperText("Mal loopito, intenta otra vez!");
      setError(true);
    } else if (value === "worst2") {
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
        <h1 className="bg-slate-400 rounded-md font-semibold p-1">3. Selecciona la opción correcta</h1>

        <FormLabel id="demo-error-radios">que palabra reservada pertenece a los condicionales...</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="worst1"
            control={<Radio />}
            label="for"
          />
          <FormControlLabel
            value="best"
            control={<Radio />}
            label="if"
          />
          <FormControlLabel
            value="worst2"
            control={<Radio />}
            label="do while"
          />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          mirar respuesta
        </Button>
      </FormControl>
    </form>
  );
}
