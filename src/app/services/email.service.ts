import { Injectable } from '@angular/core';

declare const emailjs: any;

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serviceId = 'service_qri04qg';
  private templateId = 'template_bi3ssec';
  private publicKey = '57WhnXuqtgnjSxGJr';

  async sendContactEmail(formData: any) {
    const templateParams = {
      name: formData.name,
      email: formData.email,
      contact: formData.contact,
      countryCode: formData.countryCode,
      details: formData.details,
      subject: 'Proximal: Query'
    };

    try {
      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams,
        this.publicKey
      );
      return response;
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw error;
    }
  }
}
