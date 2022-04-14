import  React,{useRef,useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {TextField,IconButton,InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';



export default function NavBar({searchEmp,reset}) {
    let searchRef = useRef('')
    const [searchflag, setsearchflag] = useState(true);

    const setFlag = ()=>{
        if(searchflag===true){
            if(searchRef.current.value!==""){
            searchEmp(searchRef.current.value)
            setsearchflag(false)
            }
            else{
                console.log("please enter name")
                setsearchflag(true)
            }
        }
        else{
           
            searchRef.current.value=""
            setsearchflag(true)
            reset()
        }
    }


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
              inputRef={searchRef}
              InputProps={{
                style: { fontFamily: 'nunito', color: 'grey'},
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={setFlag} >
                      {searchflag ? <SearchIcon /> : <ClearIcon />}
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
