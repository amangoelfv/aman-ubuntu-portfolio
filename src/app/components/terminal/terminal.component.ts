import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppActivityService } from 'src/app/services/app-activity.service';
import { Apps } from 'src/app/shared/enums/apps.enum';
import { IWindowConfig } from '../window/window.component';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  constructor(
    private appsActivityService: AppActivityService
  ) { }

  windowConfig: IWindowConfig = {
    title: 'aman@hp: ~/ubuntu-portfolio',
    width: '40%',
    height: '40%'
  }

  @ViewChild('inputField') inputField: any;
  history: any[] = []
  input = new FormControl('')
  ngOnInit(): void {
    setTimeout(() => { // this will make the execution after the above boolean has changed
      this.inputField.nativeElement.focus();
    }, 500);
    window.addEventListener('keyup', (key: KeyboardEvent) => {
      if (key.code == 'Enter') {
        this.submitInput();
      }
    })
  }
  closeApp() {
    this.appsActivityService.closeApp(Apps.TERMINAL);
  }
  clickAnywhere() {
    this.inputField.nativeElement.focus();
  }
  submitInput() {
    const query = {
      query: this.input.value,
      response: ''
    }
    query.response = this.input.value.split(' ')[0] + ": command not found";
    this.history.push(query);
    this.input.patchValue('');
  }
}
