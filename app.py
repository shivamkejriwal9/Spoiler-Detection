from flask import Flask,jsonify,request
from tensorflow import keras
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import pickle5 as pickle
import numpy as np
from flask_cors import CORS
import tensorflow as tf

with open('tokenizer.pickle', 'rb') as handle:
    tokenizer = pickle.load(handle)
model = keras.models.load_model('spoilers.h5', compile = False)
#model = pickle.load(open('bert_spoiler.pickle','rb'))
#run_model = tf.saved_model.load("./imdb_bert")
app = Flask(__name__)

CORS(app)

@app.route('/')
def index():
    return "root"

@app.route('/postReview', methods = ['POST'])
def getReview():
    text = request.json['text']
    #print("_________________________" + text + "_________________________")
    text_tokenized = tokenizer.texts_to_sequences([text])
    sequence_length = 200
    text_padded = pad_sequences(text_tokenized, maxlen = sequence_length, padding = 'post', truncating = 'post')
    result = model.predict(text_padded)
    #result = model.predict(text)
    #print(result[0][0])
    rounded_result = round(result[0][0])
    resp = {"prediction": str(rounded_result)}
    return jsonify(resp)

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=8080)