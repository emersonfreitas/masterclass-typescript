// definir a estrutura do objeto to
interface IMailTo {
  name: string;
  email: string;
}
// definir a estrutura do objeto para message
interface ImailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}
// definir um objeto informando o tipo de cada parâmetro da função sendMail
interface IMessageDTO {
  to: IMailTo;
  message: ImailMessage;
}

// definir o método obrigatório na nossa classe EmailService
interface IEmailService {
  sendMail(request: IMessageDTO): void;
}
// classe EmailService implementado a interface IEmailService
class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default EmailService;