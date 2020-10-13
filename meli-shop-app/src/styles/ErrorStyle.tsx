import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useErrorStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            maxWidth: 1018,
            minHeight: 204,
            borderRadius: 4,
            margin: '48px auto',
            alignItems: 'center',
            padding: '42px 40px 32px',
        },
        h3: {
            fontSize: 24,
            fontWeight: 600,
            lineHeight: 1.08,
        },
        ul: {
            padding: 0
        },
        list: {
            lineHeight: 1.231,
            listStylePosition: 'outside',
            marginBottom: 3,
            marginLeft: 18,
        },
        imgItem: {
            padding: '0 24px',
            marginRight: 34
        }
    }),
);