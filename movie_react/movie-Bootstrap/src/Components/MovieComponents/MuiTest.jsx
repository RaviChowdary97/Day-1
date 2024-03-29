import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import namingContext from "../../utilis_usecontext/namingContext";
import cartContext from "../../utilis_movie/cartContext";
import { Counter } from "./Counter";

export default function MuiTest({ name, poster, rating, summary, id }) {
  const datactxt = useContext(namingContext);
  const [cartUCtxt, setcartUCtxt] = useContext(cartContext);

  // console.log("Id is ",id)
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [ctxshow, setctxtShow] = useState(false);

  const ratingStyle = {
    // backgroundColor:"pink"
    color: rating > 8 ? "green" : "red",
  };

  return (
    <Card sx={{ width: "300px", margin: "0px 5px 5px 5px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={rating}
      />
      <CardMedia
        component="img"
        height="194"
        image="https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG"
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <Counter />

        {/* UseContextNaming Replace Summary */}
        <IconButton
          aria-label="share"
          onClick={() => {
            setctxtShow(!ctxshow);
            setShow(false);
          }}
        >
          <AcUnitIcon />
        </IconButton>

        {/* Use Context Cart */}
        <IconButton
          aria-label="share"
          onClick={() => setcartUCtxt(cartUCtxt + 1)}
        >
          <AddCircleOutlineIcon />
        </IconButton>

        {/* Summary Icon */}
        <IconButton
          aria-label="share"
          onClick={() => {
            setShow(!show);
            setctxtShow(false);
          }}
        >
          {show ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </IconButton>
      </CardActions>
      {/* Summary */}

      {show && (
        <CardContent>
          {" "}
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography>{" "}
        </CardContent>
      )}

      {ctxshow && (
        <CardContent>
          {" "}
          <Typography variant="body2" color="text.secondary">
            UseContext01:{datactxt.ctxtchildName} || UseContext02:
            {datactxt.ctxchildnickname}
          </Typography>{" "}
        </CardContent>
      )}
    </Card>
  );
}
