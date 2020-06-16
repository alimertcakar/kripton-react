import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import StandardMotion from "./StandardMotion.component";
import { Grid as G, Button, Typography } from "@material-ui/core";
import kripton from "@alimert/kripton";

const Item = (props) => <G item {...props} xs={12} />;

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  passwordText: {
    margin: theme.spacing(1),
  },
  textfield: {
    margin: theme.spacing(1),
    width: "100%",
    "& .MuiTextField-root": {
      width: "100%",
    },
  },
  button: {
    margin: theme.spacing(1),
    borderRadius: "inherit",
  },
}));

function Encrypter(props) {
  const classes = useStyles();
  const [password, setPassword] = useState([1, 9, 2, 3]);
  const [textValue, setTextValue] = useState("");
  const textRef = useRef(null);

  function cryption(e) {
    if (props.cryption === "encrypt") {
      setTextValue(kripton.encrypt(textValue, password));
    } else {
      setTextValue(kripton.decrypt(textValue, password));
    }
    textRef.current.value = textValue;
  }

  function updateTextValue(e) {
    setTextValue(e.target.value);
  }
  return (
    <>
      <Item className={classes.textfield}>
        <StandardMotion whileHover={{ scale: 1.05 }}>
          <TextField
            inputRef={textRef}
            id="decyrpt-textfield"
            label="Encrypt text"
            variant="outlined"
            onChange={updateTextValue}
          />
        </StandardMotion>
      </Item>
      <Item className={classes.textfield}>
        <StandardMotion whileHover={{ scale: 1.05 }}>
          <TextField
            id="decyrpt-textfield"
            label="Password"
            rows={1}
            type="number"
            variant="outlined"
            onChange={(e) =>
              setPassword(e.target.value.split("").map((v) => +v))
            }
          />
          <Typography className={classes.passwordText}>Only numbers</Typography>
        </StandardMotion>
      </Item>
      <Item
        container
        justify={props.cryption === "decrypt" ? "flex-end" : "flex-start"}
      >
        <StandardMotion
          whileTap={{ borderRadius: "50%" }}
          transition={{ borderRadius: { duration: 1.5 }, ease: "easeIn" }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={cryption}
            className={classes.button}
          >
            {props.cryption}
          </Button>
        </StandardMotion>
      </Item>
    </>
  );
}

export default Encrypter;
