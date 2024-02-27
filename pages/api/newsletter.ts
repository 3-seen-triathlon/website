import { IncomingWebhook } from '@slack/webhook';

const url = process.env.SLACK_WEBHOOK_URL as string;
const webhook = new IncomingWebhook(url);

const stringify = (body: any) => {
    return `Mail: ${body.email}`
};

export default function handler(req: any, res: any) {
    const body = req.body

    if (!body.email) {
        res.redirect(302, '/404')
    }

    // some spam checks
    if (String(body.email).toLowerCase().includes("data-backup-store")) {
        res.status(418).json({ text: `Nice try but not interested ❌` })
        return
    }

    webhook.send({
        text: `Anmeldung für den Newsletter: ${stringify(body)}`,
    })

    res.redirect(302, '/')
}
