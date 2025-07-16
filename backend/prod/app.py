from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/api')
def prod_api():
    return jsonify(message="Hello from Production Backend!")


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3002)
