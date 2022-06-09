import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/app/services/@types/note';

@Component({
  selector: 'app-form-note',
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.css'],
})

export class FormNoteComponent implements OnInit {
  title = 'FIAP NOTES';
  logoImage = '/assets/logo.png';

  checkoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteService
  ) {
    this.checkoutForm = this.formBuilder.group({
      textNote: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit(): void {}

  sendNote() {
    // console.log(this.checkoutForm.get('textNote')?.errors);
    if (this.checkoutForm.valid) {
      this.noteService.postNotes(this.checkoutForm.value.textNote).subscribe({
        //next é chamado quando as coisas dão certo
        next: (note) => {
          this.checkoutForm.reset();
          this.noteService.notifyNewNoteAdded(note);
        },
        //error é chamado no caso de excessões
        error: (error) => alert("Algo errado na inserção! " + error)
      });
    }
  }

  singleNote = {} as Note;

  editNote(noteId: number) {
    console.log("editando oe");
    this.noteService.getSingleNote(noteId).subscribe({
      next: (editNote) => this.singleNote = editNote,
      error: (error) => console.error(error),
    }
    );
  }

  get textNote() {
    return this.checkoutForm.get('textNote');
  }
}
