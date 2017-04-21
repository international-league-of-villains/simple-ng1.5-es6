export let EssixComponent = {
  bindings : {
    listItems: '=',
    selection: '='
  },
  controller: class MyController {
    constructor () {
      console.log('list items ', this);
    }
    onSelect () {
      console.log('selection happened', this.selection);
      //this.selection = JSON.parse(this.selection);
    }
  },
  template: `<article>
              <h4>ES6 Select Component</h4>
              <select ng-model="$ctrl.selection" ng-change="$ctrl.onSelect()" data-ng-options="item as item.name for item in $ctrl.listItems">
                <option value="">Pick one...</option>
              </select>
              <span ng-if="$ctrl.selection"> You selected: {{$ctrl.selection.name}}</span>
            </article>`

}