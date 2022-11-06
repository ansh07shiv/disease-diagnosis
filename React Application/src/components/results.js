import React from "react";
import {Alert, AlertTitle, Typography, Divider, Grid, Button, List, ListItem, ListItemText} from "@mui/material";
import {diseasePrecautions} from "../resources/disease_precautions";

const Results = () => {
    const precautions = diseasePrecautions;
    return(
      <>
          <div className="Symptom-form-container">
              <form className="Symptom-form">
                  <div className="Symptom-form-content">
                      <h3 className="Auth-form-title">Results</h3>
                      <Alert severity="success">
                          <AlertTitle>Success</AlertTitle>
                          The diagnosed disease is — <strong>{"Malaria!"}</strong>
                      </Alert>
                      <Alert style={{marginTop: '5px'}} severity="warning">Diagnosis Confidence: 80%!</Alert>
                      <div>
                          <Typography>
                              Description: {"Malaria is a serious and sometimes fatal disease caused by a parasite that commonly infects a certain type of mosquito which feeds on humans. People who get malaria are typically very sick with high fevers, shaking chills, and flu-like illness."}
                          </Typography>
                      </div>
                      <div style={{padding: '20px'}}>
                          <Grid container spacing={2}
                                justifyContent="center"
                                alignItems="center">
                              <Grid item xs={6}>
                                  <Button variant="contained" color="success">Show recommended Precautions</Button>
                              </Grid>
                          </Grid>
                      </div>
                  </div>
              </form>
          </div>
      </>
    );
}

export default Results;