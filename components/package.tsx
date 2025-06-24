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
      className="p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
    >
      <div>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/810px-Npm-logo.svg.png"
          alt="sss"
        />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{name}</h3>
          <Badge variant="faded">v{version}</Badge>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="w-4 h-4" /> {weeklyDownloads.toLocaleString()}{" "}
            downloads
          </span>
          <span className="flex items-center gap-1">
            <p className="w-4 h-4" /> {stars} stars
          </span>
        </div>
        <div className="flex gap-2">
          <Button variant="light">
            <a href={npmUrl} target="_blank" rel="noreferrer">
              View on NPM
            </a>
          </Button>
          <Button variant="ghost">
            <a href={repoUrl} target="_blank" rel="noreferrer">
              Source Code
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
