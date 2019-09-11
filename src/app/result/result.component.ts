import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { request } from "tns-core-modules/http";

@Component({
	moduleId: module.id,
	selector: 'result',
	templateUrl: './result.component.html',
	styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {

	kode:string;
	data=[];
	data1=[];
	isBusy:boolean=false;
	kode_produksi:string;

	constructor(private route: ActivatedRoute) { 
		const id = +this.route.snapshot.params['id'];
		this.kode=id.toString();
		this.getdata();
		alert(this.kode);
	}

	ngOnInit() { }

	public getdata(){
		this.isBusy=true;
        request({
            url: "http://sistec.co.id/cekklik/produk.php",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({
            kode:this.kode,
            })
        }).then((response) => {
            const result = response.content.toJSON();
            this.data=result.data;
			this.isBusy=false;
        }, (e) => {
        });
    }

	public getdataproduksi(){
		this.isBusy=true;
        request({
            url: "http://sistec.co.id/cekklik/produksi.php",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({
				kode_produksi:this.kode_produksi,
            })
        }).then((response) => {
            const result = response.content.toJSON();
            this.data1=result.data;
			this.isBusy=false;
        }, (e) => {
        });
    }
}