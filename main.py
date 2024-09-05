from flask import Flask, render_template, request
from werkzeug.middleware.proxy_fix import ProxyFix

app = Flask(__name__)
app.wsgi_app = ProxyFix(app.wsgi_app, x_proto=1, x_host=1)


def get_info():
    real_ip = request.headers.get("X-Real-IP")
    user_agent = request.headers.get("User-Agent")

    print("=" * 10, "NEW CONNECTION", "=" * 10)
    print(f"Real IP: {real_ip}")
    print(f"User Agent: {user_agent}")
    print("=" * 10, "-" * 14, "=" * 10)


@app.route("/")
def index():
    get_info()
    return render_template("en.html")


@app.route("/lv")
def lv():
    return render_template("lv.html")


@app.route("/ru")
def ru():
    return render_template("ru.html")


if __name__ == "__main__":
    app.run("127.0.0.1", 8080, debug=True)
