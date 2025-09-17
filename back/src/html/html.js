export default function Html (activationLink) {
  return `
      <!DOCTYPE html>
      <html lang="pt-BR">
        <head>
          <meta charset="UTF-8" />
          <title>Ative sua conta</title>
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f7; margin: 0; padding: 0;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">
                  <tr>
                    <td style="background-color: #4cafef; padding: 20px; text-align: center; color: #ffffff;">
                      <h1 style="margin: 0; font-size: 24px;">Ative sua conta</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 30px; color: #333333; font-size: 16px; line-height: 1.6;">
                      <p>Olá,</p>
                      <p>Obrigado por se registrar! Clique no botão abaixo para ativar sua conta:</p>
                      <div style="text-align: center; margin: 30px 0;">
                        <a href="${activationLink}" target="_blank" 
                           style="background-color: #4cafef; color: #ffffff; padding: 14px 28px; 
                                  text-decoration: none; border-radius: 6px; font-size: 16px; 
                                  font-weight: bold; display: inline-block;">
                          Ativar Conta
                        </a>
                      </div>
                      <p>Se você não criou esta conta, pode ignorar este e-mail.</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color: #f4f4f7; text-align: center; padding: 15px; font-size: 12px; color: #777777;">
                      <p>&copy; 2025 ShowSmart. Todos os direitos reservados.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;
};
