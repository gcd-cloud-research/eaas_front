import * as React from 'react';
import Typography from "@mui/material/Typography";
import store from "../../store";
import {useState} from "react";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const ProblemCharacteristics = () => {
    const [files] = useState(store.getState().modelfiles);
    const model = {
        type: undefined,
        uncertainty: undefined,
        solver: undefined
    };

    function getFileExtension(item) {
        return `File: ${item.name}  -   Extension: ${item.name.split('.').at(-1)}`;
    }

    function getExtensionList() {
        console.log(files);
        return files.map(item => getFileExtension(item));
    }


    function getModelType() {

        const ext = files[0].name.split('.').at(-1);

        if (files.length === 1) {
            if (ext === "mps" || ext === 'ls') {
                model.type = "linear";
                model.uncertainty = "deterministic";

                console.log(model);
            }

        }

        if (ext === "nl")
        {
            model.type = "non-linear";
        }

        console.log(files);
        console.log(files.length);
        console.log(ext);
        console.log(files.length === 1);
    }

    getModelType();

    return (
        <React.Fragment>
            <Grid item xs={12} md={6} id="App-FileUploadContainer">
                <Typography sx={{ mt: 4, mb: 2, width: "100%", maxWidth: "100%" }} variant="h6" component="div">
                    Currently selected files: {files.length}
                </Typography>
                <List dense={true}>
                    {getExtensionList().map((item, index) => (
                        <Card sx={{ width: '100%', height: '10%' }} className="App-FileUploadCard" key={index} >
                            <CardContent className="">
                                <ListItem>
                                    <ListItemText
                                        primary={item}
                                    />
                                </ListItem>
                            </CardContent>
                        </Card>
                    ))}
                </List>
            </Grid>

            <Typography component={'span'}>
                Detected model:
                <Typography> Type: {model.type} </Typography>
                <Typography> Uncertainty: {model.uncertainty} </Typography>
                <Typography> Solver: {model.solver} </Typography>

            </Typography>
        </React.Fragment>
    )
};

export default ProblemCharacteristics;
