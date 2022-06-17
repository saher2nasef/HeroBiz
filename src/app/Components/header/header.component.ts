import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.Media.component.css']
})
export class HeaderComponent implements OnInit {
  class: String = ""
  class1: String = ""
  class2: String = ""
  class3: String = ""
  class4: String = ""
  constructor() { }

  ngOnInit(): void {
  }
  AddClass() {
    this.class = "Active"
  }
  deleteClass() {
    this.class = ""
  }
  AddClassToThisUl1() {
    if (this.class1 == "") {
      this.class1 = "active"
    } else {
      this.class1 = ""
    }
  }
  AddClassToThisUl2() {
    if (this.class2 == "") {
      this.class2 = "active"
    } else {
      this.class2 = ""
    }
  }
  AddClassToThisUl3() {
    if (this.class3 == "") {
      this.class3 = "active"
    } else {
      this.class3 = ""
    }
  }
  AddClassToThisUl4() {
    if (this.class4 == "") {
      this.class4 = "active"
    } else {
      this.class4 = ""
    }
  }
}
