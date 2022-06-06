import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  @Input() hijaresgistros: any= [];

  constructor() { }

  ngOnInit(): void {
  }

}
