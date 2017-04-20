import '../styles/app.scss';

/**
 * example of image import
 * just replace my_image_name with the name of your image
 */
/*
require("file-loader?name=assets/images/[name].[ext]!../assets/images/my_image_name.svg");
*/

import angular from 'angular';

import { EssixComponent } from './essix-component';
import { WrapperComponent } from './wrapper-component';

//const essixComponent = new EssixComponent();
//const wrapperComponent = new WrapperComponent();

console.log('essixComponent', EssixComponent);

angular.module('newerNG1', []);
angular.module('newerNG1')
.run(function () {
  console.log('angular init');
})
.component('wrapperComponent', WrapperComponent)
.component('essixComponent', EssixComponent);

angular.bootstrap(document, ['newerNG1']);