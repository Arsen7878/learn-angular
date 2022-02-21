import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss'],
})
export class HomeViewComponent {
  currentId: string = '';
  setting: any = null;
  settingForm: any = null;

  getId(id: string) {
    this.currentId = id;
  }

  getSetting(setting: any) {
    this.setting = setting;
  }

  getSettingForm(setting: any) {
    this.settingForm = { ...setting };
  }
}
