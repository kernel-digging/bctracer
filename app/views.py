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

    # AWK programmed
    command = '''R() { L=$1; P=$2; F=$3; E=$(awk -v line=$L -v i=1 '/^}/{if(NR>line && i){print NR; i--; } }' $P/$F); awk "NR>=$L-4 && NR<=$E+1" $P/$F; } ; R %s %s %s''' % (req['line'],  "/home/kosslab/git/linux", req['file'])
    print(command)

    p = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE)
    output, err = p.communicate()
    res = output.decode("utf-8")
    return jsonify(result=res), 200
