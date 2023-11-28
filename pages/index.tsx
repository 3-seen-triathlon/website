import type { NextPage } from "next";
import Categories from "../components/categories";
import Layout from "../components/layout";
import TV from "../components/tv";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const fallbackImage = "/event/ziel.jpg";

const Home: NextPage = () => {
    return (
        <Layout>
            <div className="relative content-wide">
                <video
                    autoPlay
                    loop={true}
                    muted
                    className="w-full image object-cover"
                    poster={fallbackImage}
                >
                    <source
                        src="https://tinyrocket.fra1.digitaloceanspaces.com/background_video.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute bottom-0 top-0 left-0 right-0 text-center grid justify-center items-center">
                    {/*<p className="font-bold text-5xl sm:text-7xl md:text-9xl text-white">20.08.2023</p>*/}
                </div>
            </div>

            <div className="content">
                <h2 className="h2 italic">
                    <b>2024 wird die Dreiseenstafette leider nicht stattfinden.</b> Die
                    Gründe dafür sind divers: von mangelnden Helfereinsätzen über
                    Ideen zu Neuausrichtungen bis zum Überdenken der Organisationsstruktur
                    - jedoch sind es keine unlösbaren Probleme. Wir werden mit einem
                    riesigen Kracher zurück sein und du kannst dir schon jetzt den <b>17.08.2025</b> notieren!
                </h2>
            </div>

            <Categories />

            <div className="content">
                <TV />
            </div>
        </Layout>
    );
};

export default Home;
