import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksListComponent} from "./books-list/books-list.component";
import {AddBooksComponent} from "./add-books/add-books.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {NavbarComponent} from "./navbar/navbar.component";

const routes: Routes = [
  {path: '', component:BooksListComponent , pathMatch: 'full'},
  {path: 'books' , component: BooksListComponent},
  {path: 'add' ,component: AddBooksComponent},
  {path: 'update/:id', component:EditBookComponent},
  {path: 'details/:id', component: BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
