import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Select,
  MenuItem,
  Switch,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const Navbar = () => {
  const { currency, setCurrency, themeMode, setThemeMode } =
    useContext(GlobalContext);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const [active,setActive]=useState(1)

  const toggleTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  const navLinks = (
    <Box sx={{ display: "flex", gap: 5, alignItems: "center" }}>
      <Link to="/" onClick={()=>setActive(1)} style={{ textDecoration: "none",padding:'5px 15px',borderRadius:4, color: "inherit" ,fontSize:14.5,backgroundColor:active==1&&"rgba(255, 255, 255, 0.2)"}}>
        HOME
      </Link>
  
      <Link
       onClick={()=>setActive(2)} 
        to="/exchange-rates"
        style={{ textDecoration: "none",padding:'5px 15px',borderRadius:4, color: "inherit" ,fontSize:14.5,backgroundColor:active==2&&"rgba(255, 255, 255, 0.2)"}}
      >
        EXCHANGE RATES(LIVE)
      </Link>
      <Link
       onClick={()=>setActive(3)} 
      to="/about" style={{ textDecoration: "none",padding:'5px 15px',borderRadius:4, color: "inherit" ,fontSize:14.5,backgroundColor:active==3&&"rgba(255, 255, 255, 0.2)"}}>
        ABOUT
      </Link>
      <Link
       onClick={()=>setActive(4)} 
        to="/error-page"
        style={{ textDecoration: "none",padding:'5px 15px',borderRadius:4, color: "inherit" ,fontSize:14.5,backgroundColor:active==4&&"rgba(255, 255, 255, 0.2)"}}
      >
        ERROR PAGE
      </Link>
    
       <Switch checked={themeMode === "dark"} onChange={toggleTheme} />
  

    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Loan Calculator</Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <>
              {navLinks}

             
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 200 }} onClick={() => setDrawerOpen(false)}>
          <List>
            <ListItem button component={Link} to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/exchange-rates" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItemText primary="Exchange Rates" />
            </ListItem>
            <ListItem button component={Link} to="/about" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItemText primary="About" />
            </ListItem>
          

            <ListItem>
              <Typography variant="body2">Dark Mode</Typography>
              <Switch checked={themeMode === "dark"} onChange={toggleTheme} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
