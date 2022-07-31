from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Lucky(db.Model):
    '''lucky number information'''

    __tablename__ = 'lucky-nums'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.Text, nullable = False)
    email = db.Column(db.Text, nullable = False)
    year = db.Column(db.Integer, nullable = False)
    color = db.Column(db.Text, nullable = False)

    def to_dict(self):
        '''seralize the information to a dict of information'''

        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "year": self.year,
            "color": self.color,
        }

def connect_db(app):
    '''connect to database'''

    db.app = app
    db.init_app(app)