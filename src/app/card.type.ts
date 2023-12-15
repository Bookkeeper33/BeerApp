import { MouseEventHandler } from "react";

export type Card = {
    id: number;
    name: string;
    image: string | undefined;
    abv: string;
    tagline: string;
    btnText: string;
    handler: MouseEventHandler<HTMLButtonElement>;
};
