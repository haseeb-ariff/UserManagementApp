import React from "react";
import Button from '@mui/material/Button';

export default function Custombutton({text,event,btnStyle}) {
    return (
        <Button variant="outlined" onClick={event} style={btnStyle}  >
          {text}
        </Button>
    );
  }