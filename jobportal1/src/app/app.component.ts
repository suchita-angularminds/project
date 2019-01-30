import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'JobPortal';
  constructor(private t : ToastrService) {
    setTheme('bs3');
    this.t.success('Hello JobPortal!', 'Toastr fun!');
  }

}
