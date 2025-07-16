from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests


@app.route('/api')
def dev_api():
    return jsonify(message="Hello from Development Backend!")


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001)
