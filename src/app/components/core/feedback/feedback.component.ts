import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as IMask from 'imask';
import { DisplayService } from 'src/app/services/display.service';
import { InfrastructureService } from 'src/app/services/infrastructure/Infrastructure.service';
import { SideNavService } from 'src/app/services/side-nav.service';
import { IFeedback } from 'src/app/shared/models/infrastructure/feedback';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

errors: string[];

  imask: any;
  disabled: boolean;
  sendingStatus: string;
  feedBack: IFeedback;
  formFeedback: FormGroup;

  constructor(
    public infrastructureService: InfrastructureService,
    private snackBar: MatSnackBar,
    private sideNavService: SideNavService,
    public displayService: DisplayService,
    private fb: FormBuilder,
    ) {
    }



  ngOnInit() {
    this.createRegisterForm();
    this.sideNavService.opened = false;
    this.sendingStatus = 'initial';
    // this.sendingStatus = 'pending';
    // this.sendingStatus = 'completed';



  }

  createRegisterForm() {
    this.formFeedback = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required])
    });

  }

  onSubmit() {

    if (this.formFeedback.invalid) {
      console.log(this.formFeedback.controls.phone.errors);
      return;
    } else {
      this.feedBack = {
        name: this.formFeedback.controls.name.value,
        phone: this.formFeedback.controls.phone.value,
        description: this.formFeedback.controls.description.value,
      };

      this.disabled = true;
      this.sendingStatus = 'pending';

      this.infrastructureService.sendFeedback(this.feedBack).subscribe((response: any) => {
        this.disabled = false;
        if (response === 200) {
          this.sendingStatus = 'completed';
          this.formFeedback.reset();
        }
      }, error => {
        console.log(error);
        this.errors = error.errors;
        console.log(this.errors);
        this.openSnackBar('что-то пошло не так');
      });


    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {duration: 2500});
  }



}
