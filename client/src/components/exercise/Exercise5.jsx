import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

export default function Exercise5() {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Elegir sabiamente");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "best1") {
      setHelperText("lo entendiste!");
      setError(false);
    } else if (value === "best2") {
      setHelperText("lo entendiste!");
      setError(false);
    } else if (value === "best3") {
      setHelperText("lo entendiste!");
      setError(false);
    } else if (value === "worst1") {
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
        <FormLabel id="demo-error-radios">no es un tipo de dato valido</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="best1" control={<Radio />} label="string" />
          <FormControlLabel
            value="best2"
            control={<Radio />}
            label="booleano"
          />
          <FormControlLabel value="worst1" control={<Radio />} label="Ernit" />
          <FormControlLabel value="best3" control={<Radio />} label="numero" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          mirar respuesta
        </Button>
      </FormControl>
    </form>
  );
}
