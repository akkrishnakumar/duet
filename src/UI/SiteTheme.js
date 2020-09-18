import { createMuiTheme } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: deepOrange,
        secondary: {
            main: '#ff528b',
        },
    }
});

export default theme