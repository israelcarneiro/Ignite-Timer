import { ThemeProvider } from "styled-components";

import { Button } from "./components/Button";
import { GlobalStyle } from "./styles/global";

import { defaultTheme } from "./styles/themes/default";

export function App() {

  return (
    
    <ThemeProvider theme={defaultTheme}>
      <Button varient='primary' />
      <Button varient='secondary'/>
      <Button varient='success'/>
      <Button varient='danger'/>
      <Button />

      <GlobalStyle/>
    </ThemeProvider>
    
  )
}

