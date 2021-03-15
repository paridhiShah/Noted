import { HomeComponent } from './home/home.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { QuestionPaperComponent } from './question-paper/question-paper.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdbmsComponent } from './adbms/adbms.component';
import { JavaComponent } from './java/java.component';
 
  
const routes: Routes = [
  {path:'signin',component:SignInComponent},
  {path:'subjects',component:SubjectsComponent,
  children:[
    {path:'home',component:HomeComponent},
  ]
},
  {path: '',redirectTo:'/subjects',pathMatch:'full'},
  {path:'signup',component:SignUpComponent},
  {path:'adbms',component:AdbmsComponent},
  {path:'java',component:JavaComponent},
  {path:'questionpaper',component:QuestionPaperComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
