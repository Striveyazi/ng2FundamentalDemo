import { Component } from '@angular/core';
import { MarkdownIME } from '../../../assets/plug/MarkdownIME';

@Component({
  selector:'task-editor',
  template:`
    <!--内容——顶部-->
    <div class="rightcont-top">
        <label for="man-hour"><input type="text" name="man-hour" id="" value=""/></label>
        <label for="priority"><input type="text" name="priority" id="" value=""/></label>
        <label for="deadline"><input type="text" name="deadline" id="" value=""/></label>
    </div>
    <!--内容——标题-->
    <div class="rightcont-title">
        <label for=" "><input type="text" name=" " id="" value=""/></label>
    </div>
    <!--内容——编辑区-->
    <div class="rightcont-editbox">
        <label for=" ">
          <!--<input type="text" name=" " id="" value=""/>-->
          <div id="Taskeditor" contentEditable="true" style="width:300px;height:300px">
            <p>Input your text here...</p>
          </div>
        </label>
        <input class="btn" type="button" name="" id="" value="保存" />
        <input class="btn" type="button" name="" id="" value="取消" />
    </div>
  `
})
/* 三级组件 */
export class TaskEditorComponent {
    ngOnInit() {
      var editor = document.getElementById('Taskeditor');
      MarkdownIME.Enhance(editor);
    }
 }