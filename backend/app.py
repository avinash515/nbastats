#!/usr/bin/env python3
import os
import time
import pyodbc
import json
import sqlalchemy
from flask_cors import CORS
from flask import request
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
CORS(app)

class Query:
  def __init__(self, app):
    self.app = app
    server = 'nbastats.database.windows.net'
    database = 'NbaStats'
    username = 'user'
    password = 'Preston123avinash'

    connection_string = "mssql+pyodbc://" + username + "@" + server + ":" + password +"@" + server + ":1433/" + database + "?driver=ODBC+Driver+13+for+SQL+Server"
    app.config["SQLALCHEMY_DATABASE_URI"] = connection_string
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db = SQLAlchemy(app)
    self.db = db

    db.Model.metadata.reflect(db.engine)

    class Players(db.Model):
      __table__ = db.Model.metadata.tables["nbastats"]

      def serialize(self):
        return {
            "player": "{}".format(self.Player),
            "tm": "{}".format(self.Tm),
            "pts": "{}".format(self.PTS),
            "ast": "{}".format(self.AST),
            "trb": "{}".format(self.TRB),
            "stl": "{}".format(self.STL),
            "blk": "{}".format(self.BLK),
            "fgpct": "{}".format(self.FGPCT),
            "threep": "{}".format(self.THREEP),
            "threeppct": "{}".format(self.THREEPPCT),
            "ft": "{}".format(self.FT),
            "ftpct": "{}".format(self.FTPCT),
            "rk": "{}".format(self.Rk)
        }

    self.players = Players

  def get_player_data(self, player_name):
    model = self.players
    qry = model.query
    qry = qry.order_by(model.Player)
    if player_name != None:
      qry = qry.filter(model.Player == player_name)

    page = qry.paginate(1, 300, error_out=True)
    data = [m.serialize() for m in page.items]
    return json.dumps(data, indent=2)

query = Query(app)

@app.route("/")
def return_player_data():
  return query.get_player_data(request.args.get("player"))


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port='80')