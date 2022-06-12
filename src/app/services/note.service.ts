import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Note } from './@types/note';

@Injectable({
  providedIn: 'root'
})

export class NoteService {

  public emptyNote: Note = {
    "id": 0,
    "text": "",
    "date": new Date(),
    "urgent": false
  }

  private editNoteSource = new BehaviorSubject<Note>(this.emptyNote);

  private apiUrl: string;

  private newNoteSource = new Subject<Note>();
  newNoteProvider = this.newNoteSource //.asObservable();
  //! Every rxjs Subject is an Observable. ".asObservable()" is useless and misleading here. https://rxjs.dev/guide/subject

  constructor(private http: HttpClient) {
    this.apiUrl = "https://fiap-notes-api.herokuapp.com";
  }

  private notes = [
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

  notifyNewNoteAdded(note: Note) {
    this.newNoteSource.next(note);
    // this.newNoteSource.error("algum exception");
  }

  getNotes() {
    return this.http.get<Note[]>(`${this.apiUrl}/notes`);
  }

  removeNote(noteId: number) {
    return this.http.delete(`${this.apiUrl}/notes/${noteId}`);
  }

  postNotes(textNote: string) {
    return this.http.post<Note>(`${this.apiUrl}/notes`, { text: textNote });
  }

  getSingleNote(noteId: number) {
    return this.http.get<Note>(`${this.apiUrl}/notes/${noteId}`);
  }

  updateNote(noteId: number, textNote: string) {
    return this.http.put<Note>(`${this.apiUrl}/notes/${noteId}`, { text: textNote });
  }


}
