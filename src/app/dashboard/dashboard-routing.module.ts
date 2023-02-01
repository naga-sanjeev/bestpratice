import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddusersComponent } from '../components/admin/addusers/addusers.component';
import { AdmindbComponent } from '../components/admin/admindb/admindb.component';
import { DoctordbComponent } from '../components/doctor/doctordb/doctordb.component';
import { PatientpersonaldataComponent } from '../components/doctor/patientpersonaldata/patientpersonaldata.component';
import { ListofdoctorsComponent } from '../components/patient/listofdoctors/listofdoctors.component';
import { PatientdbComponent } from '../components/patient/patientdb/patientdb.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { NewadminComponent } from './newadmin/newadmin.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,  
  children: [
    
    { path: 'admin', component: AdmindbComponent },
    { path: 'addusers', component: AddusersComponent },
    { path: 'doctor', component: DoctordbComponent },
    { path: 'patientpd', component: PatientpersonaldataComponent },
    { path: 'patient', component: PatientdbComponent },
    { path: 'listofdoctors', component: ListofdoctorsComponent },
    {path:'newadmin',component:NewadminComponent}
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
