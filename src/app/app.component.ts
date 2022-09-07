import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FizzBuzzService } from './shared/fizz-buzz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  resultText = '';

  constructor(private fizzBuzzService: FizzBuzzService) {}

  onSubmit(form: NgForm) {
    this.fizzBuzzService.sendRequest(form.value.number).subscribe({
      next: (data) => {
        this.resultText = data.result;
      },
      error: (err) => {
        console.log(err);
      },
    });

    form.reset();
  }
}
