"""Madlibs Stories."""
from flask import Flask, request, render_template
import random
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret-key'

debug = DebugToolbarExtension(app)

@app.route('/')
def show_story_options():
    return render_template('mainPage.html')

@app.route('/story1')
def show_story1():
    return render_template('story1.html')

@app.route('/story1-solution')
def show_story1_solution():
    place = request.args['place']
    noun = request.args['noun']
    verb = request.args['verb']
    adj = request.args['adj']
    p_noun = request.args['p_noun']
    return render_template('story.html', place = place, noun = noun, verb = verb, adj = adj, p_noun = p_noun)

@app.route('/story2')
def show_story2():
    return render_template('story2.html')

@app.route('/story2-solution')
def show_story2_solution():
    adj1 = request.args['adj1']
    noun1 = request.args['noun1']
    verb1 = request.args['verb1']
    adverb1 = request.args['adverb1']
    adj2 = request.args['adj2']
    noun2 = request.args['noun2']
    noun3 = request.args['noun3']
    return render_template('story2-solution.html', adj1 = adj1, noun1 = noun1, verb1 = verb1, adverb1 = adverb1, adj2 = adj2, noun2 = noun2, noun3 = noun3)


# class Story:
#     """Madlibs story.

#     To  make a story, pass a list of prompts, and the text
#     of the template.

#         >>> s = Story(["noun", "verb"],
#         ...     "I love to {verb} a good {noun}.")

#     To generate text from a story, pass in a dictionary-like thing
#     of {prompt: answer, promp:answer):

#         >>> ans = {"verb": "eat", "noun": "mango"}
#         >>> s.generate(ans)
#         'I love to eat a good mango.'
#     """

#     def __init__(self, words, text):
#         """Create story with words and template text."""

#         self.prompts = words
#         self.template = text

#     def generate(self, answers):
#         """Substitute answers into text."""

#         text = self.template

#         for (key, val) in answers.items():
#             text = text.replace("{" + key + "}", val)

#         return text


# # Here's a story to get you started


# story = Story(
#     ["place", "noun", "verb", "adjective", "plural_noun"],
#     """Once upon a time in a long-ago {place}, there lived a
#        large {adjective} {noun}. It loved to {verb} {plural_noun}."""
# )
