import { BrowserModule } from '@angular/platform-browser';
import {   NgModule } from '@angular/core';
// import { C } from '@angular/compiler'
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { WindowComponent } from './components/window/window.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ColorContainerComponent } from './components/color-container/color-container.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ThreeDotsComponent } from './components/three-dots/three-dots.component';
import { ColorFormComponent } from './components/color-form/color-form.component';
import { DotComponent } from './components/three-dots/dot/dot.component';
import { SelectColorComponent } from './components/select-color/select-color.component';
import { PostProcessingComponent } from './components/post-processing/post-processing.component';
import { ProcessedComponent } from './shared/processed/processed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WindowComponent,
    TextInputComponent,
    ColorContainerComponent,
    ButtonsComponent,
    ThreeDotsComponent,
    ColorFormComponent,
    DotComponent,
    SelectColorComponent,
    PostProcessingComponent,
    ProcessedComponent,
   
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
