import { IncomingWebhook } from '@slack/webhook';
const url = process.env.SLACK_WEBHOOK_URL as string;
const webhook = new IncomingWebhook(url);

const stringify = (body: any) => {
  return `Vorname: ${body.vorname}
Nachname: ${body.nachname}
Jahrgang: ${body.jahrgang}
Wohnort: ${body.wohnort}
Schule: ${body.schule}
Klasse: ${body.klasse}
Email: ${body.email}
Geschlecht: ${body.geschlecht}`
};

export default function handler(req: any, res: any) {
  const body = req.body

  if (!body.vorname
    || !body.nachname
    || !body.jahrgang
    || !body.wohnort
    || !body.schule
    || !body.klasse
    || !body.email
    || !body.geschlecht) {
    return res.status(400).json({ error: 'Formular nicht komplett ausgefüllt - Anmeldung nicht vollständig' })
  }

  webhook.send({
    text: `Anmeldung für 'Diä schnellste Seebachtaler:inne': ${stringify(body)}`,
  }).then(() => {
    const params = new URLSearchParams(body).toString();
    res.redirect(307, `/success?${params}`)
  }).catch((err) => {
    console.log('failed to send message to slack channel: ', err)
    const params = new URLSearchParams({
      handler: 'seebachtaler',
      error: err,
    }).toString();
    res.redirect(307, `/500?${params}`)
  });
}
