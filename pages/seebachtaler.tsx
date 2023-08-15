import type { NextPage } from "next";
import { ArrowSmallRightIcon, MapIcon } from "@heroicons/react/24/outline";
import Layout from "../components/layout";
import Image from "next/legacy/image";
import Infos, { InfoPoint } from "../components/infos";

const Lauf: NextPage = () => {
    return (
        <Layout>
            <div className="content">
                <h1 className="h1">Diä schnellste Seebachtaler Chind</h1>
                <h2 className="h2 width">
                    Die jüngste Kategorie der DSS mit ihrem Debut im Jahr 2022.
                </h2>
            </div>

            <div className="content-wide">
                <div className="relative w-full h-60 sm:h-80 md:h-[30rem]">
                    <Image
                        objectFit="cover"
                        objectPosition={"center"}
                        layout={"fill"}
                        className="image"
                        src={"/fotos/slider/1.jpg"}
                        alt="People working on laptops"
                    />
                </div>
            </div>

            <div className="content rounded-3xl bg-gray-50 p-8 grid md:grid-cols-2 items-center">
                <div className="mb-12 md:mb-0">
                    <h1 className="h2">Kategoriensponsor</h1>
                    <p className="p">
                        Der Spielwaren- und Geschenkladen in Stein am Rhein. Spielsachen, die
                        Sinn machen.
                    </p>
                    <a
                        href="https://wundernas.ch"
                        className="button-inverse group"
                        target="_blank"
                    >
                        <ArrowSmallRightIcon className="mr-2 h-5 w-5 group-hover:text-white" />
                        zur Website
                    </a>
                </div>

                <img
                    className="md:mx-auto h-32 w-auto"
                    src={"/logo/dss23/wundernas.svg"}
                    alt="Wundernas"
                />
            </div>

            <div className="content">
                <h3 className="h4">Infos</h3>
                <p className="p">
                    Diä schnellste Seebachtaler Chind ist ein Format von VisanaSprint, bei
                    dem Kinder und Jugendliche zwischen 5 und 15 Jahren im
                    Ausscheidungsverfahren gegeneinander antreten (Jg. 2008 - 2018). Die
                    Distanzen von 50 - 80 Meter werden nach Jahrgang kategorisiert. Jeder
                    Jahrgang bildet eine eigene Kategorie. Knaben und Mädchen laufen
                    getrennt und werden getrennt rangiert. Die 3 schnellsten jeder
                    Kategorie qualifizieren sich für den Finallauf im Zielbereich der DSS.
                </p>
                <p className="p">
                    Teilnahmeberechtigt sind Kinder aller Gemeinden, welche die DSS
                    durchquert (Ueslingen-Buch, Hüttwilen, Nussbaumen, Trütlikon, Horben,
                    Stammheim, Warth-Weiningen).
                </p>
                <p className="p">
                    Zu gewinnen gibt es neben coolen Preisen auch die Teilnahme am
                    Thurgauer Final im Folgejahr! Bei einem Sieg durch ein auswärtiges
                    Kind qualifizieren sich sowohl dieses, wie auch das schnellste
                    Hüttwiler Kind der jeweiligen Kategorie.
                </p>
                <p className="p">
                    Der Startgeldbeitrag beträgt 5.- CHF und wird bei der Abgabe der
                    Startnummer eingezogen.
                </p>
                <p className="p">
                    Eine Bestätigung der Anmeldung erfolgt jeweils in der ersten Woche des
                    darauffolgenden Monates. Die Startinformationen werden am Freitag 18.
                    August per Mail verschickt. Das Anmeldefenster online schliesst am 18.
                    August. Nachmeldungen können am Sonntag 20. August am Infopoint der
                    Dreiseenstafette von 10.00-11.00 Uhr für einen Aufpreis von 5.-
                    vorgenommen werden.
                </p>

                <p className="p">
                    Mehr Informationen zum Format findest Du auf der Website von{" "}
                    <a
                        href="https://visanasprint.ch/de/"
                        className="link"
                        target="_blank"
                    >
                        Visana Sprint
                    </a>
                    .
                </p>

                <div className="flex mt-6">
                    <a
                        href="/dokumente/infos_seebachtaler.docx"
                        className="button group mr-4"
                        target="_blank"
                    >
                        <ArrowSmallRightIcon className="mr-2 h-5 w-5 group-hover:text-white" />
                        Startinformationen
                    </a>

                    <a
                        href="/dokumente/die-schnellste-seebachtaler-chinde.pdf"
                        className="button-inverse group mr-4"
                        target="_blank"
                    >
                        <ArrowSmallRightIcon className="mr-2 h-5 w-5 group-hover:text-white" />
                        Flyer
                    </a>

                    <a
                        href="https://visanasprint.ch/de/wettkaempfe/startmoeglichkeiten/?id=a21aa-3lmgw1-lex221xx-1-ley971ef-h9q"
                        className="button-inverse group"
                        target="_blank"
                    >
                        <ArrowSmallRightIcon className="mr-2 h-5 w-5 group-hover:text-white" />
                        Anmelden
                    </a>
                </div>
            </div>

            <div className="content">
                <h3 className="h4">Ranglisten</h3>
                <ul className="list-disc list-inside">
                    <li>
                        <a
                            href="/dokumente/2022_rangliste_seebachtaler.pdf"
                            target="_blank"
                        >
                            <span className="link">Austragung 2022</span>
                        </a>
                    </li>
                </ul>
            </div>
        </Layout>
    );
};

export default Lauf;
