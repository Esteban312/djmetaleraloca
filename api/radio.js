export default async function handler(req, res) {
  const streamUrl = "http://uk18freenew.listen2myradio.com:7561/;";

  try {
    const response = await fetch(streamUrl);

    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Access-Control-Allow-Origin", "*");

    response.body.pipe(res);

  } catch (error) {
    res.status(500).json({ error: "Stream no disponible" });
  }
}
