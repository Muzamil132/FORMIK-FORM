import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 import Grid from '@material-ui/core/Grid';
 import Paper from '@material-ui/core/Paper';
 import Button from '@material-ui/core/Button';
 
    export const Payment= ({submit,setvalues,prevalues}) => {
   return (
     <Grid  container justify='center'>
       <Paper className="paper">
       <Formik
       initialValues={prevalues}
       validationSchema={Yup.object({
         Card: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         Card_name: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
       })}
       onSubmit={(values) => {
         submit(2)
         setvalues({...values,...prevalues})
       }}
     >
       <Form>
       <div className="input_container">
       
       <Field placeholder="Card name" className="input" name="Card" type="text" />  
       <ErrorMessage  name="Card" /> 

      </div>
      <div className="input_container">
     
       <Field placeholder="Card Number" className="input" name="Card_name" type="text" />  
       <ErrorMessage  name="Card_name" /> 
         
      </div>
      <div className="input_container">
     
       <Field placeholder="email" className="input" name="email" type="text" />  
       <ErrorMessage  name="email" /> 
         
      </div>
      <div className="button_container">
      <Button type='submit' onclick={submit} className="btn" >Submit</Button>
    
      <Button    className="btn1" onClick={()=>submit(0)}>back</Button>
      </div>
       <div>
       </div>
       </Form>
     </Formik>
       </Paper>
     </Grid>
   
   );
 };