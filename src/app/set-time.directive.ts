import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSetTime]'
})
export class SetTimeDirective implements OnInit{
 @Input('appSetTime')
 time:number = 3000;

  constructor(
    private view:ViewContainerRef,
    private template: TemplateRef<any>) {
  }

  ngOnInit(): void {
    setTimeout(()=>{
     this.view.createEmbeddedView(this.template)
    },this.time)
  }

}
