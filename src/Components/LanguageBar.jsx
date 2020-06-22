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
  iconButton: {
    "& .MuiIconButton-label": {
      border: `3px solid ${theme.palette.primary.main}`,
      borderRadius: "100%",
    },
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
      <IconButton
        onClick={() => setCurrentLang("tr")}
        className={classes.iconButton}
      >
        <Icon classes={{ root: classes.iconRoot }}>
          <img className={classes.imageIcon} src="/turkey.svg" alt="turkish" />
        </Icon>
      </IconButton>
      <IconButton
        onClick={() => setCurrentLang("en")}
        className={classes.iconButton}
      >
        <Icon classes={{ root: classes.iconRoot }}>
          <img className={classes.imageIcon} src="/uk.svg" alt="english" />
        </Icon>
      </IconButton>
    </React.Fragment>
  );
}

export default LanguageBar;
