import {  Divider, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import FormDialog from "./EditText";

export default function Note({themeType}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid container spacing={2} >
        <Paper
          onClick={handleClickOpen}
          elevation={4}
          sx={{ m: 2, p: "10px", width:{ xs:'90%', md:"25%"},  border: themeType === 'dark' ? "1px solid #5F6368" : "" }}
        >
          <Typography variant="h6">Here is Title</Typography>
          <Divider sx={{ my: "5px" }}></Divider>
          <Typography variant="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </Typography>
        </Paper>
        <Paper
          onClick={handleClickOpen}
          elevation={4}
          sx={{ m: 2, p: "10px", width:{ xs:'90%', md:"25%"},  border: themeType === 'dark' ? "1px solid #5F6368" : "" }}
        >
          <Typography variant="h6">Here is Title</Typography>
          <Divider sx={{ my: "5px" }}></Divider>
          <Typography variant="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </Typography>
        </Paper>
        <Paper
          onClick={handleClickOpen}
          elevation={4}
          sx={{ m: 2, p: "10px", width:{ xs:'90%', md:"25%"},  border: themeType === 'dark' ? "1px solid #5F6368" : "" }}
        >
          <Typography variant="h6">Here is Title</Typography>
          <Divider sx={{ my: "5px" }}></Divider>
          <Typography variant="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </Typography>
        </Paper>
        <Paper
          onClick={handleClickOpen}
          elevation={4}
          sx={{ m: 2, p: "10px", width:{ xs:'90%', md:"25%"},  border: themeType === 'dark' ? "1px solid #5F6368" : "" }}
        >
          <Typography variant="h6">Here is Title</Typography>
          <Divider sx={{ my: "5px" }}></Divider>
          <Typography variant="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </Typography>
        </Paper>
        <Paper
          onClick={handleClickOpen}
          elevation={4}
          sx={{ m: 2, p: "10px", width:{ xs:'90%', md:"25%"},  border: themeType === 'dark' ? "1px solid #5F6368" : "" }}
        >
          <Typography variant="h6">Here is Title</Typography>
          <Divider sx={{ my: "5px" }}></Divider>
          <Typography variant="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </Typography>
        </Paper>
        <FormDialog handleClose={handleClose} open={open} />
        
        
        
      </Grid>
    </>
  );
}
