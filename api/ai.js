export default async function handler(req, res) {
    const text = req.query.text || "";
    const result = "API werkt! Je stuurde: " + text;
    res.status(200).json({ result });
}
