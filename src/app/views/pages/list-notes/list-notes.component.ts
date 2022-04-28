import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css'],
})
export class ListNotesComponent implements OnInit {
  title = 'Titulo da nota';

  notes = [
    {
      id: 1,
      date: new Date(),
      text: 'Um texto qualquer',
      urgent: false,
    },
    {
      id: 2,
      date: new Date(),
      text: 'Um texto qualquer 2',
      urgent: true,
    },
    {
      id: 3,
      date: new Date(),
      text: 'Um texto qualquer 3',
    },
    {
      id: 4,
      date: new Date(),
      text: 'Um texto qualquer 4',
      urgent: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
