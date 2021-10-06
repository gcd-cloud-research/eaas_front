import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import store from "../../../store";
import {MODEL_FILE_ADDED, MODEL_FILE_REMOVED} from "../../../constants/actionTypes";

const FileForm = () => {
    const [files, setFile] = useState(store.getState().modelfiles);
    const MAX_ALLOWED_FILE = 10;

    async function uploadSingleFile(e) {
        const reader = new FileReader();
        reader.onload = async (x) => {
            const text = (x.target.result);
            store.dispatch({
               type: MODEL_FILE_ADDED,
               payload: {
                   name: x.target.fileName,
                   contents: text
               }
            });
            setFile([
                ...files,
                {
                    name: x.target.fileName,
                    contents: text
                }
            ]);
        };

        reader.fileName = e.target.files[0].name;
        reader.readAsText(e.target.files[0]);
    }

    function deleteFile(e) {
        store.dispatch({
            type: MODEL_FILE_REMOVED,
            payload: {
                index: e
            }
        });
        const s = files.filter((item, index) => index !== e);
        setFile(s);
    }

    return (
        <>
            <div className="App-CenteredContainer2">
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

            <Grid item xs={12} md={6} id="App-FileUploadContainer">
                <Typography sx={{ mt: 4, mb: 2, width: "100%", maxWidth: "100%" }} variant="h6" component="div">
                    Currently selected files: {files.length}
                </Typography>
                    <List dense={true}>
                        {files.map((item, index) => (
                            <Card sx={{ width: '100%', height: '10%' }} className="App-FileUploadCard" key={index} >
                                <CardContent className="">
                                    <ListItem
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete" onClick={() => deleteFile(index)}>
                                                <DeleteIcon/>
                                            </IconButton>
                                        }
                                    >
                                        <ListItemAvatar>
                                            <Avatar>
                                                <FolderIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={item.name}
                                        />
                                    </ListItem>
                                </CardContent>
                            </Card>
                        ))}
                    </List>
            </Grid>

            <br/>
            </div>
        </>
    );
};

export default FileForm;

