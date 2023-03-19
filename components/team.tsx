const image = "/event/ok.jpeg";

export default function Team() {
    return (
        <div className="">
            <div className="content">
                <h1 className="h1">
                    Team
                </h1>
                <h2 className="h2">
                    Das sind die Gesichter hinter der DSS, die den Event jedes Jahr mit viel Herzblut und Schweiss organisieren. Damit die DSS das bleibt, was sie ist - ein gut organisierter Event mit familiärer Atmosphäre!
                </h2>
            </div>

            <div className="content-wide">
                <img className="image" src={image} />
            </div>
        </div>
    )
}

