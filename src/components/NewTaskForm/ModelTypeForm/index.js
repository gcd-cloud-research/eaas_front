import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Typography from "@mui/material/Typography";
import store from "../../../store";
import {MODEL_TYPE_SELECTED} from "../../../constants/actionTypes";

const ModelTypeForm = () => {
    const [value, setValue] = React.useState(() => store.getState().newtask.type);
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('');

    const handleRadioChange = (event) => {
        store.dispatch({
            type: MODEL_TYPE_SELECTED,
            payload: {
                type: event.target.value
            }
        });

        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value === 'best') {
            setHelperText('You got it!');
            setError(false);
        } else if (value === 'worst') {
            setHelperText('Sorry, wrong answer!');
            setError(true);
        } else {
            setHelperText('Please select an option.');
            setError(true);
        }
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Model Type
            </Typography>
            <form onSubmit={handleSubmit}>
                <FormControl
                    sx={{ m: 3 }}
                    component="fieldset"
                    error={error}
                    variant="standard"
                >
                    <FormLabel component="legend">Pick the type of your model:</FormLabel>
                    <RadioGroup
                        aria-label="quiz"
                        name="quiz"
                        value={value}
                        onChange={handleRadioChange}
                    >
                        <FormControlLabel value="linear" control={<Radio />} label="Linear" />
                        <FormControlLabel value="nonlinear" control={<Radio />} label="Non-linear" />
                    </RadioGroup>
                    <FormHelperText>{helperText}</FormHelperText>
                </FormControl>
            </form>
        </React.Fragment>
    )
};

export default ModelTypeForm;
