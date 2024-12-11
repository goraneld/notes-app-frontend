import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent {
  note = { title: '', content: '' };

  constructor(private http: HttpClient, private snackBar: MatSnackBar, private router: Router) {}

  createNote(): void {
    this.http.post('/api/notes', this.note).subscribe({
      next: () => {
        alert('Note created successfully!');
        this.router.navigate(['/notes']);
        this.note = { title: '', content: '' }; // Reset the form
      },
      error: (error) => {
        console.error('Error creating note:', error);
        this.snackBar.open('Failed to create note. Please try again.', 'Close', { duration: 3000 });
      }
    });
  }
}
