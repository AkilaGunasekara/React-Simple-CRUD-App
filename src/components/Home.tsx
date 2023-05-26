import { useEffect, useState } from "react";
import "./HomeStyle.css";
import { IEmployee, PageEnum, dummyData } from "./Employee";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
import SendIcon from '@mui/icons-material/Send';
import { Avatar, Box, Button, Container, IconButton, Stack, ThemeProvider, Toolbar, Tooltip, Typography, createTheme } from "@mui/material";
import { AspectRatio } from "@mui/icons-material";


const Home=()=>{ 

    
    
    const[employeeList,setEmployeeList]= useState(
        dummyData as IEmployee[]
        
        );

    const [showemployee,setShowemployee]=useState(PageEnum.list);
    
    const [dataToEdit,setDataToEdit]=useState({} as IEmployee);

    useEffect(() => {
        const listInString = window.localStorage.getItem("EmployeeList");
        if (listInString) {
          _setEmployeeList(JSON.parse(listInString));
        }
      }, []);



    const onAddEmployeeClickHnd=()=>{
        setShowemployee(PageEnum.add);

    };

    const showListPage=()=>{
        setShowemployee(PageEnum.list);
    };

    const _setEmployeeList = (list: IEmployee[]) => {
        setEmployeeList(list);
        window.localStorage.setItem("EmployeeList", JSON.stringify(list));
      };

    const addEmployee=(data: IEmployee)=>{
        setEmployeeList([...employeeList,data]);
       
    };

    const deleteEmployee=(data: IEmployee)=>{

        const indexToDelete=employeeList.indexOf(data);
        const temList=[...employeeList];

        temList.splice(indexToDelete,1);

        _setEmployeeList(temList);
    };

    const editEmployeeData=(data: IEmployee)=>{
        setShowemployee(PageEnum.edit);
        setDataToEdit(data);

    };

    const updateData = (data: IEmployee) => {
    const filteredData = employeeList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = employeeList.indexOf(filteredData);
    const tempData = [...employeeList];
    tempData[indexOfRecord] = data;
    _setEmployeeList(tempData);
  };

  const theme = createTheme({
   
  });
  

    return(
        <Container sx={{}}>
            <article className="article-header">
                <header>
                <ThemeProvider theme={theme}>
                    <Typography 
                    sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'flex' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        my: { xs: 1, md: 1.5 },
                        fontWeight: 700,
                        letterSpacing: '.2rem',
                        color: 'black',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        fontSize: '2.5rem',
                        justifyContent: 'center',
                      }}
                    >Interns Information List</Typography>
                </ThemeProvider>
                </header>
            </article>

            

            <section>

                {showemployee===PageEnum.list && (
                <>
                    <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    justifyContent="space-between"
                    marginBottom={2}
                    >
                    
                        {/* <Avatar  src="qlogo.png" /> */}
                        
                 
                    
                    <h3>Interns List</h3>

                        <Button variant="outlined" size="small" onClick={onAddEmployeeClickHnd} endIcon={<SendIcon />}>
                        Add Interns
                        </Button>
                    </Stack>

                        
                    
                    <EmployeeList list={employeeList} onDelete={deleteEmployee} onEdit={editEmployeeData}/>
                </> 
)}
                {showemployee===PageEnum.add && <AddEmployee onBack={showListPage} 
                onsubmitClickHnd={addEmployee}/> }

                {showemployee === PageEnum.edit && <EditEmployee data={dataToEdit} 
                onBack={showListPage} onUpdateClickHnd={updateData}/>}

        
            </section>
            </Container>
    );
   
}
export default Home;
