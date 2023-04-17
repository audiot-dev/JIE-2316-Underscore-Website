import { Box, Typography, Grid, Paper, IconButton } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { C_ContactMessage } from "../../../database/interfaces/ContactMessage";
import { INITIAL_RECENT_CONTACT_MSG_COUNT } from "../../../database/operations/contactMessage";
import { OrangePrimaryButton } from "../../misc/buttons";
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    contactMessages: C_ContactMessage[];
}

export default function Main({contactMessages:dbContactMessages}:Props) {

    const [contactMessages, setContactMessages] = useState(dbContactMessages)
    const [moreToLoad, setMoreToLoad] = useState(dbContactMessages.length === INITIAL_RECENT_CONTACT_MSG_COUNT)
    const [loading, setLoading] = useState(false)

    const dates = useMemo(() => (
        contactMessages.map(msg => dayjs(msg.data.time['@ts']))
    ), [contactMessages])

    const loadMore = async () => {
        setLoading(true)

        try {

            const afterMsg = contactMessages[contactMessages.length - 1]

            const after = [afterMsg.data.time['@ts'], afterMsg.ref['@ref'].id]

            const {data:{messages}} = await axios({
                method: 'POST',
                url: '/api/admin/load-contact-messages',
                data: {after}
            })

            if (messages.length < INITIAL_RECENT_CONTACT_MSG_COUNT) {
                setMoreToLoad(false) 
            }
            setContactMessages([...contactMessages, ...messages])

        } catch (e) {
            console.log(e)
        }
        setLoading(false)
    }

    const deleteMessage = async (index:number) => {
        setLoading(true)

        try {

            const msg = contactMessages[index]

            if (!window.confirm(`Are you sure you want to delete the message from ${msg.data.first} ${msg.data.last}?`)) {
                setLoading(false)
                return
            }

            await axios({
                method: 'POST',
                url: '/api/admin/delete-contact-message',
                data: {id: msg.ref['@ref'].id}
            })

            const copy = [...contactMessages]
            copy.splice(index, 1)
            setContactMessages(copy)

        } catch (e) {
            console.log(e)
        }
        setLoading(false)
    }

    return (
        <Box ml={3}>
            <Grid container height="98px" alignItems="center" >
                <Grid item>
                    <Typography variant="h4">
                        Contact Messages
                    </Typography>
                </Grid>
            </Grid> 
            <Box>
                {contactMessages.map((msg, i) => (
                    <Box maxWidth="sm" mb={6} key={i}>
                        <Paper elevation={3}>
                            <Box p={3} position="relative">
                                <Box position="absolute" right={4} top={4}>
                                    <IconButton disabled={loading} onClick={() => deleteMessage(i)}>
                                        <DeleteIcon color="error" />
                                    </IconButton>
                                </Box>
                                <Box>
                                    <Typography variant="h6">
                                        {msg.data.first} {msg.data.last}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6">
                                        {msg.data.email}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body1">
                                        Sent on {dates[i].format('MMMM D')} at {dates[i].format('h A')}
                                    </Typography>
                                </Box>
                                <Box mt={3}>
                                    <Typography variant="body1">
                                        {msg.data.message}
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                ))}
            </Box>
            {moreToLoad && <Box mt={3} maxWidth="sm" textAlign="center">
                <OrangePrimaryButton disabled={loading} onClick={() => loadMore()}>
                    Load Older Messages
                </OrangePrimaryButton>
            </Box>}
            
        </Box>
    )
}