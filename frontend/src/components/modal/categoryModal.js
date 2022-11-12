import React , {useState}from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';


const CategoryModal = ({setDrawer , drawer})=> {

  const toggleDrawer = (anchor, open) => (event) => {

    setDrawer(!drawer);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <ArrowBackIcon fontSize='medium' sx={{m:"15px"}}/>    
      <Divider />

    </Box>
  );

  return (
    <div>
      
        <React.Fragment key="right">
          <Drawer
            anchor="right"
            open={true}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </React.Fragment>
     
    </div>
  );
}

export default CategoryModal;