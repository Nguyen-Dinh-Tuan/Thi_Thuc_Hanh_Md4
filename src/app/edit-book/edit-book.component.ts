import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Books} from '../books';
import {BooksService} from '../books.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  id!: number;
  book!: Books;
  submitted = false;
  validateForm: any = FormGroup;

  constructor(
    private route: ActivatedRoute, private router: Router,
    private BooksService: BooksService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {

    this.validateForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      author: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
    });


    this.book = new Books();

    this.id = this.route.snapshot.params['id'];

    this.BooksService.getBookById(this.id)
      .subscribe(data => {
        console.log(data)
        this.book = data;
      }, error => console.log(error));

  }


  onSubmit() {
    console.log(this.validateForm);
  }


  editBook() {
    this.BooksService.editBook(this.id, this.book)
      .subscribe(data => {
        console.log(data);
        this.book = new Books();
        this.gotoList();
        alert("Bạn Đã Cập Nhật Thành Công");
      }, error => console.log(error));
  }


  gotoList() {
    this.router.navigate(['books']);
  }

}
