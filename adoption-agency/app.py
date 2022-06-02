from flask import Flask, render_template,  redirect, flash, session, jsonify
from flask_debugtoolbar import DebugToolbarExtension
from models import db, connect_db, Pet
from forms import AddPetForm, EditPetForm

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///adopt'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "secret-key"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)
db.create_all()

@app.route('/')
def homepage():
    '''show the homepage'''
    pets = Pet.query.all()
    return render_template('home.html', pets = pets)

@app.route('/pet/new', methods = ["GET", "POST"])
def add_pet():
    '''add a pet to the database'''
    form = AddPetForm()

    if form.validate_on_submit():
        name = form.name.data
        species = form.species.data
        photo_url = form.photo_url.data
        age = form.age.data
        notes = form.notes.data
        availability = form.availability.data

        new_pet = Pet(name = name, species = species, photo_url = photo_url, age = age, notes = notes, availability = availability)
        db.session.add(new_pet)
        db.session.commit()
        flash(f"{new_pet.name} added.")
        return redirect('/')
    else:
        return render_template('add_pet_form.html', form = form)

@app.route("/<int:pet_id>", methods = ["GET", "POST"])
def edit_pet(pet_id):
    '''edit your pets info'''

    pet = Pet.query.get_or_404(pet_id)
    form = EditPetForm(obj = pet)

    if form.validate_on_submit():
        pet.notes = form.notes.data
        pet.available = form.available.data
        pet.photo_url = form.photo_url.data
        db.session.commit()
        flash(f"{pet.name} updated.")
        return redirect('/')
    else:
        return render_template("pet-edit-form.html", form = form, pet = pet)


