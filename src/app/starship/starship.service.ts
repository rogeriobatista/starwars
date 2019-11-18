import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import BaseService from '../shared/services/base.service';

@Injectable()

export default class StarshipService extends BaseService {

    constructor(protected http: HttpClient) {
        super(http);
    }
}