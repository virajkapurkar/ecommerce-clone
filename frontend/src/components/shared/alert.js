import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import AlertTitle from "@mui/material/AlertTitle";

//severity ∈ {error,info,warning,success}
function Message(props) {
  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity={props.severity}>
          {props.title ? <AlertTitle>{props.title}</AlertTitle> : <></>}
          {props.children}
        </Alert>
      </Stack>
    </>
  );
}

export default Message;
