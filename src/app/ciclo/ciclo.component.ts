import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
         AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})

//Life cicle hooks podem ser usados sem a definição da interface correspondente ao evento,
//mas o style guide do angular recomenda deixar claro a implementação
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input() valorInicial: number = 10;  

  constructor() { 
    this.log('constructor');
  }

  ngOnChanges() {
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }  

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string){
    console.log(hook);
  }

}
