from distutils.log import debug
from flask import Flask, render_template, request
app = Flask(__name__)



@app.route("/")
def hello():
    return render_template("index.html")

@app.route('/get_value', methods=['GET', 'POST'])
def my_form_post():
    theta1 = request.form['input_text1']
    theta2 = request.form['input_text2']
    theta3 = request.form['input_text3']
    printer(int(float(theta1)), theta2, theta3)
    return theta1

def printer(theta1, theta2, theta3):
    print([theta1, theta2, theta3])

if __name__ == "__main__":
    app.run(debug='true')
    #app.run(host='0.0.0.0', port=5000)


