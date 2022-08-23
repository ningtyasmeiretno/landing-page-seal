import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  form: FormGroup;
  siteKey: string;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
    this.siteKey = '6LcH7XscAAAAAL1FrTsr-Q7DcGO4Yr2_ew2xv0GY'
  }

  ngOnInit(): void {
    
  }
  // onSubmit(form) {
  //   console.log(form)
  //   this.contact.PostMessage(form)
  //   .subscribe(response => {
  //   location.href = 'https://mailthis.to/confirm'
  //   console.log(response)
  //   }, error => {
  //   console.warn(error.responseText)
  //   console.log({ error })
  //   })
  //   }


}
