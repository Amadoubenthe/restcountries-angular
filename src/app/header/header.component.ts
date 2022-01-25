import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isChecked!: boolean;
  mode!: string;

  constructor(private themeService: ThemeService){
  }

  ngOnInit(): void {
    this.isChecked = this.themeService.isChecked
    this.mode = this.themeService.mode
  }

  onChanged(event: MatSlideToggleChange): void {
    this.themeService.changed(event)
    this.isChecked = this.themeService.isChecked
    this.mode = this.themeService.mode
  }

}
