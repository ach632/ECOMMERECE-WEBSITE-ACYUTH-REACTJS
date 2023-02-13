import React from "react";
import { Box, Typography,Button} from "@mui/material";
import {Link} from 'react-router-dom';


const About = () => {
  return (

    <>
      
    <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h3": {
            fontWeight: "medium",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "center",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h3">About our Family</Typography>
        <h5>
          Can you belive its been 2 years for SHOP - HAPPY was launched we are delighthed and blesssed
        </h5>
        <br />
        <p>
          im sure our coustmers having great shopping experience and we are happy with the reviews which posted by our coustmers 
          . We promising to our coustmers that we rapidly introduce new family like environment to attach our services at your Doorstep.
          we are trying our best delhivery and we are proudly declare that Shop-Happy is one of the best on time ddelhivery ecommerece website in India

        </p>
        <p>
          for assistance click link Below
        </p>
        <Link  to="/contact" className="App6" >
             <Button className="App6" >Click ME</Button>
           </Link>
        <p>
          For more information Go through our Links
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          
          
        </p>
      </Box>
    </>
  );
};

export default About ;
