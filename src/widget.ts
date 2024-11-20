// Copyright (c) Martin Elff
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
} from '@jupyter-widgets/base';

import { MODULE_NAME, MODULE_VERSION } from './version';

// Import the CSS
import '../css/widget.css';

export class ResizeableModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: ResizeableModel.model_name,
      _model_module: ResizeableModel.model_module,
      _model_module_version: ResizeableModel.model_module_version,
      _view_name: ResizeableModel.view_name,
      _view_module: ResizeableModel.view_module,
      _view_module_version: ResizeableModel.view_module_version,
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'ResizeableModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'ResizeableView'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

export class ResizeableView extends DOMWidgetView {
  render() {
    this._outerdiv = document.createElement('div');
    this._innerdiv = document.createElement('div');
    this._outerdiv.classList.add('resizer');
    this._innerdiv.classList.add('resized');
    this._outerdiv.classList.add('ugly');
    this._innerdiv.textContent = 'Hello World!';
    this._outerdiv.appendChild(this._innerdiv);
    this.el.appendChild(this._outerdiv);
  }

  private _outerdiv: HTMLDivElement;
  private _innerdiv: HTMLDivElement;
}
