import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/services/@types/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.css'],
})
export class ListNotesComponent implements OnInit {
  title = 'Titulo da nota';

  notes = [] as Note[];

  //injetando a dependência do service
  constructor(private noteService: NoteService) {}

  //método do cliclo de vida do componente
  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

  removeNote(noteId: number){
    this.notes = this.noteService.removeNote(noteId);
  }
}
