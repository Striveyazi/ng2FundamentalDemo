import { Component } from '@angular/core';

import { NgClass, NgStyle } from '@angular/common';

import { FileUploader} from 'ng2-file-upload';



// webpack html imports

let template = require('./simple-demo.html');



// const URL = '/api/';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';



@Component({

    selector: 'uploader-demo',

    template: template,

})

export class Uploader {

    public uploader: FileUploader = new FileUploader({ url: URL });

    public hasBaseDropZoneOver: boolean = false;

    public hasAnotherDropZoneOver: boolean = false;

    public fileOverBase(e: any): void {

        this.hasBaseDropZoneOver = e;
    }
    public fileOverAnother(e: any): void {

        this.hasAnotherDropZoneOver = e;

    }

}