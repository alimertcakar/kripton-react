import React, { useState } from 'react';

import { Container, Grid as G, Chip, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useGlobalStyles from "./useGlobalStyles";

import Encrypter from "./Components/Encrypter.component.jsx";
import StandardMotion from "./Components/StandardMotion.component";
import Header from "./Components/Header.component.jsx";

const Grid = props => <G container {...props} />
const Item = props => <G xs={6} item {...props} />

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "100vh"
  },
  chip: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: "white",
    cursor: "pointer"
  },
  chipContainer: {
    marginTop: "25px",
  },
  section: {
    minHeight: "100vh"
  }
}));

function App() {
  const [cryption, setCryption] = useState("encrypt");
  useGlobalStyles();
  const classes = useStyles();
  function switchToEncrypt() {
    setCryption("encrypt")
  }
  function switchToDecrypt() {
    setCryption("decrypt")
  }
  return (
    <Container className={classes.container}>
      <section className={classes.container}>
        <Header />
        <Grid justify="center" >
          <Item xs={12} sm={6} className={classes.chipContainer}>
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
      </section>
      <section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nulla culpa aspernatur nostrum provident iste ad, ullam nisi odit beatae fugit libero ipsam, corporis ratione, sed necessitatibus dicta quia distinctio. Voluptate sunt, maxime nihil odit velit officiis, minima, nam quo consectetur at corrupti sit dolores minus delectus perferendis est fugiat laudantium. Voluptas, repellendus ipsum. Corporis quis accusantium velit eveniet. Nobis incidunt dicta totam assumenda iusto voluptate. Porro delectus temporibus nisi nesciunt ratione neque vero unde similique assumenda minus. Animi necessitatibus error omnis quis, obcaecati quod culpa tempore magni tempora officia deleniti quo suscipit voluptates, aliquid totam molestias ab eum quas.
      </section>
    </Container>
  );
}

export default App;
