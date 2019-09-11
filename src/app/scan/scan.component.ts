import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from 'nativescript-barcodescanner';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
	moduleId: module.id,
	selector: 'scan',
	templateUrl: './scan.component.html',
	styleUrls: ['./scan.component.css']
})

export class ScanComponent implements OnInit {

	constructor(private barcodeScanner: BarcodeScanner,private routerExtensions: RouterExtensions) { }

	ngOnInit() { }

	//Barcode
    public onScan() {
        this.barcodeScanner.scan({
            formats: "QR_CODE, EAN_13",
            showFlipCameraButton: true,   
            preferFrontCamera: false,     
            showTorchButton: true,        
            beepOnScan: true,             
            torchOn: false,               
            resultDisplayDuration: 500,   
            // orientation: orientation,     
            openSettingsIfPermissionWasPreviouslyDenied: true //ios only 
        }).then((result) => {
            console.log(result);
            this.onNavItemTap(result.text);
            }, (errorMessage) => {
                console.log("Error when scanning " + errorMessage);
            }
        );
    }

    onNavItemTap(navItemRoute: string): void {
		this.routerExtensions.navigate(['/result',navItemRoute], {
			transition: {
				name: "fade"
			},
			clearHistory: true
		});
	}
}