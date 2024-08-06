import { Button } from "@mui/material";
import React from "react";
import { useNavigate,useLocation } from "react-router-dom";

function usePageViews() {
  let location = useLocation();
  React.useEffect((ga) => {
    ga.send(["pageview", location.pathname]);
  }, [location]);
}

const Error404Page = () => {

  const navigate = useNavigate();
  return (
    <>
    <br/><br/>
      <h1 color="error" style={{color:"red"}}>404 Page not found!</h1>
      <br/><br/>
      <Button variant="contained" onClick={() => navigate(-1)}>
        Go One Page Back!
      </Button>

      <Button variant="contained" style={{display:"none"}}>
        Go to Users!
      </Button>
    </>
  );
};

/*
function App() {
  usePageViews();
  return ;
} */

export default Error404Page;
