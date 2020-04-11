import Project from '../models/Project';
import mailer from '../config/mailer';

class StaticPagesController {
  index(req, res) {
    const projects = Project.all();

    return res.render('index', { projects });
  }

  contact(req, res) {
    const { name, email, message } = req.body;

    const new_contact_email = {
      from: 'Portifolio.io <noreply@myportifolio.com>',
      to: 'Luisito <luis.geniole@gmail.com>',
      subject: `${name} mandou um oi!`,
      text: `${name} (${email}) está entrando em contato com você:\n\n${message}`,
      html: `<h1>${name} (${email}) está entrando em contato com você:</h1><p>${message}</p>`,
    };

    mailer.sendMail(new_contact_email, (error) => {
      if (error) return console.error(error);

      return console.info('New contact email sent successfully!');
    });

    return res.redirect('/');
  }
}

export default new StaticPagesController();
