import { Component, Input, OnInit } from '@angular/core';

interface Note {
  id: number;
  text: string;
  date: Date;
  urgent?: boolean; 
}

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  // note = {
  //   id: 1,
  //   date: new Date(),
  //   text: "Um texto qualquer",
  //   urgert: false
  // }

  @Input()
  noteProp = {} as Note;

  @Input()
  titleProp: any;

  constructor() { }

  ngOnInit(): void {
  }

  removeNote(){
    alert("a nota será removida");
  }

}
