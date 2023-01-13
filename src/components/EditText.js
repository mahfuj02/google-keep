import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Box, Divider, Stack } from "@mui/material";

export default function FormDialog({ handleClose, open }) {
  return (
    <Box sx={{ width: "80%" }}>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
        <DialogContent>
          <Stack>
            <TextField
              sx={{ input: { fontSize: "20px" } }}
              placeholder="Title"
              variant="standard"
              defaultValue="This is title"
              InputProps={{
                disableUnderline: true,
              }}
            />
            <Divider />
            <TextField
              placeholder="Take a note..."
              variant="standard"
              defaultValue="this is lorem sdfasdlsdf sdfhisd"
              multiline
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save Change</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
