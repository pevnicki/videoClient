import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Observable, Observer} from 'rxjs';
import * as videoReducer from '../shared/state/reducers/video.reducer';
import * as videoActions from '../shared/state/actions/video.actions';
import {Video} from '../shared/models/video.model';
import {Store} from '@ngrx/store';
import {createVideo} from '../shared/state/actions/video.actions';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  validateForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<videoReducer.State>) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      imdb: ['', [Validators.required, Validators.minLength(15)]],
    });
  }

  submitForm(value: { name: string; imdb: string}): void {

    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    if (this.validateForm.invalid){
      return;
    }
    const newBestVideo: Video = {
      name: this.validateForm.value.name,
      imdb_link: this.validateForm.value.imdb
    }
    this.store.dispatch(createVideo({video: newBestVideo}));
    this.validateForm.reset();
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
      this.validateForm.controls[key].updateValueAndValidity();
    }
  }
}
