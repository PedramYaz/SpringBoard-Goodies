from locale import currency
from flask import Flask, request, render_template, flash, redirect
from forex_python.converter import CurrencyRates, CurrencyCodes
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret-key'

app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

currency_dictionary = ["EUR", "IDR", "BGN", "ILS", "GBP", "DKK", "CAD", "JPY", "HUF", "RON", "MYR", "SEK", "SGD", "HKD", "AUD", "CHF", "KRW", "CNY", "TRY", "HRK", "NZD", "THB", "USD", "NOK", "RUB", "INR", "MXN", "CZK", "BRL", "PLN", "PHP", "ZAR"]

currency_set = set(currency_dictionary)

c = CurrencyRates()
code = CurrencyCodes()

@app.route('/')
def home_page():
    "show the home page"
    return render_template('home.html')

@app.route('/result')
def show_result():
    'show the convsersion and offer a return home button'
    convert_from = request.args["convert_from"].upper()
    convert_to = request.args["convert_to"].upper()
    amount = request.args["amount"]
    float_amount = float(amount)


    if convert_from not in currency_set and convert_to not in currency_set:
        flash (f"{convert_from} and {convert_to} are not valid currencies")
        return redirect('/')

    if convert_from not in currency_set:
        flash (f"{convert_from} is not a valid currency")
        return redirect('/')

    if convert_to not in currency_set:
        flash (f"{convert_to} is not a valid currency")
        return redirect('/')

    symbol = code.get_symbol(convert_to)
    result = "{:.2f}".format(c.convert(convert_from, convert_to, float_amount))

    return render_template('result.html', result = result, symbol = symbol)