import { Component } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  id=0;
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, '1-A','Κυβος','Ρολόι', 'Δωσε τα ονοματα των ζωων','Λεκτρική Μνήμη','Λεκτρική Μνήμη', 'Chuck Overstreet','Το υποκείµενο θα επαναλάβει µε την ανάποδη σειρά τα εξής:','Ποσα Α', 'Chuck Overstreet','Φραση 1', 'Φραση 2', 'Λεξεις απο Χ','Ομοιοτητα', 'Ανακληση Λεκτρική Μνήμη', 'Ημερομηνια - Μηνας - Ετος - Ημέρα - Τόπος - Πόλη');

  submitted = false;

  onSubmit() { this.submitted = true; }

  
  newHero() {
    this.model = new Hero(1, '', '','','','','','','','','','','','','','','');
  }

  skyDog(): Hero {
    const myHero =  new Hero(1.,'1-A','Κυβος','Ρολόι', 'Δωσε τα ονοματα των ζωων','Λεκτρική Μνήμη','Λεκτρική Μνήμη', 'Chuck Overstreet','Το υποκείµενο θα επαναλάβει µε την ανάποδη σειρά τα εξής:','Ποσα Α', 'Chuck Overstreet','Φραση 1', 'Φραση 2', 'Λεξεις απο Χ','Ομοιοτητα', 'Ανακληση Λεκτρική Μνήμη', 'Ημερομηνια - Μηνας - Ετος - Ημέρα - Τόπος - Πόλη');
    console.log('My hero is called ' + myHero.optikoxwrikes); // "My hero is called SkyDog"
    return myHero;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls.name &&
    form.controls.name.value; // Dr. IQ
  }

  /////////////////////////////

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/