from flask import Flask, render_template, request
from werkzeug.middleware.proxy_fix import ProxyFix
from datetime import datetime

app = Flask(__name__)
app.wsgi_app = ProxyFix(app.wsgi_app, x_proto=1, x_host=1)


# def log_info():
#     time = datetime.now().strftime("%d/%m/%y @ %H:%M:%S")
#     real_ip = request.headers.get("X-Real-IP")
#     url = request.url
#     user_agent = request.headers.get("User-Agent")

#     log = (
#         "=" * 10,
#         " GET REQUEST ",
#         "=" * 10,
#         f"\nTime: {time}",
#         f"\nIP: {real_ip}",
#         f"\nURL: {url}",
#         f"\nAgent: {user_agent}\n",
#         "=" * 10 + " ",
#         "-" * 11 + " ",
#         "=" * 10,
#         "\n" * 3,
#     )

#     with open("Requests.log", "a") as file:
#         file.writelines("".join(log))


@app.route("/")
def index():
    # log_info()
    return render_template("en.html")


@app.route("/lv")
def lv():
    # log_info()
    return render_template("lv.html")


@app.route("/ru")
def ru():
    # log_info()
    return render_template("ru.html")


if __name__ == "__main__":
    app.run("127.0.0.1", 8080, debug=True)
