import { Box } from "@chakra-ui/react";
import { Routes,Route } from "react-router-dom";
import { CreatePage } from "./Pages/CreatePage";
import { Navbar } from "./component/Navbar";
import HomePage from "./Pages/Home";

export function App() {
  return (
    <>
    <Box minH={"100vh"}>
      {/* creation des route*/}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreatePage/>} />

      </Routes>
      

    </Box>
    </>
  );
}
export default App;