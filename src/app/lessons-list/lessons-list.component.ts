import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE } from '../event-bus/event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer {

  constructor() { 
    console.log('lesson list component is registered as observer');
    console.log('this:', this);
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);  
  }

  lessons: Lesson[] = [];

  ngOnInit() {
  }

  notify(data:Lesson[]) {
    console.log('Lessons list component received data');
    this.lessons = data;
  }
  
}