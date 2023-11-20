import { Component, OnInit } from '@angular/core';
import { faFacebook  } from '@fortawesome/free-brands-svg-icons';
import { faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { faTwitter  } from '@fortawesome/free-brands-svg-icons';
import {faChevronRight ,faChevronLeft} from "@fortawesome/free-solid-svg-icons"

import * as Aos from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faFacebook =faFacebook ;
  faInstagram =faInstagram ;
  faTwitter =faTwitter ;
  faChevronRight =faChevronRight ;
  faChevronLeft =faChevronLeft ;

  constructor() { }

  ngOnInit(): void {
    Aos.init()
  }

}