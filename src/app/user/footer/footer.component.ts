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

  downloadFile(): void {
    const fileUrl = 'https://drive.google.com/file/d/1M86V8dZD5DJZa6Fse_enEwfYJc4fwotZ/view?usp=drive_link'; // Replace with the actual file URL
    const filename = 'SHRI GANESH ENTRPRISE 2024.pdf'; // Replace with the desired filename

    this.fileDownloadService.downloadFile(fileUrl, filename).subscribe(blob => {
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    });
  }

}
