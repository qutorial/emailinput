import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {checkTldEmail} from "tldcheck";
import {checkEmailTypos} from "emailtypocheck";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email="";
  tldremark = "";
  suggestions = "";
  
  onchange() {
    this.tldremark = "";
    this.suggestions = "";

    try {
    if(!checkTldEmail(this.email)){
      let domain = this.email.replace(/.*@/, '');
      this.tldremark = "No such top level domain " + domain + ", check your email. Do you mean .de or .com?"
    }


    let corrections = checkEmailTypos(this.email);
    if(corrections.length > 0 ){
      this.suggestions = "Do you mean, maybe: " + corrections.join(" or ") + "?"
    }
    } catch(e)
    {
      console.log("something happens:", e)
    }
  }

  valid() {
    if (!this.email || !this.email.length) {
      return false;
    }
  
    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  
    return regexp.test(this.email);
  }

}

