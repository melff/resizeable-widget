#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Martin Elff.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from ipywidgets import DOMWidget
from traitlets import Unicode, CFloat
from ._frontend import module_name, module_version


class Resizeable(DOMWidget):
    """TODO: Add docstring here
    """
    _model_name = Unicode('ResizeableModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('ResizeableView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)
    width = CFloat(-1, help = "Width").tag(sync = True)
    height = CFloat(-1, help = "height").tag(sync = True)
    value = Unicode("<em>Hi there, it's me!</em>").tag(sync = True)
