import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  bmiResult:number;
  result:string='';
  explanation:string='';
  constructor(private route: ActivatedRoute) {

    this.bmiResult=+route.snapshot.paramMap.get('data')!
    console.log("RR  ",this.bmiResult);
  }

  ngOnInit(): void {
    this.getResult();
  }

  getResult(){
    if(this.bmiResult>=25){
      this.result="Exceso de Peso"
      this.explanation="Tienes peso corporal superior al normal... Hacer ejercicio te ayudará"
    }else if(this.bmiResult>=18.5){
      this.result="Peso normal"
      this.explanation="Tienes un peso corporal normal... Buen trabajo"
    }else{
      this.result="Bajo Peso"
      this.explanation="Tienes un peso corporal más bajo de lo normal... Debes comer mucho más"
    }
  }
}
