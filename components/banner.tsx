import { XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie'


export default function Banner() {
  const [banner, setBanner] = useState(false);
  const [cookie, setCookie] = useCookies(["banner"]);

  const removeBanner = () => {
    setCookie("banner", JSON.stringify({ bannerClicked: true }), {
      path: '/',
      maxAge: 3600 * 24 * 7, // expires after 1 week
      sameSite: true,
    });
    window.location.reload();
  };

  // https://www.benmvp.com/blog/handling-react-server-mismatch-error/
  useEffect(() => {
    if (!cookie.banner) {
      setBanner(true);
    };
  });

  return (
    <div className={banner ? 'relative background' : 'hidden'}>
      <div className="mx-auto max-w-5xl py-2 px-3 sm:px-6 lg:px-8 flex justify-between items-center">
        <p className="font-medium text-white">
          <span className="">Die nächste DSS findet am 20.08.2023 statt!</span>
          <span className="block sm:ml-2 sm:inline-block">
            <a href="https://onreg.datasport.com/dreiseenstafette-huettwilen-2023" target="_blank" className="font-bold text-white hover:underline hover:underline-offset-4">
              Anmelden
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </span>
        </p>
        <button
          type="button"
          className="flex p-1 rounded-md hover:bg-gray-100/20 focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => removeBanner()}
        >
          <span className="sr-only">Schliessen</span>
          <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
