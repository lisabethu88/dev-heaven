import React, { useState, useEffect } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  CssBaseline,
} from "@mui/material";
import {
  StyledAppBar,
  StyledToolbar,
  StyledLayout,
  StyledPaper,
  StyledStepper,
  StyledButtons,
  StyledButton,
  StyledDivider,
  StyledSpinner,
} from "./checkoutStyles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { commerce } from "../../../lib/commerce";
import { Link, useNavigate } from "react-router-dom";

const steps = ["Shipping address", "Payment details"];
const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const navigate = useNavigate();
  console.log("order", order);
  let Confirmation = () => {
    order.customer ? (
      <>
        <div>
          <Typography variant="h5">
            Thank you for your purchase, {order.customer.firstName}{" "}
            {order.customer.lastName}!
          </Typography>
          <StyledDivider />
          <Typography variant="subtitle2">
            Order ref: {order.customer_reference}
          </Typography>
        </div>
        <br />
        <Button component={Link} to="/" variant="outlined" type="button">
          Back to Home
        </Button>
      </>
    ) : (
      <StyledSpinner>
        <CircularProgress />
      </StyledSpinner>
    );
  };

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} to="/" variant="outlined" type="button">
          Back to Home
        </Button>
      </>
    );
  }
  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        backStep={backStep}
        onCaptureCheckout={onCaptureCheckout}
        nextStep={nextStep}
      />
    );

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
      } catch (error) {
        navigate("/");
      }
    };
    generateToken();
  }, [cart]);

  return (
    <>
      <CssBaseline />
      {/* Toolbar */}
      <StyledToolbar />
      {/* layout */}
      <StyledLayout>
        {/* Paper */}
        <StyledPaper>
          <Typography
            variant="h4"
            align="center"
            fontFamily="Tiny5"
            textTransform={"uppercase"}
            color="#413b61"
          >
            Checkout
          </Typography>
          {/* Stepper */}
          <StyledStepper activeStep={activeStep}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel sx={{ fontFamily: "Lexend" }}>{step}</StepLabel>
              </Step>
            ))}
          </StyledStepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </StyledPaper>
      </StyledLayout>
    </>
  );
};

export default Checkout;
