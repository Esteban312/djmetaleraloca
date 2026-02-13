import http from "http";

export default function handler(req, res) {
  const streamUrl = "http://uk18freenew.listen2myradio.com:7561/";

  res.setHeader("Content-Type", "audio/mpeg");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const request = http.get(streamUrl, (stream) => {
    stream.pipe(res);
  });

  request.on("error", () => {
    res.status(500).end("Error conectando al stream");
  });

  req.on("close", () => {
    request.destroy();
  });
}
