import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { IDOMElement } from '../interfaces/DOMElement';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent {
  items: IDOMElement[] = [];
  @Input() settings: any = '';
  @Input() currentId: any = '';
  @Input() settingForm: any = '';

  ngOnChanges() {
    if (this.settings) {
      this.items.map((elem: any) => {
        if (elem.id === this.settings.id) {
          elem.styles = { ...this.settings.styles };
        }
      });
    }
  }

  drop(event: CdkDragDrop<IDOMElement[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      let item = event.container.data[event.currentIndex];
      item.id = Date.now().toString();
      event.previousContainer.data.splice(
        event.previousIndex,
        0,
        JSON.parse(JSON.stringify(item))
      );
    }
  }

  @Output() sendId = new EventEmitter<any>();

  onClick(id: string | undefined) {
    this.sendId.emit(id);
  }
}
