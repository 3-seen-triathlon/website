import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function CookieBanner() {
    const [banner, setBanner] = useState(false);
    const [cookie, setCookie] = useCookies(["cookies"]);

    const removeBanner = () => {
        setCookie("cookies", JSON.stringify({ bannerClicked: true }), {
            path: '/',
            maxAge: 3600 * 24 * 7, // expires after 1 week
            sameSite: true,
        });
        window.location.reload();
    };

    // https://www.benmvp.com/blog/handling-react-server-mismatch-error/
    useEffect(() => {
        if (!cookie.cookies) {
            setBanner(true);
        };
    });

    return (
        <div className={banner ? "fixed inset-x-0 bottom-0 flex flex-col justify-between gap-x-8 gap-y-4 bg-white p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8 z-10" : 'hidden'}>
            <p className="max-w-4xl text-sm leading-6 text-gray-900">
                Unsere Website verwendet keine Tracking Technologien. Es werden nur technisch notwendige Cookies eingesetzt um diesen Cookie- sowie den Teilnahme Reminder Banner beim ersten Besuch anzuzeigen. Mehr dazu in unserer {' '}
                <a href="/2023-09-01_Datenschutzerklaerung_Dreiseenstafette.pdf" className="font-semibold text-blue-600" target="_blank">
                    Datenschutzerklärung
                </a>
                .
            </p>
            <div className="flex flex-none items-center gap-x-5">
                <button
                    type="button"
                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    onClick={() => removeBanner()}
                >
                    Okay
                </button>
            </div>
        </div>
    )
}
