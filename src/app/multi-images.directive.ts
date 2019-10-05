import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMultiImages]'
})
export class MultiImagesDirective {



  @Output() droped =  new EventEmitter<FileList>();
   @Output() hovered =  new EventEmitter<boolean>();

  @HostListener('change', ['$event'])
  onDrop($event) {
    $event.preventDefault();
    this.droped.emit($event.dataTransfer.files);
     this.hovered.emit(false);
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    $event.preventDefault();
    this.hovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event) {
    $event.preventDefault();
    this.hovered.emit(false);
  }
}