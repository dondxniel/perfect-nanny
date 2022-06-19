import { useState } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function CustomerSpecificProfileInfo({user}){
    const [numOfKids, setNumOfKids] = useState(0);
    const [numOfFields, setNumOfFields] = useState([]);
    const [ ageOfkids, setAgeOfKids ] = useState([]);
    const [ classOfkids, setClassOfKids ] = useState([]);

    const onChangeNum = e => {
        let num;
        try{
            num = e.target.value;
            num = parseInt(num);
            setNumOfKids(num);
            setNumOfFields(new Array(num).fill(null))
            setAgeOfKids(new Array(num).fill(null))
            setClassOfKids(new Array(num).fill(null))
        }catch(e){
            if(num === ""){
                alert("The input field can only recieve positive whole numbers!")
            }
        }
    }

    const onChangeAge = (e, i) => {
        setAgeOfKids(prev => {
            let newState= [];
            prev.map((item, prev_i)=>{
                if(prev_i === i){
                    newState.push(e.target.value);
                }else{
                    newState.push(item);
                }
            })
            return newState;
        });
        // alert(e.target.name);
        console.log(`Age: ${i}`);
    }

    const onChangeClass = (e, i) => {
        setClassOfKids(prev => {
            let newState = [];
            prev.map((item, prev_i)=>{
                if(prev_i === i){
                    newState.push(e.target.value);
                }else{
                    newState.push(item);
                }
            })
            return newState;
        });
        // alert(e.target.name);
        console.log(`Class: ${i}`);
    }

    return(
        <>
            <div className='my-4'>
                <TextField label = "Occupation" variant = "standard" className = "input-fields" type = "text"/>
            </div>
            <div className='my-4'>
                <TextField onChange = {onChangeNum} label = "Number Of Kids" variant = "standard" className = "input-fields" type = "number" value = {numOfKids} />
            </div>
            {numOfFields.map((item, index)=>
                <div key = {index}>
                    <div className='my-4'>
                        <TextField onChange = {(e) => onChangeAge(e, index)} label = {`Age Of Kid ${index+1}`}variant = "standard" className = "input-fields" name={`age${index}`} type = "number"/>
                    </div>
                    <div className='my-4'>
                        <TextField onChange = {(e) => onChangeClass(e, index)} label = {`Class of Kid ${index+1}`} variant = "standard" className = "input-fields" name={`class${index}`} type = "number"/>
                    </div>
                </div>
            )}
        </>
    )
}