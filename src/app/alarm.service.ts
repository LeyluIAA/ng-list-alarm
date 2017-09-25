import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Alarm } from './alarm';
import { ALARMS } from './mock-alarms';

@Injectable()
export class AlarmService {

    private Params = {
        opened:true,
        resolved:false,
        lookups:["pbehaviors","linklist"],
        sort_dir:"ASC",
        limit:5,
        skip:0
    }

    private AlarmUrl = 'http://192.168.33.107:8082/alerts/get-alarms';

    constructor(private http: Http) { }

    getAlarms(): Promise<Alarm[]> {
        return this.http.get(this.AlarmUrl, this.Params)
                    .toPromise()
                    .then(response => response.json().data as Alarm[])
                    .catch(this.handleError);
        //return Promise.resolve(ALARMS)
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}