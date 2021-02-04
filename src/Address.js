import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 import Grid from '@material-ui/core/Grid';
 import Paper from '@material-ui/core/Paper';
 import Button from '@material-ui/core/Button';
 import './App.css'
 
   export const Address = ({submit,setvalues,prevalues}) => {
   return (
       <Grid container justify="center">
         <Paper className="paper" >
         <Formik

       initialValues={prevalues}
       validationSchema={Yup.object({
         Area: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
        City: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
       
       })}
       onSubmit={(values) => {
         submit(1)
         setvalues({...values,...prevalues})
       }}
     >
       {/* <Form className="form">
        <div className="all_container">
        <label htmlFor="Area">Area</label>
        <div className="error_container">
        <Field className="input" name="Area" type="text" />
         <ErrorMessage  className="error" name="Area" /> 
        </div>
        </div>
        <div>
        <label htmlFor="City">City</label>
        <div className="error_container" >
        <Field    className="input" name="City" type="text" />
         <ErrorMessage className="error"  name="City" /> 
        </div>
       
        </div>
        
        
         <button type="submit">Submit</button>
       </Form> */}

       <Form>
        <div className="input_container">
       
         <Field placeholder="Region" className="input" name="Area" type="text" />  
         <ErrorMessage  name="Area" /> 

        </div>
        <div className="input_container">
       
         <Field placeholder="City" className="input" name="City" type="text" />  
         <ErrorMessage  name="City" /> 
           
        </div>
        <div>
        <Button type='submit' onclick={submit} className="btn" >Submit</Button>
        </div>
         <div>
         </div>
      
       </Form>
        </Formik>
         </Paper>

       </Grid>
    
   );
 };