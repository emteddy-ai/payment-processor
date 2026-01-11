# utils.py

import logging
import os
from datetime import datetime
from payment_processor.config import Config

def slugify_string(s):
    s = s.strip().lower().replace(" ", "-")
    s = "".join(c for c in s if c.isalnum() or c in "-_")
    return s

def get_current_timestamp():
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")

def get_absolute_path(relative_path):
    return os.path.abspath(os.path.join(os.path.dirname(__file__), relative_path))

def get_config(key):
    return Config.get(key)

def logger_setup():
    logger = logging.getLogger()
    logger.setLevel(logging.INFO)
    handler = logging.FileHandler(get_absolute_path("logs/log.log"))
    formatter = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
    handler.setFormatter(formatter)
    logger.addHandler(handler)
    return logger