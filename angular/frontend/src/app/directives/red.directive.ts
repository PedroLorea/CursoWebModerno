import { Directive, ElementRef } from '@angular/core';

//exemplo diretiva, ao invés de criar um .red no styles.css
//cria essa diretiva e usa no html appRed

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style = '#e35e6b'
  }

}
