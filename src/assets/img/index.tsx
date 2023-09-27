import logo from "./logo.png";
import salmon from "./salmon.jpg";
import salmon_sm from "./salmon_sm.jpg";
import logo_sm from "./logo_sm.png";

interface Img {
  [key: string]: string
}

export const assets: Img = {
  logo,
  logo_sm,
  salmon,
  salmon_sm,
};
