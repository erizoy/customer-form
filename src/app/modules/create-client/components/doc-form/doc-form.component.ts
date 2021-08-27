import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ClientDoc, DocType, DOC_TYPES } from '@models/client';
import { ClientService } from '@services/client.service';

@Component({
  selector: 'app-doc-form',
  templateUrl: './doc-form.component.html',
  styleUrls: ['./doc-form.component.scss']
})
export class DocFormComponent {
  form!: FormGroup;
  fileName = '';
  readonly docTypes = DOC_TYPES;

  constructor(formBuilder: FormBuilder, private router: Router, private service: ClientService) {
    this.form = formBuilder.group({
      type: [DocType.PASSPORT, Validators.required],
      series: '',
      number: ['', Validators.required],
      issuedBy: '',
      issueDate: ['', Validators.required],
      file: ''
    });

    if (this.service.doc) {
      this.service.doc.file = ''; // can set file input value only manually
      this.form.setValue(this.service.doc);
    }
  }

  selectFile(event: Event): void { // read selected files and create data/image for preview
    const target = event.target as HTMLInputElement;
    const files = target.files;

    if (files && files.length > 0) {
      this.fileName = files[0].name;
      
      const reader = new FileReader();
      
      reader.readAsDataURL(files[0]);
      reader.onload = (event: ProgressEvent) => {
        this.form.get('file')?.setValue((event.target as FileReader).result)
      }
    } else {
      this.fileName = '';
    }
  }

  previous(): void {
    this.router.navigate(['/client-form/address']);
  }

  next(): void {
    this.service.doc = this.form.getRawValue() as ClientDoc;
    this.router.navigate(['/created-client']);
  }
}
