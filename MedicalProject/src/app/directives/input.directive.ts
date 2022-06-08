import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[styleValid]',
})
export class InputValidStyleDirective{

    @Input() valid: boolean = true;

    constructor(private renderer: Renderer2,private el: ElementRef){
        //renderer.setStyle(el.nativeElement,'background','blue');
    }
    ngOnChanges(): void {
       if(this.valid){
        this.renderer.addClass(this.el.nativeElement, "valid");
        this.renderer.removeClass(this.el.nativeElement, "invalid");
       }
       else{
        this.renderer.addClass(this.el.nativeElement, "invalid");
        this.renderer.removeClass(this.el.nativeElement, "valid");
       }
    }    
}

@Directive({
    selector: '[styleFormTR]',
})
export class StyleFormTrDirective{

    @Input() valid: boolean = true;

    constructor(private renderer: Renderer2,private el: ElementRef){
        //renderer.setStyle(el.nativeElement,'background','blue');
    }
    ngOnChanges(): void {
       if(this.valid){
        this.renderer.addClass(this.el.nativeElement, "inside");
        this.renderer.removeClass(this.el.nativeElement, "errorTR");
       }
       else{
        this.renderer.addClass(this.el.nativeElement, "errorTR");
        this.renderer.removeClass(this.el.nativeElement, "inside");
       }
    }    
}
