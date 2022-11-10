import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  height = 110;
  age = 25;
  weight = 60;
  sex = 'Male';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  heightChange(e: any) {
    console.log(e.target.value);
    this.height = e.target.value;
  }
  male() {
    this.sex = 'Male';
  }
  female() {
    this.sex = 'Female';
  }
  calculateBMI() {
    const BMI=this.weight/Math.pow(this.height/100, 2)
    console.log(BMI.toFixed(1));
    this.router.navigate(['result', BMI.toFixed(1)]);

  }
}
