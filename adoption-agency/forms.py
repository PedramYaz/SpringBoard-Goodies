from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, IntegerField, TextAreaField, SelectField
from wtforms.validators import InputRequired, URL, Optional, NumberRange, Length


class AddPetForm(FlaskForm):
    '''form for adding pets'''

    name = StringField("Pet Name", validators = [InputRequired("Name cannot be blank")])

    species = SelectField("Species", choices = [('cat', 'Cat'), ('dog', 'Dog'), ('spiky', 'Porcupine')], validators = [InputRequired("Species cannot be blank")])

    photo_url = StringField("Photo", validators = [Optional(), URL()])

    age = IntegerField("Age", validators = [Optional(), NumberRange(min = 0, max = 30, message = "Please input age from 0 - 30 years old")])

    notes = TextAreaField("Additional Notes", validators = [Optional()])

    availability = BooleanField("Availability", validators = [Optional()])

class EditPetForm(FlaskForm):
    '''edit your pets data'''

    photo_url = StringField(
        "Photo URL",
        validators=[Optional(), URL()],
    )

    notes = TextAreaField(
        "Comments",
        validators=[Optional(), Length(min=10)],
    )

    available = BooleanField("Available?")