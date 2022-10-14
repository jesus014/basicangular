import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';
import { ContactComponent } from './contact/contact.component';
import { PermissionsGuard } from './guards/permissions.guard';
import { WithoutSaveGuard } from './guards/without-save.guard';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DetailsComponent } from './users/details/details.component';
import { ListComponent } from './users/list/list.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'contact-reactive', component:ContactReactiveComponent, canDeactivate:[WithoutSaveGuard]},
  {path:'contact-templeate/:id', component:ContactComponent},
  {path:'home', component:HomeComponent},
  //uso de rutas hijas en el path de users
  {path:'users', component:UserComponent,canActivate:[PermissionsGuard],
   children:[
    {path:'list',component:ListComponent},
    {path:'details',component:DetailsComponent},
  ]
  },
  {path:'**', component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
