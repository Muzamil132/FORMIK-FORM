
import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Address} from './Address'
import{ Payment} from './Payment'
import {Review} from './Review'
import './App.css'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Area Information', 'Card Information', 'Review'];

}

function getStepContent(stepIndex,setActiveStep,Formvalues,setFormvalues) {
  switch (stepIndex) {
    case 0:
      return <Address submit={setActiveStep}   prevalues={Formvalues} setvalues={setFormvalues}  />;
    case 1:
      return <Payment  submit={setActiveStep}  prevalues={Formvalues}  setvalues={setFormvalues}    />;
    case 2:
      return <Review submit={setActiveStep} values={Formvalues}  submit={setActiveStep}  />;
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  
  const [Formvalues,setFormvalues]=useState({})
  const steps = getSteps();

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step   key={label}>
            <StepLabel className="icon" >{label}</StepLabel>
          </Step>
        ))}
     
      </Stepper>
      {
          getStepContent(activeStep,setActiveStep,Formvalues,setFormvalues)
      }
      {/* <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
}
