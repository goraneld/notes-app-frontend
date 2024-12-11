import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {
  note: any;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const noteId = this.route.snapshot.paramMap.get('id')!;
    
    this.http.get<any>(`/api/notes/${noteId}`).subscribe({
      next: (note) => {
        this.note = note;
      },
      error: (error) => {
        console.error('Error updating note:', error);
        alert('Failed to update note. Please try again.');
      }
    });
  }

  saveNote(note: any): void {
    this.http.put(`/api/notes/${note.id}`, note).subscribe({
      next: () => alert('Note updated successfully!'),
      error: (error) => {
        console.error('Error updating note:', error);
        alert('Failed to update note. Please try again.');
      }
    });
  }
}
