import React, { Fragment, useState } from 'react';
import { Container, Grid as G, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Encrypter from "./Components/Encrypter.component.jsx";

const Grid = props => <G container {...props} />
const Item = props => <G xs={6} item {...props} />

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: "white",
    cursor: "pointer"
  }
}));

function App() {
  const [cryption, setCryption] = useState("encrypt");

  const classes = useStyles();
  function switchToEncrypt() {
    setCryption("encrypt")
  }
  function switchToDecrypt() {
    setCryption("decrypt")
  }
  return (
    <Fragment>
      <Container>
        <Grid justify="center">
          <Item xs={6}>
            <Grid justify="center">
              <Item container xs={6} md={3} justify="center">
                <Chip label="Encrypt" className={classes.chip} onClick={switchToEncrypt}></Chip>
              </Item>
              <Item container xs={6} md={3} justify="center">
                <Chip label="Decrypt" className={classes.chip} onClick={switchToDecrypt}></Chip>
              </Item>
            </Grid>
          </Item>
        </Grid>

        <Grid justify="center">
          <Item xs={12} md={6}>
            <Grid justify="center">
              <Encrypter cryption={cryption} />
            </Grid>
          </Item>
        </Grid>
      </Container>
    </Fragment >
  );
}

export default App;
