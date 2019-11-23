import React from "react";
import WelcomeArea from "../components/welcomeArea";

//MUI
import Grid from "@material-ui/core/Grid";

export default function home() {
  return (
    <Grid container>
      <Grid item sm={3} xs={0} className="red accent-1 white-text"></Grid>
      <Grid item sm={6} xs={12} className="red accent-1 white-text">
        <WelcomeArea />
      </Grid>
      <Grid item sm={3} xs={0} className="red accent-1 white-text"></Grid>
    </Grid>
  );
}
