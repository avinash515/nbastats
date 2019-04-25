#!/usr/bin/env python3
import os
import time
import pyodbc
from flask import request
from flask import Flask, render_template

application = Flask(__name__)
app = application

def get_db_creds():
    db = os.environ.get("DB", None) or os.environ.get("database", None)
    username = os.environ.get("USER", None) or os.environ.get("username", None)
    password = os.environ.get("PASSWORD", None) or os.environ.get("password", None)
    hostname = os.environ.get("HOST", None) or os.environ.get("dbhost", None)
    return db, username, password, hostname

@app.route("/")
def test():
  return "test"

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0')