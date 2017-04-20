export const WrapperComponent = {
  controller: function () {
    console.log('wrapper controller', this);
    this.listItems = [{name:'Item_1'}, {name: 'Item 2'}];
    this.selection = null;
  },
  template: `<h3>ES6 Wrapping Component</h3><essix-component title="hey?" selection="$ctrl.selection" list-items="$ctrl.listItems"></essix-component>`
}