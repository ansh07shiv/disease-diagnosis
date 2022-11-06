import {Button, Divider} from "@mui/material";
import Symptom from "./symptom";
import React, {useState} from "react";
import axios from "axios";
const SymptomForm = (props) => {

    const [inputList, setInputList] = useState([]);
    const onAddBtnClick = event => {
        setInputList(inputList.concat(<Symptom key={inputList.length} updateList={updateSymptomsList}/>));
    };
    const [symptomsList, setSymptomsList] = useState([]);
    const updateSymptomsList = (value) => {
        const newList = [...symptomsList, value];
        setSymptomsList(newList);
    }

    const onSuccessHandler = () => {
        const toBePassedML = [];
        for(let i=0; i<symptomsList.length; i++) {
            let value = symptomsList[i].replace(' ', '_');
            value = value.toLowerCase();
            toBePassedML.push(value);
        }
        console.log("Values to be Passed to ML: ", toBePassedML);
        axios.post(
            'http://10.203.9.223/predict',
            {
                "symptoms": toBePassedML,
                "testValue": "test"
            }
        ).then((response) => {
            console.log("API Response: ", response);
        }).catch((error) => {
            console.log("API Error: ", error);
        })
        props.isSearchClicked();
    }

    return(
      <>
          <div className="Symptom-form-container">
              <form className="Symptom-form">
                  <div className="Symptom-form-content">
                      <h4 className="Auth-form-title">Let us know the symptoms to help us diagnose the disease!</h4>
                      <h5 className="Auth-form-sub-title">Please complete your health profile to help us know about you more!</h5>
                      <Divider sx={{ borderBottomWidth: 5, color: 'black' }}/>
                      {inputList}
                      <br/>
                      <div style={{marginTop: '10px', width:'100%'}}>
                          <Button variant="contained" color="error" onClick={onAddBtnClick}>
                              Add Symptom
                          </Button>
                      </div>
                      <Divider />
                      <div style={{marginTop: '10px', width:'100%'}}>
                          <Button style={{width: '100%'}} variant="contained" color="success" onClick={onSuccessHandler} >
                              Diagnose Disease
                          </Button>
                      </div>
                  </div>
              </form>
          </div>

      </>
    );
}

export default SymptomForm;