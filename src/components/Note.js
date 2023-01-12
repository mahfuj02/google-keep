import { Divider, Paper, Stack, Typography } from "@mui/material";

export default function Note() {
  return (
    <>
      <Stack direction="row" spacing={2} sx={{ mx: "20px" }}>
        <Paper
          elevation={4}
          sx={{ p: "10px", width: "30%", border: "1px solid #5F6368" }}
        >
          <Typography variant="h6">Here is Title</Typography>
          <Divider sx={{ my: "5px" }}></Divider>
          <Typography variant="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </Typography>
        </Paper>
      </Stack>
    </>
  );
}
