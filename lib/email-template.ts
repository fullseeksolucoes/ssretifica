export function buildWorkWithUsEmailHtml({
  name,
  email,
  phone,
  area,
  fileName,
}: {
  name: string;
  email: string;
  phone: string;
  area: string;
  fileName?: string;
}) {
  const fields = [
    { label: "Nome", value: name },
    { label: "E-mail", value: email },
    { label: "Telefone", value: phone },
    { label: "Área de interesse", value: area },
  ];

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Novo contato - SS Retífica</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family: Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding:40px 0;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px; background-color:#ffffff;">

          <tr>
            <td style="background-color:#111; padding:28px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size:0;">
                    <span style="display:inline-block; width:32px; height:3px; background-color:#fb7409; margin-bottom:12px;"></span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h1 style="margin:0; font-size:18px; color:#ffffff; letter-spacing:-0.02em;">
                      Nova candidatura recebida
                    </h1>
                    <p style="margin:6px 0 0; font-size:13px; color:#888;">
                      Trabalhe Conosco - SS Retífica de Motores
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 4px; font-size:14px; color:#666;">
                Uma nova candidatura foi enviada pelo site.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
                ${fields
                  .filter((f) => f.value)
                  .map(
                    (f) => `
                <tr>
                  <td style="padding:8px 0;">
                    <span style="font-size:12px; color:#999; text-transform:uppercase; letter-spacing:0.05em;">${f.label}</span><br />
                    <span style="font-size:15px; color:#222;">${f.value}</span>
                  </td>
                </tr>`,
                  )
                  .join("")}
              </table>

              ${fileName ? `<p style="margin-top:20px; font-size:14px; color:#222;">Currículo anexado: <strong>${fileName}</strong></p>` : ""}
            </td>
          </tr>

          <tr>
            <td style="border-top:1px solid #eee; padding:24px 32px; text-align:center;">
              <p style="margin:0; font-size:12px; color:#999; line-height:1.6;">
                <strong style="color:#444;">SS Retífica de Motores</strong><br />
                Especialistas em retífica completa de motores nacionais e importados.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
