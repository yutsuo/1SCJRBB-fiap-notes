import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-note',
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.css']
})
export class FormNoteComponent implements OnInit {

  title = "FIAP NOTES"
  logoImage = "/assets/logo.png";

  constructor() { }

  ngOnInit(): void {
  }

}
