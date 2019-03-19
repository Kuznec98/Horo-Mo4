from bottle import route, run, view
from datetime import datetime as dt
from random import random
from horoscope import generate_prophecies

@route("/")
@view("predictions")
def index():
  now = dt.now()
  prophecies = generate_prophecies()
  return {
    "date": f"{now.year}-{now.day}-{now.month}",
    "prophecies":prophecies
  }


@route("/api/forecasts")
def api_forecasts():
    return {"prophecies":prophecies}

run(
  host="localhost",
  port=8000
)