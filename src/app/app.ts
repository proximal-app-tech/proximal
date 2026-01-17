import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Proximal');

  showToaster = signal(false);
  toasterMessage = signal('');

  // The toaster logic remains in App for global accessibility
  public showSuccessToaster(message: string) {
    this.toasterMessage.set(message);
    this.showToaster.set(true);
    setTimeout(() => {
      this.showToaster.set(false);
    }, 5000);
  }
}
