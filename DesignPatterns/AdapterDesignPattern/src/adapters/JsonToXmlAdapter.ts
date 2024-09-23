// src/adapters/JsonToXmlAdapter.ts
import { DataAdapter } from '../interfaces/DataAdapter';
import { create } from 'xmlbuilder';

export class JsonToXmlAdapter implements DataAdapter {
    convert(json: any): string {
        const xml = this.jsonToXml(json);
        return xml;
    }

    private jsonToXml(json: any): string {
        const xmlObj = create('root');
        this.buildXml(xmlObj, json);
        return xmlObj.end({ pretty: true });
    }

    private buildXml(xmlObj: any, json: any): void {
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                const value = json[key];
                if (typeof value === 'object' && value !== null) {
                    const child = xmlObj.ele(key);
                    this.buildXml(child, value);
                } else {
                    xmlObj.ele(key, value);
                }
            }
        }
    }
}
