import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociatelistingComponent } from './component/associatelisting/associatelisting.component';
import { CustomerlistingComponent } from './component/customerlisting/customerlisting.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { authGuard } from './guard/auth.guard';
import { UserlistComponent } from './component/userlist/userlist.component';

const routes: Routes = [
  {path:'',component:AssociatelistingComponent,canActivate:[authGuard]},
  {path:'associate',component:AssociatelistingComponent,canActivate:[authGuard]},
  {path:'customer',component:CustomerlistingComponent,canActivate:[authGuard]},
  {path:'user',component:UserlistComponent,canActivate:[authGuard]},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
