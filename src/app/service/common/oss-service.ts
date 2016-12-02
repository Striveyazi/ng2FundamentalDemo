import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Base64 } from '../../../assets/plug/base64';

@Injectable()
export class UploadOssService{
    // accessid= 'ZM4POw94PzuCQuX0';
    // accesskey= 'z52AvPJsMgSAGV2SeTmjNUhQHz6dFu';
    // host = 'http://witpm-test.oss-cn-beijing.aliyuncs.com';
accessid= '6MKOqxGiGU4AUk44';
accesskey= 'ufu7nS8kS59awNihtjSonMETLI0KLy';
host = 'http://post-test.oss-cn-hangzhou.aliyuncs.com';

    policyText = {
        "expiration": "2020-01-01T12:00:00.000Z", //设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
        "conditions": [
        ["content-length-range", 0, 1048576000] // 设置上传文件的大小限制
        ]
    };
    getSignature(){
        let policyBase64 = Base64.encode(JSON.stringify(this.policyText))
        let message = policyBase64
        var bytes = Crypto.HMAC(Crypto.SHA1, message, this.accesskey, { asBytes: true }) ;
        var signature = Crypto.util.bytesToBase64(bytes);
        return {signature:signature,policy:policyBase64};
    }  
    uploadToOss(data,signature){
        console.log(data);
        let xhr = new XMLHttpRequest();
        let url = this.host;
        xhr.open('post', url);
        data.append('OSSAccessKeyId', this.accessid);
        data.append('key', 'test.png');
        data.append('policy', signature.policy);
        data.append('success_action_status' , '200');
        data.append( 'signature', signature.signature);

　　    xhr.send(data);
    }
}