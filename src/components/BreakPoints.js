import React from 'react'
import { MuiThemeProvider, createMuiTheme, createBreakpoints } from "material-ui/styles";
    
const breakpointValues = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const theme = createMuiTheme({ breakpoints: { values: breakpointValues } });

function BreakPoints() {
    return (
        <div>
            
        </div>
    )
}

export default BreakPoints
