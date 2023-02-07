import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LogincComponent } from './components/loginc/loginc.component';
// import { AuthGuard } from './services/auth.guard';
import { EditRequirementsComponent } from './components/projectManager/edit-requirements/edit-requirements.component';

import { ProjectRequirementsComponent } from './components/projectManager/project-requirements/project-requirements.component';
import { AppMainComponent } from './app.main.component';
import { AdmindbComponent } from './components/admin/admindb/admindb.component';
import { AddusersComponent } from './components/admin/addusers/addusers.component';
import { DoctordbComponent } from './components/doctor/doctordb/doctordb.component';
import { PatientpersonaldataComponent } from './components/doctor/patientpersonaldata/patientpersonaldata.component';
import { PatientdbComponent } from './components/patient/patientdb/patientdb.component';
import { ListofdoctorsComponent } from './components/patient/listofdoctors/listofdoctors.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminGuard } from './admin.guard';
import { NewadminComponent } from './dashboard/newadmin/newadmin.component';
import { RootComponent } from './components/root/root.component';

import { FormsComponent } from './components/forms/forms.component';
import { EditComponent } from './components/edit/edit.component';
import { Forms2Component } from './components/forms2/forms2.component';

import { EdittableComponent } from './components/edittable/edittable.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { EditprofileComponent } from './components/profile/editprofile/editprofile.component';
import { BarComponent } from './components/bar/bar.component';
import { DoughnutComponent } from './components/doughnut/doughnut.component';
import { PieComponent } from './components/pie/pie.component';
import { LineComponent } from './components/line/line.component';
import { PolarComponent } from './components/polar/polar.component';
import { RadarComponent } from './components/radar/radar.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            // {
            //     path: '', component: LogincComponent
            // }, 
            {path:'register',component:RegisterComponent},
            {path:'',component:LoginComponent},
            {
                path:'dashboard',component:DashboardComponent,
                children:[
                    { path:'root',component:RootComponent},
                    { path: 'table', component: AdmindbComponent },
                    { path: 'forms', component: FormsComponent },
                    { path: 'edit/:id', component: EditComponent },
                    { path: 'forms2',component:Forms2Component},
                    { path: 'editTable',component:EdittableComponent},
                    { path: 'profile',component:ProfileComponent},
                    { path: 'editProfile',component:EditprofileComponent},
                    { path: 'bar',component:BarComponent},
                    { path: 'doughnut',component:DoughnutComponent},
                    { path: 'pie',component:PieComponent},
                    { path: 'line',component:LineComponent},
                    { path: 'polar',component:PolarComponent},
                    { path: 'radar',component:RadarComponent}
                ]          
            },
            // { path: 'dashboard', loadChildren:()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule),canActivate:[AdminGuard]},
            { path: 'admin', loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)},
            {
                path: 'root', component: AppMainComponent,
                children: [
                    {
                        path: "projectrequirement",
                        component: ProjectRequirementsComponent,
                    },
                    { path: 'edit-requiremenent', component: EditRequirementsComponent },
                    { path: 'admin', component: AdmindbComponent },
                    { path: 'addusers', component: AddusersComponent },
                    { path: 'doctor', component: DoctordbComponent,canActivate:[AdminGuard] },
                    { path: 'patientpd', component: PatientpersonaldataComponent },
                    { path: 'patient', component: PatientdbComponent,canActivate:[AdminGuard]  },
                    { path: 'listofdoctors', component: ListofdoctorsComponent,canActivate:[AdminGuard]  }
                ]
            },
            { path: "login", component: LogincComponent },
            { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) },
   
            
        ], { scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
