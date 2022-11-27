import { Formik, Form, FormikHelpers } from "formik"
import { Box, FormGroup } from "@mui/material";
import { object, string } from "yup"
import FormikTextField from "../../formik/TextField"
import FormikPasswordField from "../../formik/PasswordField";
import { BeigePrimaryButton } from "../../misc/buttons"
import axios, { AxiosError } from "axios";
import Router from "next/router"

interface FormVals {
    username: string;
    password: string;
}

export default function LoginForm() {

    const initialValues = {
        username: "",
        password: ""
    }

    const onSubmit = async (vals:FormVals, actions:FormikHelpers<FormVals>) => {
        try {
            await axios({
                method: "POST",
                url: "/api/admin/login",
                data: vals
            })

            Router.push({
                pathname: "/admin"
            })
        } catch (e) {
            if ((e as AxiosError).response?.status === 409) {
                actions.setFieldError((e as any).response?.data?.field, 
                    (e as any).response.data.msg)
            }
            actions.setSubmitting(false)
        }
    }

    return (
        <Box>
            <Formik validationSchema={object({
                username: string().required("Please enter your username."),
                password: string().required("Please enter your password.")
            })} initialValues={initialValues} 
            onSubmit={(values, actions) => onSubmit(values, actions)}>
                {({isSubmitting, isValidating}) => (
                    <Form>
                        <Box my={3}>
                            <FormGroup>
                                <FormikTextField name="username" label="Username" />
                            </FormGroup>
                        </Box>
                        <Box my={3}>
                            <FormGroup>
                                <FormikPasswordField name="password" label="Password" />
                            </FormGroup>
                        </Box>
                        <Box my={3} maxWidth={200} mx="auto" textAlign="center">
                            <BeigePrimaryButton fullWidth type="submit" 
                                disabled={isSubmitting || isValidating}>
                                Login
                            </BeigePrimaryButton>
                        </Box>
                    </Form> 
                )}
            </Formik>
        </Box>
    )
}