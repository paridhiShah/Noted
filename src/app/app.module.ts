import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdbmsComponent } from './adbms/adbms.component';
import { JavaComponent } from './java/java.component';
import { QuestionPaperComponent } from './question-paper/question-paper.component';
import { HomeComponent } from './home/home.component';
const routes:Routes=[
  {path:'signin',component:SignInComponent},
  {path:'signup',component:SignUpComponent},
  {path:'subjects',component:SubjectsComponent,
  children:[
    {path:'home',component:HomeComponent},
  ]
},
  {path: '',redirectTo:'/subjects',pathMatch:'full'},
  {path:'adbms',component:AdbmsComponent},
  {path:'java',component:JavaComponent},
  {path:'questionpaper',component:QuestionPaperComponent},
//  {path:'**',component:PageNotFounfComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    SignInComponent,
    SignUpComponent,
    AdbmsComponent,
    JavaComponent,
    QuestionPaperComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
