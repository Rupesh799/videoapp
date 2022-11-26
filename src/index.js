import { ColorModeScript , ChakraProvider , theme} from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeSwitcher } from './ColorModeSwitcher';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    {/* ChakraProvider is used to wrap the main app component */}
   <ChakraProvider theme={theme}> 
   <ColorModeSwitcher/>
   <App />
   </ChakraProvider>
  </StrictMode>
);



