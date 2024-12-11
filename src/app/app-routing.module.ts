import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'notes', component: NotesListComponent, canActivate: [AuthGuard] },
  { path: 'notes/new', component: CreateNoteComponent, canActivate: [AuthGuard] },
  { path: 'notes/:id', component: NoteDetailComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/notes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
