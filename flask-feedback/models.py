from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

db = SQLAlchemy()

bcrypt = Bcrypt()

def connect_db(app):
    db.app = app
    db.init_app(app)


class User(db.Model):
    ''' creating a user model '''
    __tablename__ = "users"

    username = db.Column(db.String(20), nullable = False, unique = True, primary_key = True)
    password = db.Column(db.Text, nullable = False)
    email = db.Column(db.String(50), nullable = False, unique = True)
    first_name = db.Column(db.String(30), nullable = False)
    last_name = db.Column(db.String(30), nullable = False)

    feedback = db.relationship("Feedback", backref = "user", cascade = "all,delete")

    @classmethod
    def register(cls, username, password, first_name, last_name, email):
        '''register the user with a hashed password'''
        hashed = bcrypt.generate_password_hash(password)
        hashed_utf8 = hashed.decode("utf8")
        user = cls(
            username = username,
            password = password,
            first_name = first_name,
            last_name = last_name,
            email = email
        )
        db.session.add(user)
        return user

    @classmethod
    def authenticate(cls, username, password):
        '''make sure the user exists and the pwd is right'''
        u = User.query.filter_by(username = username).first()
        if u and bcrypt.check_password_hash(u.password, password):
            return u 
        else:
            return False

class Feedback(db.Model):
    '''feedback'''

    __tablename__ = "feedback"

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(100), nullable = False)
    content = db.Column(db.Text, nullable = False)
    username = db.Column(db.String(20), db.ForeignKey('users.username'), nullable = False)
