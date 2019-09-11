import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";


const routes: Routes = [
    { path: "", redirectTo: "/scan", pathMatch: "full" },
    { path: "scan", loadChildren: "./scan/scan.module#ScanModule" },
    { path: "result/:id", loadChildren: "./result/result.module#ResultModule" },

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
