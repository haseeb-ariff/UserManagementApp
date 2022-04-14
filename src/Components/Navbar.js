import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {TextField,IconButton,InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';



export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{height:120, backgroundColor:"#9229ac"}}>
        <br></br>
        <div style ={{margin:"auto",width: "60%",padding: "10px",display: "flex",flexDirection: "row",backgroundColor:"transparent"}}>
            <h5 style={{marginRight:10}}>Search Employee Here</h5>
            <TextField
            style={{width:500,backgroundColor:"white",marginTop:-15,height:55}}
              placeholder="Enter Name here"
              variant="filled"
            //   inputRef={searchref}
              InputProps={{
                style: { fontFamily: 'nunito', color: 'grey'},
                endAdornment: (
                  <InputAdornment>
                    <IconButton >
                      {/* {searchflag ? <SearchIcon /> : <ClearIcon />} */}
                      <SearchIcon></SearchIcon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
        </div>
        
      </AppBar>
    </Box>
  );
}
