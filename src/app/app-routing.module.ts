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
import { DashboardComponent } from './dashboard/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'hash', component: LogincComponent
            }, 
            {path:'register',component:RegisterComponent},
            {path:'',component:LoginComponent},
            // {path:'dashboard',component:DashboardComponent},
            { path: 'dashboard', loadChildren:()=> import('./dashboard/dashboard.module').then(m=>m.DashboardModule)},
           
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
                    { path: 'doctor', component: DoctordbComponent },
                    { path: 'patientpd', component: PatientpersonaldataComponent },
                    { path: 'patient', component: PatientdbComponent },
                    { path: 'listofdoctors', component: ListofdoctorsComponent }
                ]
            },
            { path: "login", component: LogincComponent },
            
        ], { scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
