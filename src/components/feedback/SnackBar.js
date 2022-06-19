import { Snackbar, Alert, Button } from '@mui/material';

export default function SnackBar (open, handleClose, severity, message) {
    
    return (
        // <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        //     <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        //         {message}
        //     </Alert>
        // </Snackbar>
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Note archived"
            action={
                <>
                    <Button color="secondary" size="small" onClick={handleClose}>
                        UNDO
                    </Button>
                    
                </>
            }
        />
    )
}
