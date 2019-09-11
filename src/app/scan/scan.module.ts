import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { ScanComponent } from "./scan.component"; // Import all components that will be used in the lazy loaded module
import { ScanRoutingModule } from "./scan.routing"; // import the routing module

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptCommonModule,
        ScanRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule
    ],
    declarations: [ScanComponent], // declare all components that will be used within the module
    providers: [ ] // provide all services that will be used within the module
})
export class ScanModule { }