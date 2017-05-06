export const WrapperComponent = {
  controller: function () {
    console.log('wrapper controller', this);
    this.listItems = [{name:'Item_1'}, {name: 'Item 2'}];
    this.selection = null;
    this.what = [
      { 'text': 'Bitten by '},
      { 'text': 'Kissed by '},
      { 'text': 'Stung by '},
      { 'text': 'Hit by '},
      { 'text': 'Abducted by '},
      { 'text': 'Raised by '},
      { 'text': 'Taught by '},
      { 'text': 'Visited by '},
      { 'text': 'Rescued by '},
      { 'text': 'Kidnapped by '},
      { 'text': 'Found '},
      { 'text': 'Exposed to '},
      { 'text': 'Seduced by'},
      { 'text': 'Struck by '},
      { 'text': 'Taken to '},
      { 'text': 'Orphaned by '},
      { 'text': 'Recruited by '},
      { 'text': 'Befriended by '},
      { 'text': 'Trained by '},
      { 'text': 'Resurrected by '},
      { 'text': 'Initiated by '},
      { 'text': 'Sent to '},
      { 'text': 'Ran into '},
      { 'text': 'Tripped on '},
      { 'text': 'Escaped from '},
      { 'text': 'Liberated by'}
    ];
    this.who = [
      { 'text': 'a robot '},
      { 'text': 'an alien '},
      { 'text': 'an irradiated ant '},
      { 'text': 'a vampire '},
      { 'text': 'a golem '},
      { 'text': 'a monster '},
      { 'text': 'a ghost '},
      { 'text': 'a warlock '},
      { 'text': 'a gremlin '},
      { 'text': 'an android '},
      { 'text': 'a ghoul '},
      { 'text': 'a detective '},
      { 'text': 'a dragon'},
      { 'text': 'a parasite '},
      { 'text': 'a zombie '},
      { 'text': 'a witch '},
      { 'text': 'a demon '},
      { 'text': 'a mutant '},
      { 'text': 'a supervillain '},
      { 'text': 'a god '},
      { 'text': 'a ninja '},
      { 'text': 'a commando '},
      { 'text': 'a creature '},
      { 'text': 'a superhero '},
      { 'text': 'a warlord '},
      { 'text': 'a supermodel'},
    ];
    this.where = [
      { 'text': 'in a dark alley '},
      { 'text': 'on a strange planet '},
      { 'text': 'in the sewers '},
      { 'text': 'in the bathroom '},
      { 'text': 'in the lab '},
      { 'text': 'in the kitchen '},
      { 'text': 'from another world '},
      { 'text': 'under the couch '},
      { 'text': 'from Atlantis '},
      { 'text': 'in your bedroom '},
      { 'text': 'at school '},
      { 'text': 'at home '},
      { 'text': 'at college'},
      { 'text': 'from Mars '},
      { 'text': 'at work '},
      { 'text': 'in the refrigerator '},
      { 'text': 'on a train '},
      { 'text': 'in the city '},
      { 'text': 'at the supermarket '},
      { 'text': 'from Pluto '},
      { 'text': 'from outer space '},
      { 'text': 'in a cave '},
      { 'text': 'in prison '},
      { 'text': 'at the movies '},
      { 'text': 'from the future '},
      { 'text': 'at the park'}
    ];

    this.callback = function (powerVerb, powerSubject) {
     console.log('callback got', powerVerb, powerSubject);
    }
  },
  template: `<h3>ES6 Wrapping Component</h3>
  <essix-component what="$ctrl.what" who="$ctrl.who" where="$ctrl.where"callback="$ctrl.callback">
  </essix-component>`
}