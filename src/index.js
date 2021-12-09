import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AppProvider } from './Hooks/context'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
    
const breakpointValues = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const theme = createMuiTheme({ breakpoints: { values: breakpointValues } });

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      
      <Router>
      <App />
      </Router>
      
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
