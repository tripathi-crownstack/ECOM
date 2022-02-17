import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  jokes: Joke[] = [];

  addJoke() {
    this.jokes.unshift(
      new Joke(
        "What did the cheese say when it looked in the mirror",
        "Hello-me (Rishabh)"
      )
    );
  }

  deleteJoke() {
    this.jokes = [];
  }

}
