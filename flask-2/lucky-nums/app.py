import os
from flask import Flask, render_template, request, flash, redirect, session, jsonify
from models import db, connect_db, Lucky

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///lucky-num'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = "oh-so-secret"

connect_db(app)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")

@app.route('/api/get-lucky-num')
def api_endpoint():
    lucky_num = [lucky.to_dict() for lucky in Lucky.query.all()]
    return jsonify(lucky_num = lucky_num)

@app.route('/api/get-lucky-num', methods = ["POST"])
def create_lucky():
    data = request.json
    lucky = Lucky(
        name = data['name'],
        email = data['email'],
        year = data['year'],
        color = data['color'],
    )
    
    db.session.add(lucky)
    db.session.commit()

    return (jsonify(lucky=lucky.to_dict()), 201)


    # name = request.args['name']
    # email = request.args['email']
    # year = request.args['year']
    # color = request.args['color']
