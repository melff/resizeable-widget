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
      debug: false,
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
  debug: boolean;
}

export class ResizeableView extends DOMWidgetView {
  render() {
    this._innerdiv = document.createElement('div');
    if (this.model.get('debug')) {
      this.el.classList.add('debug-resizer');
    }
    this._innerdiv.classList.add('resized');
    this._innerdiv.innerHTML = this.model.get('value');
    this.el.appendChild(this._innerdiv);
    this.rob = new ResizeObserver((entries) => {
      // const rect = entries[0].contentRect;
      const width = this.el.scrollWidth;
      const height = this.el.scrollHeight;
      this.model.set('width', width);
      this.model.set('height', height);
      this.model.save_changes();
    });
    this.rob.observe(this.el);
    this.model.on('change:value', this._onValueChanged, this);
    this.model.on('change:debug', this._onDebugChanged, this);
    this.el.classList.add('resizer');
    this.el.style.width = '576px';
    this.update_dims();
  }
  private _innerdiv: HTMLDivElement;
  private rob: any;
  private update_dims() {
    const width = this.el.scrollWidth;
    const height = this.el.scrollHeight;
    this.model.set('width', width);
    this.model.set('height', height);
    this.model.save_changes();
  }
  private _onValueChanged() {
    this._innerdiv.innerHTML = this.model.get('value');
  }
  private _onDebugChanged() {
    if (this.model.get('debug')) {
      this.el.classList.add('debug-resizer');
    } else {
      this.el.classList.remove('debug-resizer');
    }
  }
}

export class VResizeableModel extends ResizeableModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: VResizeableModel.model_name,
      _model_module: VResizeableModel.model_module,
      _model_module_version: VResizeableModel.model_module_version,
      _view_name: VResizeableModel.view_name,
      _view_module: VResizeableModel.view_module,
      _view_module_version: VResizeableModel.view_module_version,
    };
  }
}

export class VResizeableView extends ResizeableView {
  render() {
    super.render();
    this.el.classList.add('vresizer');
  }
}

export class HResizeableModel extends ResizeableModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: HResizeableModel.model_name,
      _model_module: HResizeableModel.model_module,
      _model_module_version: HResizeableModel.model_module_version,
      _view_name: HResizeableModel.view_name,
      _view_module: HResizeableModel.view_module,
      _view_module_version: HResizeableModel.view_module_version,
    };
  }
}

export class HResizeableView extends ResizeableView {
  render() {
    super.render();
    this.el.classList.add('hresizer');
  }
}
