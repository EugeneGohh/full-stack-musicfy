import React from "react";
import { Box } from "@chakra-ui/layout";
import SideBar from "./sidebar";

const PlayerLayout = ({ children }) => {
  return (
    /* 100% on width & height depending on screen */
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px">
        <SideBar />
      </Box>

      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>

      <Box position="absolute" left="0" bottom="0">
        player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
