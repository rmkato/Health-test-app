import { Component, OnInit } from '@angular/core';
import { Health } from '@ionic-native/health/ngx';

@Component({
  selector: 'app-health-test',
  templateUrl: './health-test.page.html',
  styleUrls: ['./health-test.page.scss'],
})
export class HealthTestPage implements OnInit {
  response: string;
  authorization:boolean;
  data: string;
  constructor(
    private health: Health
  ) {
    this.response = 'false';
    this.data = '';
    this.authorization = false;
    this.testHealth();
  }

  ngOnInit() {
  }

  testHealth() {
    this.health.isAvailable()
    .then((available:boolean) => {
      console.log(available);
      this.health.requestAuthorization([
        'distance', 'nutrition',  //read and write permissions
        {
          read: ['steps'],       //read only permission
          write: ['height', 'weight']  //write only permission
        }
      ])
      .then((res) => {
        this.response = res;
        this.authorization = true;
      })
      .catch(e => console.log(e));
    })
    .catch(e => console.log(e));
  }

  pullData() {
    this.health.query({
      startDate: new Date(new Date().getTime() - 3 * 24 * 60 * 60 * 1000), // three days ago
      endDate: new Date(), // now
      dataType: 'height',
      limit: 1000
    })
    .then((res) => {
      console.log(res)
      this.data = res.toString();
    })
    .catch((e) => {
      console.log(e)
      this.data = e.toString();
    });
  }

}
