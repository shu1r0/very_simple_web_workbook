from flask import Flask
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
from flask_pymongo import PyMongo
from flask_login import LoginManager


app = Flask(__name__, static_folder='./static/', template_folder='./templates')

app.config.from_object('app.configuration.DevelopmentConfig')
# app.config.from_object('configuration.TestingConfig')

bs = Bootstrap(app)
db = SQLAlchemy(app)

lm = LoginManager()
lm.init_app(app)
lm.login_view = 'login'

from app import views, models
