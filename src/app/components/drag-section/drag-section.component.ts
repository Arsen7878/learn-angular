import { Component } from '@angular/core';
import { IDOMElement } from '../interfaces/DOMElement';

@Component({
  selector: 'app-drag-section',
  templateUrl: './drag-section.component.html',
  styleUrls: ['./drag-section.component.scss'],
})
export class DragSectionComponent {
  items: IDOMElement[] = [
    {
      name: 'Input',
      styles: {},
      id: '',
    },
    {
      name: 'Button',
      styles: {},
      id: '',
    },
    {
      name: 'Select',
      styles: {},
      id: '',
    },
    {
      name: 'Checkbox',
      styles: {},
      id: '',
    },
    {
      name: 'Textarea',
      styles: {},
      id: '',
    },
  ];
}
