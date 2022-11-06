# Serve model as a flask application

import pickle
import numpy as np
import pandas as pd
from flask import Flask, request
from flask_cors import CORS

model = None
app = Flask(__name__)
CORS(app)


def load_model():
    global model
    # model variable refers to the global variable
    with open('model_disease_recognition_V2.pkl', 'rb') as f:
        model = pickle.load(f)


@app.route('/')
def home_endpoint():
    return 'Hello World!'


@app.route('/predict', methods=['POST'])
def get_prediction():
    # Works only for a single sample
    
    df1 = pd.read_csv('Symptom-severity.csv')
    if request.method == 'POST':
        print("Request: ", request)
        data = request.get_json()  # Get data posted as a json
        print("Json Data: ", data)
        data = data['symptoms']
        testing_val = ['shivering', 'chills']
        while len(testing_val) != 17:
            testing_val.append(0)
        testing_val = np.array(testing_val)
        vals = testing_val
        symptoms = df1['Symptom'].unique()

        for i in range(len(symptoms)):
            vals[vals == symptoms[i]] = df1[df1['Symptom'] == symptoms[i]]['weight'].values[0]
            
        print("Values: ", vals)
        prediction = model.predict(np.array([vals]))  # runs globally loaded model on the data
        preds = model.predict_proba(np.array([vals]))
        percentage_accuracy = np.amax(preds)*100
    return str(prediction[0]) + "&" + str(percentage_accuracy)


if __name__ == '__main__':
    load_model()  # load model at the beginning once only
    app.run(host='0.0.0.0', port=80)