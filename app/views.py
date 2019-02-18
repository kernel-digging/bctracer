from app import app
from flask import request, jsonify

@app.route("/", methods=["GET"])
def index():
    return jsonify(message="Hello World!"), 200
