import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import cartContext from "../utilis_movie/cartContext";

function Navbar() {
  const navigate = useNavigate();
  const cartValUCtxt = useContext(cartContext);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            BigShow
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }} onClick={() => navigate("/")}>
              Home
            </Button>
            <Button
              sx={{ color: "#fff" }}
              onClick={() => navigate("/addmovie")}
            >
              Add Movie
            </Button>
            <Button
              sx={{ color: "#fff" }}
              onClick={() => navigate("/addcolor")}
            >
              Add Color
            </Button>

            <Button
              sx={{ color: "#fff" }}
              onClick={() => navigate("/propdrilling")}
            >
              Prodrilling
            </Button>

            <Button
              sx={{ color: "#fff" }}
              onClick={() => navigate("/usecontext")}
            >
              UseContext
            </Button>
            <Button sx={{ color: "#fff" }}>UC-Cart {cartValUCtxt}</Button>
            <Button
              sx={{ color: "#fff" }}
              onClick={() => navigate("/tictactoe")}
            >
              TicTacToe
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav></nav>
      <Box component="main" sx={{ p: 3 }}></Box>
    </Box>
  );
}

export default Navbar;
