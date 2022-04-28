import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  note = {
    id: 1,
    date: new Date(),
    text: "Um texto qualquer",
    urgert: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  removeNote(){
    alert("a nota será removida");
  }

}
