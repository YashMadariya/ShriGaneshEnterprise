import { Component, OnInit } from '@angular/core';
import { FileDownloadService } from 'src/core/services/file-download.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private fileDownloadService: FileDownloadService) { }

  ngOnInit(): void {
  }

}
