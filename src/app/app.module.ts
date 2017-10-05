import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { Infographic1Component } from './Infographics/infographic1/infographic1.component';
import { Infographic2Component } from './Infographics/infographic2/infographic2.component';
import { Infographic3Component } from './Infographics/infographic3/infographic3.component';
import { Infographic4Component } from './Infographics/infographic4/infographic4.component';
import { Infographic5Component } from './Infographics/infographic5/infographic5.component';
import { Infographic6Component } from './Infographics/infographic6/infographic6.component';
import { Infographic7Component } from './Infographics/infographic7/infographic7.component';
import { Infographic8Component } from './Infographics/infographic8/infographic8.component';
import { ChatSendableTextComponent } from './chat-sendable-text/chat-sendable-text.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    Infographic1Component,
    Infographic2Component,
    Infographic3Component,
    Infographic4Component,
    Infographic5Component,
    Infographic6Component,
    Infographic7Component,
    Infographic8Component,
    ChatSendableTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
