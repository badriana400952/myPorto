import { Badge, Button } from "@heroui/react";
import Image from "next/image";

type Props = {
  name: string;
  description: string;
  version: string;
  weeklyDownloads: number;
  stars: number;
  repoUrl: string;
  npmUrl: string;
};

export const NpmPackageCard = ({
  name,
  description,
  version,
  weeklyDownloads,
  stars,
  repoUrl,
  npmUrl,
}: Props) => {
  return (
    <section
      id="package"
      className="p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-all bg-white"
    >
      <div className="flex justify-center">
        <Image
          src="/logos.png"
          alt="Logo"
          width={200}
          height={100}
          className="object-contain"
        />
      </div>
      <div className="space-y-4 mt-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-lg sm:text-xl font-bold">{name}</h3>
          <Badge variant="faded">v{version}</Badge>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
        <div className="flex items-center flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="w-4 h-4" /> {weeklyDownloads.toLocaleString()}{" "}
            weekly downloads
          </span>
          <span className="flex items-center gap-1">
            <p className="w-4 h-4" /> {stars} stars
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="light">
            <a href={npmUrl} target="_blank" rel="noreferrer" className="text-gray-500">
              View on NPM
            </a>
          </Button>
          <Button variant="ghost">
            {name === "badrian-icon" ? <a target="_blank" href="/badrian-icons" className="text-gray-500">Lihat Icons</a> : <a href={repoUrl} target="_blank" rel="noreferrer" className="text-gray-500">
              Source Code
            </a>}

          </Button>
        </div>
      </div>
    </section>
  );
};
