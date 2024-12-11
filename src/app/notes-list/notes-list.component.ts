import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes: any[] = [];
  errorMessage = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes() {
    this.http.get<any[]>('/api/notes').subscribe({
      next: (notes) => {
        this.notes = notes;
      },
      error: (error) => {
        console.error('Error updating note:', error);
        alert('Failed to update note. Please try again.');
      }
    });
  }

  viewNoteDetail(noteId: string) {
    this.router.navigate([`/notes/${noteId}`]);
  }
}
