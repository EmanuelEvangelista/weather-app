import AppRoutes from './routes/AppRoutes.jsx';
import './App.css';
import { AlertProvider } from './context/alertContext.jsx';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
 

  return (
    <>
    <ChakraProvider>
    <AlertProvider>
      <AppRoutes />
    </AlertProvider>
    </ChakraProvider>
    </>
  )
}

export default App
