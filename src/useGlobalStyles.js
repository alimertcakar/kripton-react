import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    "@global": {
        body: {
            margin: 0,
            minHeight: "100vh"
        },
        "#root": {
            margin: 0,
            minHeight: "100vh"
        }
    }
}));

export default useStyles;