from unittest import TestCase
from app import app
from flask import session
from boggle import Boggle


class FlaskTests(TestCase):

    def setUp(self):
        'what to do before the tests'
        self.client = app.test_client()
        app.config['TESTING'] = True

    def test_working_home_page(self):
        'make sure that the html is displayed on the homepage'
        with app.test_client() as client:
            resp = client.get('/')
            html = resp.get_data(as_text = True)
            self.assertEqual(resp.status_code, 200)
            self.assertIn('<h1>Welcome to the Boggle Game</h1>', html)
            self.assertIn('board', session)
            self.assertIsNone(session.get('highscore'))
            self.assertIsNone(session.get('nplays'))
            self.assertIn(b'Score:', resp.data)
            self.assertIn(b'Seconds Left:', resp.data)

    def test_invalid_word(self):
        'test to see if the word is invalid'
        self.client.get('/')
        response = self.client.get('/check-word?word=together')
        self.assertEqual(response.json['result'], 'not-on-board')

    def test_not_english(self):
        'test to see if the word is not in dictionary'
        self.client.get('/')
        response = self.client.get('/check-word?word=tortuga')
        self.assertEqual(response.json['result'], 'not-word')



    # TODO -- write tests for every view function / feature!

