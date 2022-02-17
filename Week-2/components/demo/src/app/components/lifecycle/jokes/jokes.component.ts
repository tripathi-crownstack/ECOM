import { Component, Input, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/joke';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  constructor() { }
  @Input("joke") data!: Joke;

  ngOnInit(): void {
  }

}
