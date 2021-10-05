import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const FileForm = () => {
    const [files, setFiles] = React.useState("");

    const handleChange = e => {
        console.log(e.target);
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            console.log("e.target.result", e.target.result);
            setFiles(e.target.result);
        };
    };
    return (
        <>
            <Typography variant="h6" gutterBottom>
                Upload File
            </Typography>

            <input
                style={{ display: 'none' }}
                id="raised-button-file"
                multiple
                type="file"
                onChange={handleChange}
            />
            <label htmlFor="raised-button-file">
                <Button variant="outlined" component="span" endIcon={<FileUploadIcon/> }>
                    Upload
                </Button>
            </label>

            <br/>
            {files}
        </>
    );
};

export default FileForm;

