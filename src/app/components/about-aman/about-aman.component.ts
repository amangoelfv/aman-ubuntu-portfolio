import { Component, OnInit } from '@angular/core';
import { AppActivityService } from 'src/app/services/app-activity.service';
import { Apps } from 'src/app/shared/enums/apps.enum';
import { IWindowConfig } from '../window/window.component';
import { skills } from './data/data';

export enum NavbarItems {
  ABOUTME = 'About Me',
  EDUCATION = 'Education',
  EXPERIENCE = 'Experience',
  SKILLS = 'Skills',
  PROJECTS = 'Projects',
  RESUME = 'Resume',

}
@Component({
  selector: 'app-about-aman',
  templateUrl: './about-aman.component.html',
  styleUrls: ['./about-aman.component.scss']
})
export class AboutAmanComponent implements OnInit {

  constructor(
    private appsActivityService: AppActivityService
  ) { }
  mySkills = skills;
  navList = [
    {
      name: NavbarItems.ABOUTME,
      icon: 'assets/icons/about.svg'
    },
    {
      name: NavbarItems.EDUCATION,
      icon: 'assets/icons/education.svg'
    },
    {
      name: NavbarItems.EXPERIENCE,
      icon: 'assets/icons/experience.svg'
    },
    {
      name: NavbarItems.SKILLS,
      icon: '/assets/icons/skills.svg'
    },
    {
      name: NavbarItems.RESUME,
      icon: 'assets/icons/download.svg'
    },
    {
      name: NavbarItems.PROJECTS,
      icon: 'assets/icons/project.svg'
    },
  ];
  navbarItems = NavbarItems;
  selected = NavbarItems.SKILLS;
  ngOnInit(): void {
  }
  windowConfig: IWindowConfig = {
    title: 'About Aman'
  }
  closeApp() {
    this.appsActivityService.closeApp(Apps.ABOUTME);
  }
  changeSelected(item: NavbarItems) {
    this.selected = item;
  }
  navBar = []

}
