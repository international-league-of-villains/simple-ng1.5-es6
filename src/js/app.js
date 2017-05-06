import '../styles/app.scss';

/**
 * example of image import
 * just replace my_image_name with the name of your image
 */
/*
require("file-loader?name=assets/images/[name].[ext]!../assets/images/my_image_name.svg");
*/
require("file-loader?name=assets/images/[name].[ext]!../assets/images/spiderman-villains.jpg");

import angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import { EssixComponent } from './essix-component';
import { WrapperComponent } from './wrapper-component';

angular.module('newerNG1', ['ngMaterial']);
angular.module('newerNG1')
.run(function () {
  console.log('angular init');
})
.component('wrapperComponent', WrapperComponent)
.component('essixComponent', EssixComponent);

angular.bootstrap(document, ['newerNG1']);