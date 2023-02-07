import {NgModule} from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import { CommonModule } from '@angular/common';
// PrimeNG Components for demos
import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {BadgeModule} from 'primeng/badge';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ChartModule} from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipModule} from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ContextMenuModule} from 'primeng/contextmenu';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {GalleriaModule} from 'primeng/galleria';
import {InplaceModule} from 'primeng/inplace';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KnobModule} from 'primeng/knob';
import {LightboxModule} from 'primeng/lightbox';
import {ListboxModule} from 'primeng/listbox';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import {PickListModule} from 'primeng/picklist';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {SkeletonModule} from 'primeng/skeleton';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SplitterModule} from 'primeng/splitter';
import {StepsModule} from 'primeng/steps';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';
import {TagModule} from 'primeng/tag';
import {TerminalModule} from 'primeng/terminal';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TimelineModule} from 'primeng/timeline';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';

// Application Components
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';
import {AppTopBarComponent} from './app.topbar.component';
import {AppFooterComponent} from './app.footer.component';

// Application services

import {MenuService} from './app.menu.service';
import { LogincComponent } from './components/loginc/loginc.component';

import { EditRequirementsComponent } from './components/projectManager/edit-requirements/edit-requirements.component';

import { ProjectRequirementsComponent } from './components/projectManager/project-requirements/project-requirements.component';
import { DoctorslistComponent } from './components/projectManager/doctorslist/doctorslist.component';
import { PatientlistComponent } from './components/projectManager/patientlist/patientlist.component';
import { EditpatientComponent } from './components/projectManager/editpatient/editpatient.component';
import { ListOfUsersComponent } from './components/projectManager/list-of-users/list-of-users.component';
import { HomeComponent } from './components/projectManager/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DoctordbComponent } from './components/doctor/doctordb/doctordb.component';
import { PatientdbComponent } from './components/patient/patientdb/patientdb.component';
import { AdmindbComponent } from './components/admin/admindb/admindb.component';
import { AddusersComponent } from './components/admin/addusers/addusers.component';
import { PatientpersonaldataComponent } from './components/doctor/patientpersonaldata/patientpersonaldata.component';
import { ListofdoctorsComponent } from './components/patient/listofdoctors/listofdoctors.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { CommonInterceptor } from './common.interceptor';
import { DataService } from './data.service';
import { RootComponent } from './components/root/root.component';
import { FormsComponent } from './components/forms/forms.component';
import { EditComponent } from './components/edit/edit.component';
import { Forms2Component } from './components/forms2/forms2.component';
import { EdittableComponent } from './components/edittable/edittable.component';
import { BarComponent } from './components/bar/bar.component';
import { ProfileComponent } from './components/profile/profile/profile.component';
import { EditprofileComponent } from './components/profile/editprofile/editprofile.component';
import { DoughnutComponent } from './components/doughnut/doughnut.component';
import { LineComponent } from './components/line/line.component';
import { PieComponent } from './components/pie/pie.component';
import { PolarComponent } from './components/polar/polar.component';
import { RadarComponent } from './components/radar/radar.component';


// import { PatientComponent } from './components/patient/patient.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AccordionModule,
        AutoCompleteModule,
        AvatarModule,
        AvatarGroupModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CalendarModule,
        CardModule,
        CarouselModule,
        CascadeSelectModule,
        ChartModule,
        CheckboxModule,
        ChipModule,
        ChipsModule,
        CodeHighlighterModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        ColorPickerModule,
        ContextMenuModule,
        DataViewModule,
        DialogModule,
        DividerModule,
        DropdownModule,
        FieldsetModule,
        FileUploadModule,
        FullCalendarModule,
        GalleriaModule,
        InplaceModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        KnobModule,
        LightboxModule,
        ListboxModule,
        MegaMenuModule,
        MenuModule,
        MenubarModule,
        MessageModule,
        MessagesModule,
        MultiSelectModule,
        OrderListModule,
        OrganizationChartModule,
        OverlayPanelModule,
        PaginatorModule,
        PanelModule,
        PanelMenuModule,
        PasswordModule,
        PickListModule,
        ProgressBarModule,
        RadioButtonModule,
        RatingModule,
        RippleModule,
        ScrollPanelModule,
        ScrollTopModule,
        SelectButtonModule,
        SidebarModule,
        SkeletonModule,
        SlideMenuModule,
        SliderModule,
        SplitButtonModule,
        SplitterModule,
        StepsModule,
        TableModule,
        TabMenuModule,
        TabViewModule,
        TagModule,
        TerminalModule,
        TimelineModule,
        TieredMenuModule,
        ToastModule,
        ToggleButtonModule,
        ToolbarModule,
        TooltipModule,
        TreeModule,
        TreeTableModule,
        VirtualScrollerModule,
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppTopBarComponent,
        AppFooterComponent,
        LogincComponent,
        EditRequirementsComponent,
        
        ProjectRequirementsComponent,
        
        DoctorslistComponent,
        
        PatientlistComponent,
        
        EditpatientComponent,
        
        ListOfUsersComponent,
        
        HomeComponent,
        
        LoginComponent,
        
        DoctordbComponent,
        
        PatientdbComponent,
        
        AdmindbComponent,
        
        AddusersComponent,
        
        PatientpersonaldataComponent,
        
        ListofdoctorsComponent,
        
        DashboardComponent,
        
        RegisterComponent,
        
        RootComponent,
        
        
        FormsComponent,
        
        EditComponent,
        
        Forms2Component,
        
        EdittableComponent,
        
        BarComponent,
        
        ProfileComponent,
        
        EditprofileComponent,
        
        DoughnutComponent,
        
        LineComponent,
        
        PieComponent,
        
        PolarComponent,
        
        RadarComponent,
        
    
        
        
        // PatientComponent,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
     
        MenuService,DataService,
        {provide:HTTP_INTERCEPTORS,useClass:CommonInterceptor,multi:true}
        // BreadcrumbService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
