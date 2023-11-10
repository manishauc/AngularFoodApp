import { Component } from '@angular/core';



@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styles:[`
		.logClass{
		color:white;
	}`]
})

export class ServerComponent{
	Test = "Mani";
	userName ="Manisha";
	userName1 ="Manisha Gaikwad";
	resetUsername(){
		this.userName="";
	}


	displayTest = "off";
	allLogs= [];
	onToggleDisplay(){
		this.displayTest=(this.displayTest==='off' ? 'on' :'off');
		this.allLogs.push(new Date());
	}

	checkIndex(){

	}
}