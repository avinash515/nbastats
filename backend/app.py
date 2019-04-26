#!/usr/bin/env python3
import os
import time
import pyodbc
from flask import request
from flask import Flask, render_template

application = Flask(__name__)
app = application

def test_function():
    server = 'nbastats.database.windows.net'
    database = 'NbaStats'
    username = 'user'
    password = 'Preston123avinash'
    driver='{ODBC Driver 13 for SQL Server}'
    cnxn = pyodbc.connect('DRIVER='+driver+';SERVER='+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password)
    cursor = cnxn.cursor()
    cursor.execute("SELECT Player, Pts, Ast, Trb, Stl from nbastats")
    row = cursor.fetchone()
    while row:
        print (str(row))
        row = cursor.fetchone()

@app.route("/")
def test():
  return "test"

try:
    print("Before test_function global")
    test_function()
    print("After test_function global")
except Exception as exp:
    print("Got exception %s" % exp)

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0')