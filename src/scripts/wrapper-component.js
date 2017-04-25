export const WrapperComponent = {
  controller: function () {
    console.log('wrapper controller', this);
    this.listItems = [{name:'Item_1'}, {name: 'Item 2'}];
    this.selection = null;
    this.powerVerbs = [
      {'name': 'Controls'},
      {'name': 'Commands'},
      {'name': 'Summons'},
      {'name': 'Hypnotises'},
      {'name': 'Excretes'}
    ],
    this.powerSubjects = [
      {'name': 'Metal'},
      {'name': 'Birds'},
      {'name': 'Demons'},
      {'name': 'People'},
      {'name': 'Poisons'}
    ]
    this.callback = function (powerVerb, powerSubject) {
     console.log('callback got', powerVerb, powerSubject);
    }
  },
  template: `<h3>ES6 Wrapping Component</h3><essix-component power-verbs="$ctrl.powerVerbs" power-subjects="$ctrl.powerSubjects" callback="$ctrl.callback"></essix-component>`
}