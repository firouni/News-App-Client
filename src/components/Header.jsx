import React, { useState } from "react";
import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(23,88,115,1) 0%, rgba(43,124,133,1) 28%, rgba(135,172,163,1) 55%, rgba(12,20,70,1) 95%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">Blogs App</Typography>
        {isLoggedIn && <Box display="flex" margin={"auto"}>
          <Tabs
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
            <Tab LinkComponent={Link} to="/myblogs" label="My Blogs" />
            <Tab LinkComponent={Link} to="/editorial" label="Add Blogs" />
          </Tabs>
        </Box>}
        <Box display="flex" marginLeft="auto" alignItems="flex-end">
          {!isLoggedIn && <>
            <Button
              LinkComponent={Link}
              to="/auth"
              variant="outlined"
              sx={{ margin: 1, borderRadius: 10 }}
            >
              Login
            </Button>
            <Button
              LinkComponent={Link}
              to="/auth"
              variant="outlined"
              sx={{ margin: 1, borderRadius: 10 }}
            >
              Sign Up
            </Button>
          </>}
          {isLoggedIn && <Button
            onClick={()=>dispatch(authActions.setLogout())}
            LinkComponent={Link}
            to="/auth"
            variant="outlined"
            sx={{ margin: 1, borderRadius: 10 }}
          >
            logout
          </Button>}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;