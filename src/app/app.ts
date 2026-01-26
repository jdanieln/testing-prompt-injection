import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Advanced AI Programming';

  contact = {
    name: '',
    subject: '',
    message: ''
  };

  sendEmail() {
    const recipient = 'jdnarvaezf@gmail.com';
    const subject = encodeURIComponent(`[Contacto Web] ${this.contact.subject}`);
    const body = encodeURIComponent(
      `Nombre: ${this.contact.name}\n\nMensaje:\n${this.contact.message}`
    );
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Workaround: Usar un iframe oculto para evitar navegaciones "about:blank"
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = mailtoUrl;
    document.body.appendChild(iframe);

    // Limpieza después de un breve periodo
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 2000);
  }
}
