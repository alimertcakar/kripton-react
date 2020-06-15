import React, { Fragment, useState } from 'react';
import { Container, Grid as G, Chip, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Encrypter from "./Components/Encrypter.component.jsx";
import StandardMotion from "./Components/StandardMotion.component";
import Header from "./Components/Header.component.jsx";

const Grid = props => <G container {...props} />
const Item = props => <G xs={6} item {...props} />

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(2),
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

        <Header />

        <Grid justify="center">
          <Item xs={6}>
            <Grid justify="center">
              <Item container xs={6} md={3} justify="center" >
                <StandardMotion animate={{ scale: 1.5 }}>
                  <Chip label="Encrypt" className={classes.chip} onClick={switchToEncrypt} disabled={cryption === "decrypt" ? false : true} clickable={false} ></Chip>
                </StandardMotion>
              </Item>
              <Item container xs={6} md={3} justify="center">
                <StandardMotion animate={{ scale: 1.5 }}>
                  <Chip label="Decrypt" className={classes.chip} onClick={switchToDecrypt} disabled={cryption === "encrypt" ? false : true} clickable={false} ></Chip>
                </StandardMotion>
              </Item>
            </Grid>
          </Item>
        </Grid>

        <Grid justify="center">
          <Item xs={12} md={6}>
            <Box p={2}>
              <Grid justify="center">
                <Encrypter cryption={cryption} />
              </Grid>
            </Box>
          </Item>
        </Grid>
      </Container>
    </Fragment >
  );
}

export default App;
