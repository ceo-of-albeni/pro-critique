import React from "react";
import { AppBar, Tabs, Tab, Box } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const NavigationBar = styled(AppBar)(({ theme }) => ({
  top: 0,
  position: "sticky",
  margin: 0,
}));

const CenteredTabs = styled(Tabs)({
  justifyContent: "center",
  "& .MuiTabs-flexContainer": {
    justifyContent: "center",
  },
});

const UnderNavbar = () => {
  const navigate = useNavigate();

  return (
    <NavigationBar color="default">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CenteredTabs value={false} variant="scrollable" scrollButtons="auto">
          <Tab
            label="Android-разработка"
            onClick={() => navigate(`/courses/android`)}
          />
          <Tab
            label="Front-End"
            onClick={() => navigate(`/courses/frontend`)}
          />
          <Tab label="Back-End" onClick={() => navigate(`/courses/backend`)} />
          <Tab
            label="Full-stack"
            onClick={() => navigate(`/courses/fullstack`)}
          />
          <Tab label="UX/UI" onClick={() => navigate(`/courses/uxui`)} />
          <Tab
            label="IOS-разработка"
            onClick={() => navigate(`/courses/ios`)}
          />
        </CenteredTabs>
      </Box>
    </NavigationBar>
  );
};

export default UnderNavbar;
