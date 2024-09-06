from flask import Flask, render_template, request
from werkzeug.middleware.proxy_fix import ProxyFix
from datetime import datetime

app = Flask(__name__)
app.wsgi_app = ProxyFix(app.wsgi_app, x_proto=1, x_host=1)


@app.route("/")
def index():
    return render_template("en.html")


@app.route("/lv")
def lv():
    return render_template("lv.html")


@app.route("/ru")
def ru():
    return render_template("ru.html")


if __name__ == "__main__":
    app.run("127.0.0.1", 8080, debug=True)
