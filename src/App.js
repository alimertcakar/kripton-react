import React, { useState, createContext } from 'react';

import { Container, Grid as G, Chip, Box, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useGlobalStyles from "./useGlobalStyles";

import Encrypter from "./Components/Encrypter.component.jsx";
import StandardMotion from "./Components/StandardMotion.component";
import Header from "./Components/Header.component.jsx";

import translation from "./translation.json";

export const LanguageContext = createContext();
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
  const [currentLang, setCurrentLang] = useState("tr");
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
    <div>
      <LanguageContext.Provider value={[currentLang, setCurrentLang]}>
        <Container className={classes.container}>
          <section className={classes.container}>
            <Header description={translation[currentLang].description} />
            <Grid justify="center" >
              <Item xs={12} sm={6} className={classes.chipContainer}>
                <Grid justify="center">
                  <Item container xs={6} md={3} justify="center" >
                    <StandardMotion animate={{ scale: 1.5 }}>
                      <Chip label={translation[currentLang].encrypt} className={classes.chip} onClick={switchToEncrypt} disabled={cryption === "decrypt" ? false : true} clickable={false} ></Chip>
                    </StandardMotion>
                  </Item>
                  <Item container xs={6} md={3} justify="center">
                    <StandardMotion animate={{ scale: 1.5 }}>
                      <Chip label={translation[currentLang].decrypt} className={classes.chip} onClick={switchToDecrypt} disabled={cryption === "encrypt" ? false : true} clickable={false} ></Chip>
                    </StandardMotion>
                  </Item>
                </Grid>
              </Item>
            </Grid>

            <Grid justify="center">
              <Item xs={12} md={6}>
                <Box p={2}>
                  <Grid justify="center">
                    <Encrypter cryption={cryption} buttonText={{ encrypt: translation[currentLang].encrypt, decrypt: translation[currentLang].decrypt }} textfieldInfo={{ first: translation[currentLang]["encrypt text"], second: translation[currentLang].password, onlyNumbers: translation[currentLang]["only numbers"] }} />
                  </Grid>
                </Box>
              </Item>
            </Grid>
          </section>
          <section>
            <Typography>
              Adından da anlaşıldığı üzere bu algoritmayı Jul Sezar gönderdiği mesajların düşmanların tarafında ele geçirilirse o mesajı anlamaması için oluşturulmuştur. Bu algoritma en temel şifreleme olarak kabul edilmektedir. Günümüzde şifreleme için pek güvenli sayılmamaktadır. Çünkü çözme olasılığı 1/25 dır. Eğer şifreleme türü bilinmiyorsa bu daha zor olacaktır ama biliniyorsa en fazla 25 denemede şifre kırılacaktır. Günümüzde hiçbir şifreleme çeşidi kırılamaz değildir. Bazı şifreler 10 günde kırılırken bazı şifreler ise 100 yılda kırılabilir. Bir şifreyi kırma süreciniz, bilgisayarınızın gücüne göre değişecektir.
          </Typography>
          </section>
        </Container>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
