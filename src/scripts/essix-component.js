export let EssixComponent = {
  bindings : {
    powerVerbs: '=',
    powerSubjects: '=',
    callback: '='
  },
  controller: class MyController {
    constructor () {
      console.log('list items ', this);
    }
    onSelect () {
      console.log('selection happened', this.selection);
      if (this.powerVerb && this.powerSubject) {
        this.callback(this.powerVerb, this.powerSubject);
      }
    }
  },
  template: `<article>
              <h4>Select Power (ES6)</h4>
              <select ng-model="$ctrl.powerVerb" ng-change="$ctrl.onSelect()" data-ng-options="item as item.name for item in $ctrl.powerVerbs">
                <option value="">Pick one...</option>
              </select>
              <select ng-model="$ctrl.powerSubject" ng-change="$ctrl.onSelect()" data-ng-options="item as item.name for item in $ctrl.powerSubjects">
                <option value="">Pick one...</option>
              </select>
              <span ng-if="$ctrl.powerVerb &&  $ctrl.powerSubject"> You selected selected the power: {{$ctrl.powerVerb.name}} {{$ctrl.powerSubject.name}}</span>
            </article>`

}