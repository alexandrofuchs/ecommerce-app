import React from 'react';
import useStyles from './styles';
import{
  CssBaseline,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,

} from "@material-ui/core";

import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';

const steps = ['Carrinho','Endereço de entrega', 'Pagamento', 'Resumo'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <AddressForm />;
    case 2:
      return <PaymentForm />;
    case 3:
      return <Review />;
      
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <div className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Obrigado!
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is "  id  ".
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} variant="contained" style={{margin: '2mm'}}>
                      Voltar
                    </Button>
                  )}
                  <Button 
                    onClick={handleNext}
                    color="primary"
                    variant="contained"  
                    style={{margin: '2mm'}}
                  >
                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </div>
       </main>
    </React.Fragment>
  );
}