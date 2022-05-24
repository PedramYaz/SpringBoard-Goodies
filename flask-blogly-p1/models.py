"""Models for Blogly."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

DEFAULT_IMAGE_URL = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.merriam-webster.com%2Fwords-at-play%2Fwhich-came-first-the-twitter-chicken-or-the-twitter-egg&psig=AOvVaw3UrIT39NqTkQMqGZiOdv9E&ust=1653494410755000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKDrq-zA-PcCFQAAAAAdAAAAABAD"

class User(db.Model):
    '''Users.'''
    __tablename___ = 'users'

    id = db.Column(db.Integer, primary_key = True, autoincrement = True)
    first_name = db.Column(db.Text, nullable = False)
    last_name = db.Column(db.Text, nullable = False)
    image_url = db.Column(db.Text, nullable = False, default = DEFAULT_IMAGE_URL)

    @property
    def full_name(self):
        """return the full name of the user"""
        return f"{self.last_name}, {self.first_name}"

def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)
