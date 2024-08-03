import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import Landing from "./features/landing/Landing";
import theme from "@utils/theme";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Landing />
    </ChakraProvider>
  </React.StrictMode>
);
