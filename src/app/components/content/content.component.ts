import { HomeForm } from './../../core/interfaces/home-form';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  private readonly _ = inject(ChangeDetectorRef)
  HomeForm: string = '';
  formArray: HomeForm[] = [
    { controlId: 1, controlName: 'حقل أسم العميل', lableSrc: './assets/icons/user-square-ico.svg', controlType: 'text', controlValue: '' },
    { controlId: 2, controlName: 'حقل رقم الهاتف', lableSrc: './assets/icons/call-ico.png', controlType: 'tel', controlValue: '' },
    { controlId: 3, controlName: 'حقل البريد الألكتروني', lableSrc: './assets/icons/mail-outline-ico.svg', controlType: 'email', controlValue: '' },
    { controlId: 4, controlName: 'حقل المنتجات', lableSrc: './assets/icons/box-ico.svg', controlType: 'text', popUp: true, controlValue: '' },
    { controlId: 5, controlName: 'حقل الملاحظات', lableSrc: './assets/icons/solar_notes-outline-ico.svg', controlType: 'text', controlValue: '' },
  ];

  formHide: HomeForm[] = [];

  moveToHide(controlId: number): void {
    const index = this.formArray.findIndex(item => item.controlId === controlId);
    if (index !== -1) {
      const [element] = this.formArray.splice(index, 1);
      this.formHide.push(element);
    }
  }

  moveToFormArray(controlId: number): void {
    const index = this.formHide.findIndex(item => item.controlId === controlId);
    if (index !== -1) {
      const [element] = this.formHide.splice(index, 1);
      this.formArray.push(element);
    }
  }
}
