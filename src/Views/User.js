import React, { useEffect, useRef,useState } from "react";
import Employeees from "../Views/employees.json"
import Table from "../Components/Table.js"
import Customnavbar from "../Components/Navbar.js"
import Custombutton from "../Components/Button.js"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export default function User() {

    const [employees,setEmployees]= useState(Object.values(Employeees)[0])
    const [employeetype, setType] = useState('');
    const [open, setOpen] = useState(false);
    const firstnameRef = useRef('')
    const lastnameRef =useRef('')
    


   
  
    const handleClose = () => {
      setOpen(false);
    };
  
    
  
    const handleTypeChange = (event) => {
      setType(event.target.value);
    }; 

    useEffect(()=>{
        console.log("Employee added")
    },[employees])

    


    const addUser = ()=>{
        let regex = /^[a-zA-Z]+$/;
        if(firstnameRef.current.value!=='' && lastnameRef.current.value!=='' && employeetype!==''){
           if(regex.test(firstnameRef.current.value) && regex.test(lastnameRef.current.value)){
              let obj = {
                  "role": employeetype==="User"?1:employeetype==="Senior User"?2:3,
                  "firstName":firstnameRef.current.value,
                  "lastName":lastnameRef.current.value
              }
              setEmployees((prev) => [...prev, obj])
              setOpen(false)
              console.log("Employee added")
           }
           else{
               console.log("Invalid Input")
           }
        }
        else{
           console.log("Fields cannot be empty")
        }
    }

    const deleteUser = (element)=>{
        console.log(element)
        let newArray = employees.filter((user)=>user.firstName!==element.firstName &&user.lastName!==element.lastName)
        setEmployees(newArray)
        console.log("Employee deleted")
        console.log(employees)
    }

    const searchUser = ()=>{
        let employeename= ""
        let obj 
        for(let i=0;i<employees[0].length;i++){
            if(employees[i].firstName===employeename || employees[i].lastName===employeename){
                obj = employees[i]
            }
        }
        if (obj===undefined){
            console.log("Employee doesnt exist")
        }
        else{
            setEmployees(obj)
            console.log(employees)
        }
    }


   

    return(
        <>
        <Customnavbar searchEmp={searchUser}></Customnavbar>
        <grid container >
            <grid item xs={12} sm={12} md={12}>
            <br></br>
            <h1 style={{marginLeft:45, color:"#9229ac"}}>Users</h1>
            <Table deleteEmployee={deleteUser}  users={employees} employeeType="User"></Table>
            </grid>
        </grid>
        <grid container >
            <grid item xs={12} sm={12} md={12}>
            <br></br>
            <h1 style={{marginLeft:45, color:"#9229ac"}}>Senior Users</h1>
            <Table deleteEmployee={deleteUser}  users={employees} employeeType="Senior User"></Table>
            </grid>
        </grid>
        <grid container >
            <grid item xs={12} sm={12} md={12}>
            <br></br>
            <h1 style={{marginLeft:45, color:"#9229ac"}}>WFM</h1>
            <Table  deleteEmployee={deleteUser} users={employees} employeeType="WFM"></Table>
            </grid>
        </grid>
        <grid container >
            <grid item xs={12} sm={12} md={12}>
            <Custombutton btnStyle={{backgroundColor: "#9229ac",color: "white",textTransform: "none",borderColor:"#9229ac",outline:"none",marginLeft:50,width:200,marginBottom:10,height:50}} text={"Add User"} event={()=>{setOpen(true)}} ></Custombutton>
        </grid>
        </grid>
        
        {/* Add user Form */}
        
        <Dialog
        open={open}
        onClose={handleClose}
        
      >
        <DialogTitle >
          {"Add a new user"}
        </DialogTitle>
        <DialogContent style={{width:550}}>
            <br></br>
        <TextField required label="First Name" inputRef={firstnameRef} variant="outlined" placeholder="Enter first name here" fullWidth/>
        <br></br>
        <br></br>
        <TextField required label="Last Name" variant="outlined" inputRef={lastnameRef} placeholder="Enter last name here" fullWidth />
        <br></br>
        <br></br>
        <FormControl fullWidth>
        <InputLabel >Employee Type</InputLabel>
        <Select
                      labelId="type"
                      id="employee_type"
                      value={employeetype}
                      onChange={handleTypeChange}
                      label="Employee Type"
                    >
                      <MenuItem value={"User"}>User</MenuItem>
                      <MenuItem value={"Senior User"}>Senior User</MenuItem>
                      <MenuItem value={"WFM"}>WFM</MenuItem>
                    </Select>
      </FormControl>
      
        </DialogContent>
        <DialogActions>
        <Custombutton btnStyle={{backgroundColor: "#696a65",color: "white",textTransform: "none",borderColor:"#9229ac",outline:"none",marginLeft:20,width:150,marginBottom:10}} text={"Close"} event={handleClose} ></Custombutton>
        <Custombutton btnStyle={{backgroundColor: "#9229ac",color: "white",textTransform: "none",borderColor:"#9229ac",outline:"none",marginLeft:10,width:150,marginBottom:10,marginRight:10}} text={"Save Changes"} event={addUser} ></Custombutton>
        </DialogActions>
      </Dialog>
        </>
    )

}