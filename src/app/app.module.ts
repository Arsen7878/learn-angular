import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { DragSectionComponent } from './components/drag-section/drag-section.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxJsComponent } from './components/rx-js/rx-js.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    LoginViewComponent,
    NavBarComponent,
    FormBuilderComponent,
    AccordionComponent,
    DragSectionComponent,
    RxJsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    CdkAccordionModule,
    DragDropModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
