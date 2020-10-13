import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useListStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            padding: '30px',
        },
        text: {
            transform: 'none'
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: 800,
            borderBottom: 'thin solid #eee',
            '&:first-child': {
                borderRadius: '4px 4px 0 0'
            },
            '&:last-child': {
                borderRadius: '0 0 4px 4px'
            }
        },
        rating: {
            color: '#3483fa',
            // fontSize: 'px'
        },
        image: {
            width: 160,
            height: 160,
            display: "block"
        },
        h2: {
            color: '#333',
            fontSize: '20px',
            fontWeight: 300,
            lineHeight: 1.3,
        },
        imgItem: {
            padding: '0 24px'
        },
        img: {
            height: '100%',
            width: '100%',
            objectFit: 'contain'

        },
    }),
);