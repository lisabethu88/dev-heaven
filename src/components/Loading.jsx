import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Loading...
      </Typography>
    </div>
  );
};

export default Loading;
