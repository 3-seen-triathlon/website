import { IncomingWebhook } from '@slack/webhook';
const url = process.env.SLACK_WEBHOOK_URL as string;
const webhook = new IncomingWebhook(url);

export default function handler(req: any, res: any) {
  const body = req.body

  console.log('body: ', body)

  if (!body.first || !body.last) {
    return res.status(400).json({ data: 'First or last name not found' })
  }

  (async () => {
    await webhook.send({
      text: '',
    });
  })();

  res.status(200).json({ data: `${body.first} ${body.last}` });
}
