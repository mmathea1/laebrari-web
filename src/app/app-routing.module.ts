import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserComponent } from './components/user/user.component';
import { NewLibraryComponent } from './components/new-library/new-library.component';
import { ViewLibraryComponent } from './components/view-library/view-library.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: UserComponent },
  { path: 'new-library', component: NewLibraryComponent },
  {
    path: 'profile', component: UserComponent,
    children: [
      { path: 'edit-profile', component: EditProfileComponent }
    ]
  },
  { path: 'view-library', component: ViewLibraryComponent },
  { path: 'new-book', component: NewBookComponent },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
