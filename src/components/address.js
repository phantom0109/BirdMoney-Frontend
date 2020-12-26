import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Address = (props) => {
  const classes  = props.style;
  const [address, setAddress] = useState("");
  const [error, setError] = useState(null);

  return (
    <form className={classes.form} onSubmit={props.onUserSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="ethaddress"
        // hintText="ETH"
        label="Analyse ETH address"
        name="ethaddress"
        autoComplete="eth address"
        autoFocus
        onInput={(e) => setAddress(e.target.value)}
        value={props.valueOfUserInput}
        onChange={props.onUserInputChange}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Go
      </Button>
    </form>
  );
};

export default Address;
