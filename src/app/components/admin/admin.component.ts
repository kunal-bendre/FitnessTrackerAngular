import { Component, OnInit } from '@angular/core';
import {ActivitiesService} from '../../services/activities.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public activities;
  
  constructor(private activityService:ActivitiesService) {
  }

  ngOnInit() {
    this.getActivities();
  }

  getActivities(){
    this.activityService.getActivities().subscribe(
      data => {this.activities = data},
      err => console.error(err),
      () => console.log('activities loaded')
    );
  }

  getActivity(id:number){
    this.activityService.getActivity(id).subscribe(
      data => {this.activities = data},
      err => console.error(err),
      () => console.log('activity fetched')
    )
  }
}
