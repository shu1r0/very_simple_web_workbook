from flask import url_for, redirect, render_template, flash, g, session
from flask.globals import request
from flask_login import login_user, logout_user, current_user, login_required
from app import app, lm
from app.forms import ExampleForm, LoginForm
from app.models import User

from app.api.questions_pb2 import GetProblemsRequest


@app.route('/')
def index():
    """root"""
    return render_template('index.html')


@app.before_request
def before_request():
    g.user = current_user


@app.route('/login/', methods=['GET', 'POST'])
def login():
    if g.user is not None and g.user.is_authenticated:
        return redirect(url_for('index'))
    form = LoginForm()
    if form.validate_on_submit():
        login_user(g.user)

    return render_template('login.html', title='Sign In', form=form)


@app.route('/problems/', methods=['GET'])
def get_problems():
    req = request.args.get("request")
    req = GetProblemsRequest.ParseFromString(req)


@app.route('/problems/', methods=['POST'])
def get_problems():
    req = request.args.get("request")
    req = GetProblemsRequest.ParseFromString(req)


@app.route('/problem_history/', methods=['GET'])
def get_problems():
    req = request.args.get("request")
    req = GetProblemsRequest.ParseFromString(req)


@app.route('/problem_history/', methods=['POST'])
def get_problems():
    req = request.args.get("request")
    req = GetProblemsRequest.ParseFromString(req)


@app.errorhandler(500)
def internal_error(error):
    #db_session.rollback()
    return render_template('errors/500.html'), 500


@app.errorhandler(404)
def not_found_error(error):
    """not found error handler"""
    app.logger.debug("happened not found error")
    return render_template('errors/404.html'), 404
