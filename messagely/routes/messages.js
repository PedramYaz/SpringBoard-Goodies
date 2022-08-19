const Router = require("express").Router;
const router = new Router();

const Messages = require("../models/messages");
const { ensureLoggedIn } = require("../middleware/auth");
const ExpressError = require("../expressError");

/** GET /:id - get detail of message.
 *
 * => {message: {id,
 *               body,
 *               sent_at,
 *               read_at,
 *               from_user: {username, first_name, last_name, phone},
 *               to_user: {username, first_name, last_name, phone}}
 *
 * Make sure that the currently-logged-in users is either the to or from user.
 *
 **/

router.get("/:id", ensureLoggedIn, async function (req, res, next) {
  try {
    let username = req.user.username;
    let messageDetails = await Messages.get(req.params.id);

    if (
      messageDetails.to_user.username !== username &&
      messageDetails.from_user.username !== username
    ) {
      throw new ExpressError("Message unavaible to to you", 401);
    }

    return res.json({ message: messageDetails });
  } catch (err) {
    return next(err);
  }
});

/** POST / - post message.
 *
 * {to_username, body} =>
 *   {message: {id, from_username, to_username, body, sent_at}}
 *
 **/

router.post("/", ensureLoggedIn, async function (req, res, next) {
  try {
    let message = await Messages.create({
      from_username: req.user.username,
      to_username: req.body.to_username,
      body: req.body.body,
    });
    return res.json({ message: message });
  } catch (err) {
    return next(err);
  }
});

/** POST/:id/read - mark message as read:
 *
 *  => {message: {id, read_at}}
 *
 * Make sure that the only the intended recipient can mark as read.
 *
 **/

router.post("/:id/read", ensureLoggedIn, async function (req, res, next) {
  try {
    let username = req.user.username;
    let message = await Messages.get(req.params.id);

    if (message.to_user.username !== username) {
      throw new ExpressError("Can't change message status", 401);
    }
    let message = await Messages.markRead(req.params.id);
    return res.json({ message });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
