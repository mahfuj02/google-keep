import { Box, Divider, Stack, TextField } from "@mui/material";

export default function CreateText() {
  return (
    <Box align="center">
      <Stack
        sx={{
          my: 5,
          padding: "10px",
          borderRadius: 2,
          border: "1px solid #5F6368",        
          width: { md: "60%" },
          boxShadow: 5,
        }}
      >
        <TextField
         sx={{input:{fontSize:'20px'}}}
          placeholder="Title"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
        />
        <Divider />
        <TextField
          placeholder="Take a note..."
          variant="standard"
          multiline
          InputProps={{
            disableUnderline: true,
          }}
        />
      </Stack>

    </Box>
  );
}
