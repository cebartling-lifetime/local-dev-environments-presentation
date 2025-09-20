// Core & theme CSS
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/league.css"; // swap theme: league.css, moon.css, etc.
// (optional) code highlight theme
import "reveal.js/plugin/highlight/monokai.css";

// Your own tweaks (optional)
import "./styles.css";

import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";
import Notes from "reveal.js/plugin/notes/notes.esm.js";
import Search from "reveal.js/plugin/search/search.esm.js";
import Zoom from "reveal.js/plugin/zoom/zoom.esm.js";

const deck = new Reveal({
  hash: true,
  slideNumber: true,
  plugins: [Markdown, Highlight, Notes, Search, Zoom],
});

deck.initialize({
  controls: true,
  progress: true,
  center: true,
  transition: "convex", // none/fade/slide/convex/concave/zoom
});
