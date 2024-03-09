import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  videoUrl!: SafeResourceUrl;
  showControls = true;
  hideMoreOptions = false;

  constructor(private sanitizer: DomSanitizer) { 
    const videoPath = '../../../assets/videos/Machining_process_2_3rB5KfSyR4g_136.mp4';
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoPath);
  }

  ngOnInit(): void {
  }

}
