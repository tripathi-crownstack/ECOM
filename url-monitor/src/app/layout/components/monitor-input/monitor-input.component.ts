import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-monitor-input',
  templateUrl: './monitor-input.component.html',
  styleUrls: ['./monitor-input.component.scss']
})
export class MonitorInputComponent implements OnInit {

  selectedFrequency:any="Select Frequency"
  list=['10 sec','1 min','5 min' ,'10 min','15 min','1 hour','4 hours','6 hours','Daily']
  form!: FormGroup;

  constructor(private fb:FormBuilder,private data:DataService) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      url:['',Validators.required]
    })

  }

  selectFrequency(item:any){
    this.selectedFrequency=item.target.innerHTML
  }

  onSubmit(form:FormGroup){
    let url :any=form.value.url
    this.data.getRequestStatus(url).subscribe((response:any)=>{
      console.log(response.statusCode)

    })
  }

}
