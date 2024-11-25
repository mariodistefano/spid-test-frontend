import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  template: ` <p>success works!</p> `,
  styles: ``,
})
export class SuccessComponent {
  token: string | null = '';

  private route = inject(ActivatedRoute);

  constructor() {}

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token');
    if (this.token) {
      localStorage.setItem('spidToken', this.token);
    }
  }
}
