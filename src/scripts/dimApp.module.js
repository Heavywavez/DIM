import angular from 'angular';

import AriaModule from 'angular-aria';
import DialogModule from 'ng-dialog';
import DragAndDropModule from 'angular-native-dragdrop';
import LocalStorageModule from 'angular-local-storage';
import MessagesModule from 'angular-messages';
import MomentModule from 'angular-moment';
import RateLimiterModule from 'ng-http-rate-limiter';
import SliderModule from 'angularjs-slider';
import ToasterModule from 'angularjs-toaster';
import TranslateModule from 'angular-translate';
import TranslateMessageFormatModule from 'angular-translate-interpolation-messageformat';
import UIRouterModule from 'angular-ui-router';
import 'angular-hotkeys';
import 'angular-promise-tracker';
import 'angular-timer';
import 'angular-uuid2/dist/angular-uuid2.js';

import config from './dimApp.config';
import routes from './dimApp.routes';
import run from './dimApp.run';
import featureFlags from './feature-flags';
import state from './state';
import loadingTracker from './services/dimLoadingTracker.factory';

export const DimAppModule = angular
  .module('dimApp', [
    AriaModule,
    DialogModule,
    DragAndDropModule,
    LocalStorageModule,
    MessagesModule,
    MomentModule,
    RateLimiterModule,
    SliderModule,
    ToasterModule,
    TranslateModule,
    TranslateMessageFormatModule,
    UIRouterModule,
    'timer',
    'angularUUID2',
    'ajoslin.promise-tracker',
    'cfp.hotkeys',
    'dim-oauth'
  ])
  .config(config)
  .config(routes)
  .run(run)
  .value('dimFeatureFlags', featureFlags)
  .value('dimState', state)
  .factory('loadingTracker', loadingTracker)
  .name;