import {Autocomplete, TextField, Button, Card, CardContent, CardActions, Typography, Grid, Link} from "@mui/material";
import React, {useEffect, useState} from "react";
import {symptoms} from '../resources/symptoms'

const Symptom = (props) => {
    const [symptom, setSymptom] = useState(null);
    const symptomsList = symptoms;
    const updateSymptom = (e, value) => {
        props.updateList(value);
        for(let i=0; i<symptomsList.length; i++) {
            if(symptomsList[i].label === value) {
                setSymptom(symptomsList[i]);
                break;
            }
        }
        console.log("Symptom is ", symptom);
    };

    useEffect(() => {
        // console.log("Use Effect Symptom is ", symptom);
    }, [symptom])

    return(
      <div style={{marginTop: '10px', marginBottom: '10px'}}>
          <Grid container spacing={3}
                justifyContent="center"
                alignItems="center"
          >
              <Grid item xs={6}>

                  <Autocomplete
                      id="symptom1"
                      options={symptomsList}
                      sx={{ width: 300 }}
                      onInputChange={(e, value) => updateSymptom(e, value)}
                      renderInput={(params) => <TextField {...params} label="Symptom" />}
                  />
              </Grid>
              <Grid item xs={6}>
                  {symptom !== null ? (<Card sx={{minWidth: 275}}>
                      <CardContent>
                          <Typography variant="h5" component="div">
                              {symptom.label}
                          </Typography>
                          <Typography sx={{mb: 1.5}} color="text.secondary">
                              Severity: {symptom.severity}
                          </Typography>
                          <Typography variant="body2">
                              Description: {symptom.description}
                          </Typography>
                      </CardContent>
                      <CardActions>
                          <Link href={"https://www.google.com/search?q="+symptom.label}>Learn More</Link>
                      </CardActions>
                  </Card>): null}
              </Grid>
          </Grid>
      </div>
    );
}

export default Symptom;