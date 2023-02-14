import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

import { EdittableComponent } from './components/edittable/edittable.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { EditprofileComponent } from './components/profile/editprofile/editprofile.component';
import { NewregisterComponent } from './components/newregister/newregister.component';
import { BarsComponent } from './components/charts/bars/bars.component';
import { DoughnutsComponent } from './components/charts/doughnuts/doughnuts.component';
import { PiesComponent } from './components/charts/pies/pies.component';
import { LinesComponent } from './components/charts/lines/lines.component';
import { PolarsComponent } from './components/charts/polars/polars.component';
import { RadarsComponent } from './components/charts/radars/radars.component';
import { NewLoginComponent } from './components/TemplateForms/new-login/new-login.component';
import { ReactiveFormsComponent } from './components/TemplateForms/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from './components/TemplateForms/template-driven-forms/template-driven-forms.component';
import { RegisterComponent } from './components/TemplateForms/register/register.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'newRegister', component: NewregisterComponent },
            { path: '', component: LoginComponent },
            {
                path:'dashboard',component:DashboardComponent,
                children:[
                    { path: 'reactive', component: ReactiveFormsComponent },
                    { path: 'templateDriven',component:TemplateDrivenFormsComponent},
                    { path: 'editTable',component:EdittableComponent},
                    { path: 'profile',component:ProfileComponent},
                    { path: 'editProfile',component:EditprofileComponent},
                    { path: 'bar',component:BarsComponent},
                    { path: 'doughnut',component:DoughnutsComponent},
                    { path: 'pie',component:PiesComponent},
                    { path: 'line',component:LinesComponent},
                    { path: 'polar',component:PolarsComponent},
                    { path: 'radar',component:RadarsComponent}
                ]          
            },
            { path: 'topbar', component: TopbarComponent },
            { path: 'footer', component: FooterComponent },
            { path: 'sidebar', component: SidebarComponent },
           


        ], { scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
