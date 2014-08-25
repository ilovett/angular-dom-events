angular-dom-events
==================

This module aims to allow hooking into dom events using directives.  It come in very handy in conjunction with the `ngIf` directive.

# Setup

## Install

    bower install angular-dom-events --save

## Enable

Add to module dependencies:'ngDomEvents'

```
angular.module('myApp', ['ngDomEvents'])
```

# Examples

## domOnCreate

In this example, the `video` element is not added until after the `ngIf` expression passes.

```
<div my-directive>
  <video dom-on-create="videoElCreated()" ng-if="videoStream !== null" ng-src="{{ someUrl }} />
</div>
```

```
  scope.videoElCreated = function() {
    // firefox doesn't support attribute muted="muted"
    element.find('video').get(0).muted = "muted";
  }
```

## domOnDestroy

```
  <video dom-on-destroy="videoElDestroyed()" ng-if="videoStream !== null" ng-src="{{ someUrl }} />
```

```
  scope.videoElCreated = function() {
    console.log("video el was destroyed");
  }
```
