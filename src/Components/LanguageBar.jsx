import React, { useContext } from "react";
import { Icon } from "@material-ui/core/";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { LanguageContext } from "../App";

const useStyles = makeStyles((theme) => ({
  imageIcon: {
    height: "100%",
  },
  iconRoot: {
    textAlign: "center",
  },
}));

function LanguageBar() {
  const classes = useStyles();
  const [currentLang, setCurrentLang] = useContext(LanguageContext);

  function updateLanguage(lang) {
    setCurrentLang(lang);
  }
  return (
    <React.Fragment>
      <IconButton onClick={() => setCurrentLang("tr")}>
        <Icon classes={{ root: classes.iconRoot }}>
          <img className={classes.imageIcon} src="/turkey.svg" alt="turkish" />
        </Icon>
      </IconButton>
      <IconButton onClick={() => setCurrentLang("en")}>
        <Icon classes={{ root: classes.iconRoot }}>
          <img className={classes.imageIcon} src="/uk.svg" alt="english" />
        </Icon>
      </IconButton>
    </React.Fragment>
  );
}

export default LanguageBar;
