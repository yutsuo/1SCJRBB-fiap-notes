import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Note } from 'src/app/services/@types/note';
import { NoteService } from 'src/app/services/note.service';

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

  @Input() noteProp = {} as Note;
  @Input() titleProp: any;
  @Input() isEdit: boolean = false;

  @Output() notify = new EventEmitter();
  @Output() updateNotify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  confirmRemove(){
    if(confirm("Deseja realmente apagar?"))
      this.notify.emit();
  }

  edit() {
    this.isEdit = !this.isEdit;
    console.log("this.isEdit", this.isEdit);
  }

  update() {
    this.updateNotify.emit();
    console.log("update()");
    this.isEdit = !this.isEdit;
  }

}
