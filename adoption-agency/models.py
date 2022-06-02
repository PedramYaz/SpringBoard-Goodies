from flask_sqlalchemy import SQLAlchemy

GENERIC_IMAGE = "https://mylostpetalert.com/wp-content/themes/mlpa-child/images/nophoto.gif"


db = SQLAlchemy()

class Pet(db.Model):
    '''pet model'''

    __tablename__ = "pets"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    species = db.Column(db.String, nullable = False)
    photo_url = db.Column(db.Text)
    age = db.Column(db.Integer)
    notes = db.Column(db.Text)
    availability = db.Column(db.Boolean, nullable = False, default = True)

    def image_url(self):
        return self.photo_url or GENERIC_IMAGE

def connect_db(app):
    db.app = app
    db.init_app(app)
    