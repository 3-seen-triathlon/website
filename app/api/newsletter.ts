import { IncomingWebhook } from '@slack/webhook';

const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL as string);

const spam = [
    "data-backup-store",
    "sales",
]

export default function handler(req: any, res: any) {
    const body = req.body

    if (!body.email) {
        res.redirect(302, '/404')
        return
    }

    const email = String(body.email)

    spam.forEach((item: string) => {
        if (email.toLowerCase().includes(item)) {
            res.status(418).json({ text: `Nice try but not interested ❌` })
            return
        }
    })

    webhook.send({
        text: `Anmeldung für den Newsletter: ${email}`,
    })

    res.redirect(302, '/')
}
