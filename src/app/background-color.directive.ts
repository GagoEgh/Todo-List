import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective implements OnInit {

  @Input('appBackgroundColor')
  background:string|undefined
  constructor(private element:ElementRef<HTMLElement>) {
   
   }
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor =  this.background!;  //'#a2b7ed'
  }



}
