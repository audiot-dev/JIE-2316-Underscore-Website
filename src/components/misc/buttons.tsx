import { Button } from "@mui/material"
import { styled } from "@mui/material/styles"

export const OrangePrimaryButton = styled(Button)(({theme}) => ({
    background: theme.palette.primary.main,
    color: theme.palette.text.secondary,
    borderRadius: theme.spacing(1),
    padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
    transition: "background 300ms",
    "&:hover": {
        background: theme.palette.primary.dark
    }
}))

export const OrangePrimaryDenseButton = styled(Button)(({theme}) => ({
    background: theme.palette.primary.main,
    color: theme.palette.text.secondary,
    borderRadius: theme.spacing(1),
    padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
    transition: "background 300ms",
    "&:hover": {
        background: theme.palette.primary.dark
    }
}))

export const RedOrangePrimaryButton = styled(Button)(({theme}) => ({
    background: `linear-gradient(to bottom, 
        ${theme.palette.primary.main}, #F04B4C)`,
    color: theme.palette.text.secondary,
    borderRadius: theme.spacing(1),
    padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
    transition: "background 300ms",
    "&:hover": {
        background: `linear-gradient(to bottom, 
            ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
    }
}))

export const RedOrangePrimaryDenseButton = styled(Button)(({theme}) => ({
    background: `linear-gradient(to bottom, 
        ${theme.palette.primary.main}, #F04B4C)`,
    color: theme.palette.text.secondary,
    borderRadius: theme.spacing(1),
    padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
    transition: "background 300ms",
    "&:hover": {
        background: `linear-gradient(to bottom, 
            ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
    }
}))

export const RedOrangeLargeIconButton = styled(Button)(({theme}) => ({
    background: `linear-gradient(to bottom, 
        ${theme.palette.primary.main}, #F04B4C)`,
        padding: 20,
    color: '#fff'
}))