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
      width: -1,
      height: -1,
      value: 'High there!',
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

  width: number;
  height: number;
  value: string;
}

export class ResizeableView extends DOMWidgetView {
  render() {
    this._innerdiv = document.createElement('div');
    this.el.classList.add('resizer');
    this.el.classList.add('ugly');
    this._innerdiv.classList.add('resized');
    this._innerdiv.innerHTML = this.model.get('value');
    this.el.appendChild(this._innerdiv);
    this.rob = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      this.model.set('width', rect.width);
      this.model.set('height', rect.height);
      this.model.save_changes();
    });
    this.rob.observe(this.el);
    this.model.on('change:value', this._onValueChanged, this);
  }
  private _innerdiv: HTMLDivElement;
  private rob: any;
  private _onValueChanged() {
    this._innerdiv.innerHTML = this.model.get('value');
  }
}
