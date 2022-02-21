/* takes pattern and returns botocrat middleware
 * onText middleware looks for regex pattern in incoming "message"
 * if any match, callback() will called,
 * if there's no match, update will conducted by next()
 */

export default (pattern, callback) =>
  (req, res, next) => {
    if (!res.type === "message" || !req.text) return next()
    const matches = req.text.match(pattern)
    return matches
      ? callback(req, res, matches)
      : next()
  }