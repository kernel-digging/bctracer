from flask import Flask, send_from_directory
from flask_cors import CORS
import os

CLIENT_PATH = '../client/build'
app = Flask(__name__, static_folder = CLIENT_PATH + '/static')

CORS(app)

from app import views

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(CLIENT_PATH + path):
        return send_from_directory(CLIENT_PATH, path)
    else:
        return send_from_directory(CLIENT_PATH, 'index.html')

