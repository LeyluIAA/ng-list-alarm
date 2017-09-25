export class Alarm {
        d: string;
        linklist: {
            computed_links: Array<string>;
        };
        pbehaviors: Array<object>;
        t: number;
        v: {
            status: {
                a: string;
                _t: string;
                m: string;
                t: number;
                val: number
            },
            resolved: number;
            resource: string;
            extra: object;
            ack: {
                a: string;
                _t: string;
                m: string;
                t: number
            };
            tags: Array<string>;
            component: string;
            creation_date: number;
            connector: string;
            canceled: number;
            state: {
                a: string;
                _t: string;
                m: string;
                t: number;
                val: number
            },
            connector_name: string;
            initial_output: string;
            last_update_date: number;
            snooze: number;
            ticket: {
                a: string;
                _t: string;
                m: string;
                t: number;
                val: number
            };
            hard_limit: number
        };
        infos: {
            rk: string;
        };
        _id: string
}