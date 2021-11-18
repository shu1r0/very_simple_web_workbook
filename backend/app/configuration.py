
class Config(object):
	"""
	Configuration base, for all environments.

	Attributes:
		DEBUG (bool) :
		TESTING (bool) :
		SQLALCHEMY_DATABASE_URI (str) :
		BOOTSTRAP_FONTAWESOME (bool) :
		SECRET_KEY (str) :
		CSRF_ENABLED (bool) :
		SQLALCHEMY_TRACK_MODIFICATIONS (bool) :
	"""
	DEBUG = False
	TESTING = False
	SQLALCHEMY_DATABASE_URI = 'sqlite:///application.db'
	BOOTSTRAP_FONTAWESOME = True
	SECRET_KEY = "MINHACHAVESECRETA"
	CSRF_ENABLED = True
	SQLALCHEMY_TRACK_MODIFICATIONS = True

	#Get your reCaptche key on: https://www.google.com/recaptcha/admin/create
	#RECAPTCHA_PUBLIC_KEY = "6LffFNwSAAAAAFcWVy__EnOCsNZcG2fVHFjTBvRP"
	#RECAPTCHA_PRIVATE_KEY = "6LffFNwSAAAAAO7UURCGI7qQ811SOSZlgU69rvv7"


class ProductionConfig(Config):
	"""Product"""
	SQLALCHEMY_DATABASE_URI = 'mysql://user@localhost/foo'
	SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(Config):
	"""Development config (debug mode)"""
	DEBUG = True


class TestingConfig(Config):
	"""Test config"""
	TESTING = True
