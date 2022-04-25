import { FormProvider } from "./contexts/FormContext";
import { Routers } from "./router";
import {DefaultTheme ,ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import theme from './styles/theme';
import { ToastContainer } from "react-toastify";





export default function App() {
  return (
    <>
      <ThemeProvider theme={theme} >
        <ToastContainer autoClose={2000} />
        <GlobalStyle />
        <FormProvider>
          <Routers />
        </FormProvider>
      </ThemeProvider>
    </>
  );
}


