import React from 'react';
// import { MDBInput, MDBCheckbox, MDBBtn ,MDBTextArea} from 'mdb-react-ui-kit';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import './contact.css';
export default function Contact() {
  return (
    <>
    <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Our SHOP-HAPPY Coustmer service </Typography>
        <p>
        Facing issues with your orders? No problem, we are just one click away for you.

Contact us through our various official handles.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "100%",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer  className='App99' component={Paper}  >
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "", color: "black" }}
                  align="center"
                >
                  OUR LOCATIONS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                
                  <ul>
                    <li>Email:shophappydelhi@gmail.com      Near GT road Delhi ,534000 </li>
                    <li>Email:shophappyvizag@gmail.com Near Beach Road Vizag,144011</li>
                    <li>Email:shophappyrajay@gmail.com Near 4th Bridge Rajamundry,100876</li>
                    <li>Email:shophappyvizay@gmail.com Near Benz Circle Vizayawada,342321</li>
                    <li>Email:shophappydelhi@gmail.com Near Soraja Nagar Delhi ,500001</li>

                  </ul>
                </TableCell>
                </TableRow>
              
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper} >
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "", color: "black" }}
                  align="center"
                >
                  Terms and Conditions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                
                  <ul>
                    <li>We have different subscription plans. All of the specific details are located in Appendix B.

2.1 Upon registration, the Users are offered with a choice between three different subscription plans, depending on the <br/>needs of the User. These subscription services are outlined in Appendix B.

2.2 The fees are due monthly, in advance, and payments must be made via the payment methods offered by the same platform</li><br/>
                    <li>As in any contract, there are many standards that we will have to uphold on our end. Likewise, you will also have to uphold some standards. 😜 First of all, pay attention to credentials; remember that you are responsible for the information and content you upload to Shoppy by mBurger; it is always a good idea to keep your identification data up to date. Last, but certainly not least, we expect that you will not undermine the security of our systems, in any way, shape, or form.

4.1 The User is required to maintain the secrecy of and not to disclose (directly or indirectly), the access credentials for the Service, thus preventing the credentials from being used improperly, and at the same time, remaining <br/>responsible for any way in which they are used.

4.2 The User is responsible for maintaining the correctness of the data and/or the information provided in the use of the Service, as well as updating this information as necessary. In particular, the User assumes responsibility in updating his or her identification data, especially that which relates to the registered office and/or other location for billing purposes (when applicable), recognizing that from this point forward, all communications sent by the Company to the last communicated address, indicated by the User, will constitute receipt.

4.3 The User is responsible for the contents that he or she will upload and/or use on the Platform, and assumes the exclusive responsibility for any direct and indirect damages, even to third parties, in the event that they become known to Mumble.

4.4 The User agrees not to take any action that could compromise the security of the systems and/or devices, of which the User has access to through the Service.</li><br/>
                    <li>Our trademark…is our trademark. 😊 It is not possible for it to be used in any other way that defeats this purpose. In a similar light, we may need to publish information regarding work that is carried out with some clients. If this is the case, we will definitely contact you and ask for written consent.

6.1 This Contract, or anything else, does not grant the User any rights relating to Mumble trademarks, logos, and sites.

6.2 In the event that the possibility arises, the User allows Mumble to use the User’s name and trademarks in commercial communications (limited to a logo), including it among its customers.</li><br/>
                    <li>In order to correctly execute the Service, we will need to process some personal data and manage our relationship with you. You will find everything written in our Information section, as well as the Data Processing Agreement (DPA). What is the latter part, you ask? It is the contract that governs the relationship between you, the Data Controller, and us, the Data Processor, who acts on your behalf for a single and specific activity: providing you with the mBurger service. Okay, why do you need this? Because personal data is originally processed and collected by…you. You are the one who determines its purpose, and we can only use it if you approve. So, at the end of the day, that’s why we have a DPA. 😁

8.1 For the distinct purposes of the execution of the Contract, the User authorizes Mumble to process:

a. the User’s personal data in accordance with the Privacy Policy available on the site;
b. personal data on behalf of the User in accordance with the attached Data Processing Agreement (Annex A). By mutual agreement, the parties refer to the regulation of the processing of personal data connected to the Service.</li>
                    

                  </ul>
                </TableCell>
                </TableRow>
              
            </TableBody>
          </Table>
        </TableContainer>
        
      </Box>
      </>
  );
}