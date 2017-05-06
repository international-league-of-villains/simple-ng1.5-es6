export let EssixComponent = {
  bindings : {
    who: '=',
    what: '=',
    where: '=',
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
              <h4>Select Origin Story (ES6)</h4>
              <div layout="column">
                <md-input-container>
                  <md-select ng-model="$ctrl.selectedWhat" placeholder="What happen to you">
                    <md-option ng-value="what" ng-repeat="what in $ctrl.what">{{::what.text }}</md-option>
                  </md-select>
                </md-input-container>
              </div>
              <div layout="column">
                <md-input-container>
                  <md-select ng-model="$ctrl.selectedWho" placeholder="Who did this to you">
                    <md-option ng-value="who" ng-repeat="who in $ctrl.who">{{::who.text }}</md-option>
                  </md-select>
                </md-input-container>
                </div>
              <div layout="column">
                <md-input-container>
                  <md-select ng-model="$ctrl.selectedWhere" placeholder="Where did this happen">
                    <md-option ng-value="where" ng-repeat="where in $ctrl.where">{{::where.text }}</md-option>
                  </md-select>
                </md-input-container>
              </div>
            </article>`
}