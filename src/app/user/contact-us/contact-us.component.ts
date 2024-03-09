import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ContactUsService } from 'src/core/services/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  inquiryForm: FormGroup ;
  isSubmit = false;
  constructor(private formBuilder: FormBuilder, private titleService: Title, private contactUsService:ContactUsService) { 
    this.titleService.setTitle("Contact-Us")
    this.inquiryForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      contactNo: ['', [Validators.required,  Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      message: [""]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.isSubmit = true;
    if (this.inquiryForm.invalid) {
      return;
    }
    const fieldValues = this.inquiryForm.getRawValue();
    var bodymsg = "Name: "+fieldValues.name+"\nContact Number: "+fieldValues.contactNo+"\nEmail: "+fieldValues.email+"\nMessage: "+fieldValues.message+"";
    var mailLink = "mailto:shriganeshenterprise1234@gmail.com?subject="+fieldValues.subject+"&body="+bodymsg;
    window.open(encodeURI(mailLink),"_blank");
  }
}
