import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

//severity ∈ {error,info,warning,success}
function Message(props) {
  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity={props.severity}>{props.children}</Alert>
      </Stack>
    </>
  );
}

export default Message;
