import { useRef } from 'react'
import { Formik, Form, FormikHelpers } from "formik"
import { Grid, Box, FormGroup, useTheme, useMediaQuery } from "@mui/material";
import { object, string } from "yup"
import FormikTextField from "../formik/TextField"
import { OrangePrimaryButton } from "../misc/buttons"
import axios from "axios";
import Router from "next/router"
import reCAPTCHA, {ReCAPTCHA} from "react-google-recaptcha"

const RECAPTCHA = reCAPTCHA // typescript gets mad if it doesn't start with capital

interface FormVals {
    first: string;
    last: string;
    email: string;
    message: string;
}

export default function ContactBox() {

    console.log('site key', process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY)

    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
    const medScreen = useMediaQuery(theme.breakpoints.down('lg'))

    const captchaRef = useRef<ReCAPTCHA>(null)

    const initialValues = {
        first: "",
        last: "",
        email: "",
        message: ""
    }

    const onSubmit = async (vals:FormVals, actions:FormikHelpers<FormVals>) => {
        const token = captchaRef.current?.getValue()

        if (!token) return

        try {

            await axios({
                method: 'POST',
                url: '/api/contact-us/submit',
                data: {data: vals, token}
            })

            Router.push('/contact-us/success')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Box sx={{
            backgroundColor: '#FFFFFF',
            minWidth: 'lg',
        }}>
            <Formik validationSchema={object({
                first: string().required("Please enter your first name."),
                last: string().required("Please enter your last name."),
                email: string().email("Please enter a valid email.").required("Please enter your email."),
                message: string().required("Please enter a message.")
            })} initialValues={initialValues} 
            onSubmit={(values, actions) => onSubmit(values, actions)}>
                {({isSubmitting, isValidating}) => (
                    <Form>
                        <Box>
                            <Grid container px={3} pt={6}>
                                <Grid item xs={12} sm={6} mb={3}>
                                    <FormGroup>
                                        <FormikTextField name="first" label="First Name" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} sm={6} mb={3}>
                                    <FormGroup>
                                        <FormikTextField name="last" label="Last Name" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} mb={3}>
                                    <FormGroup>
                                        <FormikTextField name="email" label="Email" />
                                    </FormGroup>
                                </Grid>
                                <Grid item xs={12} mb={3}>
                                    <FormGroup>
                                        <FormikTextField name="message" label="Message"
                                            multiline rows={6} />
                                    </FormGroup>
                                </Grid>
                            </Grid>
                            <Box my={3} maxWidth={300} mx="auto">
                                <RECAPTCHA sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
                                    ref={captchaRef} />
                            </Box>
                            <Box my={3} maxWidth={200} mx="auto" textAlign="center">
                                <OrangePrimaryButton fullWidth type="submit" 
                                    disabled={isSubmitting || isValidating}>
                                    Send
                                </OrangePrimaryButton>
                            </Box>
                        </Box>
                    </Form> 
                )}
            </Formik>
        </Box>
    )
}