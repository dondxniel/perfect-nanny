import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import edBackground from '../../constants/edBackground';

export default function NannySpecificProfileInfo({user}){
    return(
        <>
            <FormControl sx = {{width: "100%", textAlign: 'center'}}variant="standard">
                <InputLabel id="demo-simple-select-standard-label">Educational Background</InputLabel>
                <Select 
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Location"
                >
                    {edBackground.map((item, index)=>
                    <MenuItem value={item} key = {index}>{item}</MenuItem>
                    )}
                </Select>
            </FormControl>
            <div className='my-4'>
                <TextField label = "Years Of Experience" variant = "standard" className = "input-fields" type = "number"/>
            </div>
        </>
    )
}