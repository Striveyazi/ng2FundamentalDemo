import { Component,OnInit } from '@angular/core';
import { UploadOssService } from '../../service/common/oss-service'

@Component({
    selector:'uploader-test',
    template:`
    <div class='ml50'>
        <form name=theform>
            <input type="radio" name="myradio" value="local_name" checked=true/> 上传文件名字保持本地文件名字
            <input type="radio" name="myradio" value="random_name" /> 上传文件名字是随机文件名
            <br/>
            上传到指定目录:<input type="text" id='dirname' placeholder="如果不填，默认是上传到根目录" size=50>
        </form>

        <h4>您所选择的文件列表：</h4>
        <br/>
        <div id="container">
            <!--<a id="selectfiles" href="javascript:void(0);" class='btn'>选择文件</a>-->
            <input type="file" id="selectfiles" #fileSelector (change)='onfileSelectorChange(fileSelector)' name="img" />
            <div id='showing'>
            </div>
            <a id="postfiles" href="javascript:void(0);" class='btn'>开始上传</a>
        </div>    
        </div>
    `,
    providers:[UploadOssService]
})

export class Uploader implements OnInit{
    signature
    uploader
    constructor(uploader:UploadOssService){
        this.uploader = uploader;
        this.signature = uploader.getSignature();
    }
    ngOnInit(){
        console.log(this.signature)
    }
    onfileSelectorChange(f){
        console.log(f);
        let file = f.files[0]
        var fd = new FormData();  
        fd.append("fileToUpload", file); 
        this.uploader.uploadToOss(fd,this.signature);
    }
}