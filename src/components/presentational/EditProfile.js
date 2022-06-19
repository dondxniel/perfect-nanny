import { useState } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CustomerSpecificEditProfile from './CustomerSpecificEditProfile';

export default function EditProfile({user}){
    const [ formData, setFormData ] = useState({
        firstName: "", lastName: "", phoneNumber: "", email: "", location: "", nannyType: "", occupation: "", numOfKids: 0, agesOfKids: [], classesOfKids: []
    });

    const setState = e => {
        setFormData(prev=> ({...prev, [e.target.name]: e.target.value}))
    }
    
    const [nannyType, setNannyType] = useState("");
    const onNannyTypeChange = e => setNannyType(e.target.value);

    return (
        <div>
            <form>
                <div className='my-4'>
                    <TextField label = "First name" variant = "standard" className = "input-fields" />
                </div>
                <div className='my-4'>
                    <TextField label = "Last name" variant = "standard" className = "input-fields" />
                </div>
                <div className='my-4'>
                    <TextField label = "Phone number" variant = "standard" className = "input-fields" />
                </div>
                <div className='my-4'>
                    <TextField label = "Email" variant = "standard" className = "input-fields" />
                </div>
                <div className='my-4'>
                    <FormControl sx = {{width: "100%", textAlign: 'center'}}variant="standard">
                        <InputLabel id="demo-simple-select-standard-label">Location</InputLabel>
                        <Select 
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="Location"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='my-4'>
                    <FormControl sx = {{width: "100%", textAlign: 'center'}}variant="standard">
                        <InputLabel id="demo-simple-select-standard-label">Your Nanny Type</InputLabel>
                        <Select 
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="Location"
                            value={nannyType}
                            onChange={onNannyTypeChange}
                        >
                            <MenuItem value="Home Cleaner">Home Cleaner</MenuItem>
                            <MenuItem value="Baby Sitter">Baby Sitter</MenuItem>
                            <MenuItem value="Both">Both</MenuItem>
                            <MenuItem value="Others">Others</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                {nannyType === "others" && 
                <div className='my-4'>
                    <TextField label = "Describe your nanny type here" variant = "standard" className = "input-fields" />
                </div>}

                <CustomerSpecificEditProfile />

                <div className = "text-center my-2">
                    <button className = "call-to-action secondary-bg">Save</button>
                </div>
            </form>
        </div>
    )
}