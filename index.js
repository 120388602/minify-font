const Fontmin = require("fontmin");
const text = require("./chars");

const fontmin = new Fontmin()
  .src("./fonts/SimSun.ttf")
  .use(Fontmin.glyph({ text }))
  .dest("dest");

fontmin.run(function (err, files) {
  if (err) console.log(err);
});
