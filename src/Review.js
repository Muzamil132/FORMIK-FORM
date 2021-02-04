import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 import Paper from '@material-ui/core/Paper';
 import Grid from '@material-ui/core/Grid';
 import Button from '@material-ui/core/Button';
 
 export const Review= ({values,submit}) => {
   return (
     <div className="grid">
     <Grid container justify='center'>
     <Paper className="paper">
     <p>Area:{values.Area}</p>
         <p>City:{values.City}</p>
         <p>Card name:{values.Card}</p>
         <p>Card number:{values.Card_name}</p>
         <p>Email:{values.email}</p>
         <Button className="btn1" onClick={()=>submit(1)}>back</Button>

     </Paper>
     </Grid>
    
        
     </div>
   );
 };