import React, {useEffect, useState} from "react";
import {Alert, AlertTitle, Typography, Divider, Grid, Button, List, ListItem, ListItemText} from "@mui/material";
import {diseasePrecautions} from "../resources/disease_precautions";

const Results = (props) => {

    return(
      <>
          <div className="Symptom-form-container">
              <form className="Symptom-form">
                  <div className="Symptom-form-content">
                      <h3 className="Auth-form-title">Results</h3>
                      <Alert severity="success">
                          <AlertTitle>Success</AlertTitle>
                          The diagnosed disease is — <strong>{props.searchResults.disease+"!"}</strong>
                      </Alert>
                      <Alert style={{marginTop: '5px'}} severity="warning">Diagnosis Confidence: <strong>{props.searchResults.accuracy + "% !"}</strong></Alert>
                      <div style={{marginTop: '10px'}}>
                          <Typography>
                              Description: {"Malaria is a serious and sometimes fatal disease caused by a parasite that commonly infects a certain type of mosquito which feeds on humans. People who get malaria are typically very sick with high fevers, shaking chills, and flu-like illness."}
                          </Typography>
                      </div>
                      <div style={{padding: '20px'}}>
                          <Grid container spacing={2}
                                justifyContent="center"
                                alignItems="center">
                              <Grid item xs={6}>
                                  <Button variant="contained" color="success">Click to Know More (Move to Google Search for this Disease)!</Button>
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