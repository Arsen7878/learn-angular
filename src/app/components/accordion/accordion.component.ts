import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'cdk-accordion-overview-example',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  formStylesElements!: FormGroup;
  formStylesForm!: FormGroup;

  expandedIndex = 0;
  items = ['Item 1', 'Item 2'];
  objectSettingsElements = {};
  objectSettingsForm = {};

  ngOnInit(): void {
    this.formStylesElements = new FormGroup({
      placeholder: new FormControl(''),
      width: new FormControl(''),
      height: new FormControl(''),
      required: new FormControl(''),
      'border-style': new FormControl(''),
      'font-size': new FormControl(''),
      'font-weight': new FormControl(''),
      color: new FormControl(''),
    });

    this.formStylesForm = new FormGroup({
      width: new FormControl(''),
      height: new FormControl(''),
      'background-color': new FormControl(''),
    });
  }

  @Input() currentId: string = '';
  @Output() sendSetting = new EventEmitter<any>();
  @Output() sendSettingForm = new EventEmitter<any>();

  submit() {
    this.objectSettingsElements = {
      id: this.currentId,
      styles: { ...this.formStylesElements.value },
    };
    this.sendSetting.emit(this.objectSettingsElements);
  }

  submitStylesForm() {
    this.objectSettingsForm = { ...this.formStylesForm.value };
    this.sendSettingForm.emit(this.objectSettingsForm);
  }
}
