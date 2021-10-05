import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const FileForm = () => {
    const [files, setFile] = useState([]);
    const MAX_ALLOWED_FILE = 10;

    async function uploadSingleFile(e) {
        setFile([...files, URL.createObjectURL(e.target.files[0])]);

        const reader = new FileReader();
        reader.onload = async (x) => {
            const text = (x.target.result);
            console.log(text);
        };
        reader.readAsText(e.target.files[0]);
    }

    function deleteFile(e) {
        const s = files.filter((item, index) => index !== e);
        setFile(s);
        console.log(s);
    }

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Upload File
            </Typography>

            <input
                style={{ display: 'none' }}
                id="raised-button-file"
                type="file"
                disabled={files.length >= MAX_ALLOWED_FILE}
                multiple
                onChange={uploadSingleFile}
            />
            <label htmlFor="raised-button-file">
                <Button variant="outlined" component="span" endIcon={<FileUploadIcon/> }>
                    Upload
                </Button>
            </label>
            <span className="form-group preview">
                {files.length > 0 &&
                files.map((item, index) => {
                    return (
                        <div key={item}>
                            <Typography> {item} </Typography>
                            <button type="button" onClick={() => deleteFile(index)}>
                                delete
                            </button>
                        </div>
                    );
                })}
            </span>

            <br/>
        </>
    );
};

export default FileForm;

