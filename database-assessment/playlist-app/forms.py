"""Forms for playlist app."""

from wsgiref.validate import validator
from wtforms import SelectField, StringField, TextField
from flask_wtf import FlaskForm
from wtforms.validators import InputRequired, Length
 

class PlaylistForm(FlaskForm):
    """Form for adding playlists."""

    name = StringField("Playlist Name:", validators = [InputRequired()])
    description = TextField("Playlist Description:", validators = [InputRequired()])


class SongForm(FlaskForm):
    """Form for adding songs."""

    title = StringField("Song name:", validators = [InputRequired()])
    artist = StringField("Artist name:", validators =  [InputRequired()])


# DO NOT MODIFY THIS FORM - EVERYTHING YOU NEED IS HERE
class NewSongForPlaylistForm(FlaskForm):
    """Form for adding a song to playlist."""

    song = SelectField('Song To Add', coerce=int)
