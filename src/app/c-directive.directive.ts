import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCDirective]'
})
export class CDirectiveDirective {
constructor(private el:ElementRef ) {}

@HostListener('mouseenter') onMouseEnter(){
    console.log(this.el.nativeElement.classList)
    let native=this.el.nativeElement as HTMLElement
    console.log(native.classList)
        if (Array.from(this.el.nativeElement.classList)?.includes('first')) {
        this.el.nativeElement.style.backgroundColor ="yellow"
        }
        else {
        this.el.nativeElement.style.backgroundColor ="green"

        }
    }
}

