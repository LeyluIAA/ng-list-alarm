import { Component, OnInit } from '@angular/core';
import { NgClass }           from '@angular/common';
import { Alarm }             from './alarm';
import { AlarmService }      from './alarm.service';

@Component({
  selector: 'app-root',
  template: `
<div>
    <h1 style="text-align:center">
        Welcome to {{title}}!
    </h1>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>component</th>
                <th>resource</th>
                <th>connector</th>
                <th>connector_name</th>
                <th>creation_date</th>
                <th>state</th>
                <th>status</th>
                <th>extra</th>
                <th>actions</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let alarm of alarms">
                <td>{{alarm.v.component}}</td>
                <td>{{alarm.v.resource}}</td>
                <td>{{alarm.v.connector}}</td>
                <td>{{alarm.v.connector_name}}</td>
                <td>{{alarm.v.creation_date * 1000 | date:'medium'}}</td>
                <td><span class="label label-rounded" [ngClass]="setCriticityClasses(alarm.v.state.val, alarm.v.status.val)">{{criticity}}</span></td>
                <td>{{statusVal}}</td>
                <td>
                    <i class="fa fa-check" aria-hidden="true" *ngIf="alarm.v.ack;"></i>
                    <i class="fa fa-ticket" aria-hidden="true" *ngIf="alarm.v.ticket;"></i>
                </td>
                <td><button class="btn"><i class="fa fa-check" aria-hidden="true"></i></button></td>
            </tr>
        </tbody>
    </table>
</div>`,
  styles: [''],
  providers: [AlarmService]
})

export class AppComponent implements OnInit {
    title = 'list-alarm';
    criticity = '';
    statusVal = '';
    alarms: Alarm[];

    constructor(private alarmService: AlarmService) { }

    setCriticityClasses(val: number, status: number) {
        var classes = {};
        switch (val) {
            case 0: {
                classes = {
                    'label-success': '.label-success'
                };
                this.criticity = 'Info';
                break;
            }
            case 1: {
                classes = {
                    'label-warning': '.label-warning'
                };
                this.criticity = 'Minor';
                break;
            }
            case 2: {
                classes = {
                    'label-warning': '.label-warning'
                };
                this.criticity = 'Major';
                break;
            }
            case 3: {
                classes = {
                    'label-error': '.label-error'
                };
                this.criticity = 'Criticity';
                break;
            }
        }

        switch (status) {
            case 0:
                this.statusVal = 'Off';
                break;
            case 1:
                this.statusVal = 'On going';
                break;
            case 2:
                this.statusVal = 'Stealthy';
                break;
            case 3:
                this.statusVal = 'Bagot';
                break;
            case 4:
                this.statusVal = 'Cancel';
                break;
            default:
                this.statusVal = 'Off';
                break;
        }
      
        return classes;
    }

    getAlarms(): void {
      this.alarmService.getAlarms().then(alarms => this.alarms = alarms);
    }

    ngOnInit(): void {
      this.getAlarms();
    }
}

