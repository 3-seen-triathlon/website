import { NextResponse, NextRequest } from "next/server";
import mailchimp from '@mailchimp/mailchimp_marketing';
import crypto from 'crypto';

mailchimp.setConfig({
	apiKey: process.env.NEXT_MAILCHIMP as string,
	server: "us16",
});

export async function POST(req: NextRequest) {
	const list_id = process.env.NEXT_MAILCHIMP_LIST as string;
	const data = await req.json()
	const email = (data.email as string).toLowerCase()
	const subscriber_hash = crypto.createHash('md5').update(email).digest('hex')

	try {
		await mailchimp.lists.setListMember(
			list_id,
			subscriber_hash,
			{
				"email_address": email,
				"status": "subscribed",
				"status_if_new": "subscribed",
			}
		);

		return NextResponse.json(
			{ error: '' },
			{ status: 201 }
		);
	} catch (error: any) {
		return NextResponse.json(
			{ error: error.message || error.toString() },
			{ status: 500 }
		);
	}
}
