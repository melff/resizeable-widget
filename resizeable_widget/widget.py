#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Martin Elff.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from ipywidgets import DOMWidget
from traitlets import Unicode, CInt, CBool
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
    width = CInt(-1, help = "Width").tag(sync = True)
    height = CInt(-1, help = "height").tag(sync = True)
    value = Unicode("<em>Hello World!</em>").tag(sync = True)
    debug = CBool(False).tag(sync = True)


class VResizeable(Resizeable):
    """TODO: Add docstring here
    """
    _model_name = Unicode('VResizeableModel').tag(sync=True)
    _view_name = Unicode('VResizeableView').tag(sync=True)

class HResizeable(Resizeable):
    """TODO: Add docstring here
    """
    _model_name = Unicode('HResizeableModel').tag(sync=True)
    _view_name = Unicode('HResizeableView').tag(sync=True)

