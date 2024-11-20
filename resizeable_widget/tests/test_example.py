#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Martin Elff.
# Distributed under the terms of the Modified BSD License.

import pytest

from ..widget import Resizeable


def test_example_creation_blank():
    w = Resizeable()
