from app import app
from flask import request, jsonify
import subprocess

@app.route("/api", methods=["GET"])
def index():
    return jsonify(status="Healthy!"), 200


@app.route("/api/cmd", methods=["POST"])
def cmd():
    req = request.get_json()
    command = 'sudo ' + req['command']
    p = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
    output, err = p.communicate()

    res = output.decode("utf-8")
    return jsonify(result=res), 200

# TODO: validate json object
@app.route("/api/code", methods=["POST"])
def code():
    req = request.get_json()
    cmd = "grep -A 35 -Fx \"$(awk 'NR=={line}' {path}/{file})\" {path}/{file}".format(**req, path="/home/danieltl/git/linux")
    command = 'sudo ' + cmd

    print(command)

    p = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
    output, err = p.communicate()
    res = output.decode("utf-8")
    return jsonify(result=res), 200
