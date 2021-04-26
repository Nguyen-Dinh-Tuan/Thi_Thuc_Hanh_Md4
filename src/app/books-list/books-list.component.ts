import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Books } from '../books';
import { BooksService } from '../books.service';

@Component({

  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  book!: Observable<Books[]>;
  filter:any;


  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key: any){
    this.key = key;
    this.reverse = !this.reverse;
  }

  //initializing p to one
  p: number = 1;


  constructor(private BookService: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.book = this.BookService.getBooklist();
  }


  deleteProduct(id: number){
    if(confirm("Bạn Có Chắc Chắn Muốn Xóa " + id)){
      this.BookService.deleteBook(id).subscribe(
        data => {
          this.reloadData();
        },error => console.log(error)
      )
    }
  }

  bookDetail(id: number) {
    this.router.navigate(['details', id]);
  }

}
