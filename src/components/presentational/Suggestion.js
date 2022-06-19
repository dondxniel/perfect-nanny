import React, { useState } from 'react';
import { Card, CardContent, Typography, CardMedia, CardActions, Button, Dialog, DialogTitle, DialogActions, Slide } from '@mui/material';
import { Col } from 'react-bootstrap';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Suggestion({nanny}){
    const [ open, setOpen ] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Col md={3} className = "my-3">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={nanny.picture.medium}
                    alt={nanny.name.first}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {nanny.name.first + " " + nanny.name.last}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <b>Age Bracket: </b> 20-30 years <br />
                        <b>Hobbies: </b> Cooking, walking, reading and boxing.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick = {handleOpen} size="small">Select</Button>
                    <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                    >
                        <DialogTitle>Are you sure you want to select this nanny?</DialogTitle>
                        <DialogActions>
                            <Button onClick={handleClose}>Yes</Button>
                            <Button onClick={handleClose}>No, Choose Another</Button>
                        </DialogActions>
                    </Dialog>
                </CardActions>
            </Card>
        </Col>
    )
}