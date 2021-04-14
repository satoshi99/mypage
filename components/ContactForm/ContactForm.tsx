import React, { useState } from 'react';
import Link from 'next/link';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Formik } from "formik";
import * as Yup from "yup";
//import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';
import { TextField,
    Button, 
    CircularProgress, 
    Typography, 
    Grid, 
    FormControlLabel, 
    Checkbox, 
    makeStyles,
    List,
    ListItem,
    ListItemText, 
    ListSubheader} from "@material-ui/core";

import styles from './ContactForm.module.scss';
import fetch from 'node-fetch';

const useStyles = makeStyles((theme) => ({
    paper: {
        minHeight: '600px',
        margin: '0 auto',
        textAlign: 'center',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(7),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        position: 'relative',
        backgroundColor: '#e2f1f8',
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
        margin: '0 auto',
        backgroundColor: '#e2f1f8',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'absolute',
        bottom: '20px',
        right: '20px',
    },
    button: {
        width: '100px',
        marginLeft: theme.spacing(1),
    },
    list: {
        width: '100%'
    },
    listItem: {
        padding: theme.spacing(0),
    },
    listSubheader: {
        textAlign: 'left',
    },
    nameField: {
        width: '90%'
    },
    mailField: {
        width: '90%',
        "@media (max-width: 600px)": {
            marginTop: '10px',
          },
    },
    messageField: {
        marginTop: '30px',
        width: '95%'
    },
    checkButton: {
        width: '100px',
    },
    checkPrivacy: {
        color: '#2f89ef',
        '&:hover': {
            color: '#f05545',
        }
    }
}));

const webhookURL = process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL;

const steps = ['Contact form', 'Review your inquiry', 'Send'];

const ContactForm: React.FC = () => {
    const classes = useStyles();
    const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [inquiry, setInquiry] = useState({ name: '', email: '', content: '' });

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Email format is wrong').required('Email is required'),
        content: Yup.string().required('Message is required'),
        check: Yup.boolean().oneOf([true], 'Check I accept')
    });

    const submit = async () => {
        const payload = {
            text: `There is a new message\n
            ▶︎ Name: ${inquiry.name}\n
            ▶︎ Email: ${inquiry.email}\n
            ▶︎ Message: ${inquiry.content}`
        }

        try {
            await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: inquiry.name,
                    to_email: inquiry.email,
                    message: inquiry.content,
                })
            });
            await fetch(webhookURL, {
                method: 'POST',
                body: JSON.stringify(payload)
            });
            await setActiveStep(activeStep + 1);
        } catch (error) {
            alert('Failed to send');
        }
    };
    

    return (
            <React.Fragment>
                <CssBaseline />
                <div className={styles.wrapper}>
                    <Paper elevation={0} className={classes.paper}>
                        <Typography variant="h4">
                            Contact Form
                        </Typography>
                        <div className={styles.submit_progress}>
                            {isLoadingSubmit && <CircularProgress />}
                        </div>
                        <br />
                        <Stepper activeStep={activeStep} className={classes.stepper} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <React.Fragment>
                            {activeStep === 0 ? (
                                <React.Fragment>
                                    <Formik 
                                        initialErrors={{ name: 'required', email: 'required', content: 'required' }}
                                        initialValues={{ name: inquiry.name, email: inquiry.email, content: inquiry.content, check: false }}
                                        onSubmit={ (values) => {
                                            setInquiry(values);
                                            handleNext();
                                        }}
                                        validationSchema={validationSchema}
                                    >
                                    {({
                                        handleSubmit,
                                        handleChange,
                                        handleBlur,
                                        values,
                                        errors,
                                        touched,
                                        isValid,
                                    }) => (
                                        <div>
                                            <form onSubmit={handleSubmit}>
                                                <Grid container>
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Name"
                                                            type="input"
                                                            name="name"
                                                            error={touched.name && errors.name ? true : false}
                                                            helperText={touched.name && errors.name ? errors.name : null}
                                                            className={classes.nameField}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.name}
                                                        />
                                                    </Grid>
                                                
                                                    <Grid item xs={12} sm={6}>
                                                        <TextField
                                                            label="Email"
                                                            type="input"
                                                            name="email"
                                                            error={touched.email && errors.email ? true : false}
                                                            helperText={touched.email && errors.email ? errors.email : null}
                                                            className={classes.mailField}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.email}
                                                        />
                                                    </Grid>
                                                    
                                                    <Grid item xs={12}>
                                                        
                                                        <TextField
                                                            rows={10}
                                                            label="Message"
                                                            multiline
                                                            name="content"
                                                            variant="outlined"
                                                            error={touched.content && errors.content ? true : false}
                                                            helperText={touched.content && errors.content ? errors.content : null}
                                                            className={classes.messageField}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.content}
                                                        />
                                                        </Grid>

                                                    <Grid item xs={12}>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox 
                                                                    color="primary" 
                                                                    name="check" 
                                                                    value="yes"
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    />
                                                            }
                                                            label={
                                                            <p>I accept the&nbsp;
                                                                <Link href="/privacy">
                                                                    <a　target="_blank" rel="noopener noreferrer" className={classes.checkPrivacy}>
                                                                        Privacy Policy
                                                                    </a>
                                                                </Link>
                                                            </p>}
                                                        />
                                                        <br />
                                                        { touched.check && errors.check ? (
                                                             <Typography variant="body2" color="error">{errors.check}</Typography>
                                                        ) : <div>&nbsp;</div>}
                                                    </Grid>
                                                </Grid>

                                                {/* <Grid item xs={12}>
                                                        <GoogleReCaptchaProvider reCaptchaKey="secretkey">
                                                            <GoogleReCaptcha onVerify={token => { setToken(token); }} />
                                                        </GoogleReCaptchaProvider>
                                                    </Grid> */}
                            
                                                <br />
                                                <div className={classes.buttons}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    className={classes.button}
                                                    disabled={!isValid}
                                                    type="submit"
                                                >
                                                    Check
                                                </Button>
                                                </div>
                                            </form>
                                        </div>
                                    )}
                                </Formik>
                            </React.Fragment>
                        ) : activeStep === 1 ? (
                            <React.Fragment>
                                <Typography variant="subtitle1" gutterBottom>
                                    Please check the content of your inquiry and send it.
                                </Typography>
                                <List>
                                    <ListItem className={classes.listItem}>
                                        <ListSubheader>Name</ListSubheader>
                                        <ListItemText primary={inquiry.name} />
                                    </ListItem>
                                    <ListItem className={classes.listItem}>
                                        <ListSubheader>Email</ListSubheader>
                                        <ListItemText primary={inquiry.email} />
                                    </ListItem>
                                    <ListSubheader className={classes.listSubheader}>Message</ListSubheader>
                                    <ListItem>
                                        <ListItemText primary={inquiry.content} />
                                    </ListItem>
                                </List>
                                <div className={classes.buttons}>
                                <Button onClick={ handleBack } className={classes.button}>
                                    Back
                                </Button>
                                <Button
                                    variant="contained" 
                                    color="primary" 
                                    type="submit" 
                                    className={classes.button}
                                    onClick={async () => { 
                                        await setIsLoadingSubmit(true);
                                        await submit();
                                        await setIsLoadingSubmit(false);
                                    }}
                                >
                                    Submit
                                </Button>
                                </div>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your contact.
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    We have emailed your inquiry, and please wait for reply. 
                                </Typography>
                                <div> 
                                    <Button 
                                        color="secondary"
                                        onClick={() => {
                                            setInquiry({ name: '', email: '', content: '' });
                                            setActiveStep(0);
                                        }}
                                    >
                                        Back Contact Top
                                    </Button>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
                </div>
            </React.Fragment>
    );
}

export default ContactForm;
