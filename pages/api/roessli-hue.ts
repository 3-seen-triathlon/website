import { IncomingWebhook } from '@slack/webhook';
import { log } from 'next-axiom';

const url = process.env.SLACK_WEBHOOK_URL as string;
const webhook = new IncomingWebhook(url);

const stringify = (body: any) => {
    return `Rössli:
Vorname: ${body.vorname_roessli}
Nachname: ${body.nachname_roessli}
Geschlecht: ${body.geschlecht_roessli}

Reiter:in:
Vorname: ${body.vorname_reiter}
Nachname: ${body.nachname_reiter}
Geschlecht: ${body.geschlecht_reiter}

Angaben:
Wohnort: ${body.wohnort}
Email: ${body.email}`
};

export default function handler(req: any, res: any) {
    const body = req.body

    if (!body.vorname_reiter
        || !body.nachname_reiter
        || !body.geschlecht_reiter
        || !body.vorname_roessli
        || !body.nachname_roessli
        || !body.geschlecht_roessli
        || !body.wohnort
        || !body.email) {
        log.debug('form is not complete', body)
        res.redirect(302, '/404')
    }

    webhook.send({
        text: `Anmeldung für 'S'schnellste Rössli Hü'
${stringify(body)}`,
    }).then(() => {
        const params = new URLSearchParams({
            titel: 'Anmeldung erfolgreich 🎉',
            text: `Du (${body.vorname} ${body.nachname}) bist für "S'schnellste Rössli Hü" angemeldet! Cool bist du mit dabei und wir freuen uns, dich an der DSS begrüssen zu dürfen 😊 Bis dann!`,
        }).toString();
        res.redirect(302, `/success?${params}`)
    }).catch((err) => {
        log.debug('failed to send message to slack channel', err)
        const params = new URLSearchParams({
            handler: 'seebachtaler',
            error: err,
        }).toString();
        res.redirect(302, `/500?${params}`)
    });
}
