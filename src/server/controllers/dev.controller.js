import Dev from '../models/dev.model';
const uuidv4 = require('uuid/v4');
import sanitizeHtml from 'sanitize-html';

/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
export function getDevs(req, res) {
  Dev.find().sort('-dateAdded').exec((err, devs) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ devs });
  });
}

/**
 * Save a dev
 * @param req
 * @param res
 * @returns void
 */
export function addDev(req, res) {
  if (!req.body.dev.name || !req.body.dev.email || !req.body.dev.desc) {
    res.status(403).end();
  }

  const newDev = new Dev(req.body.post);

  // Let's sanitize inputs
  newDev.email = sanitizeHtml(newDev.email);
  newDev.name = sanitizeHtml(newDev.name);
  newDev.desc = sanitizeHtml(newDev.desc);
  newDev.fees = sanitizeHtml(newDev.fees);
  newDev.status = sanitizeHtml(newDev.status);
  newDev.image = sanitizeHtml(newDev.image);
  newDev.devid = uuidv4();
  newDev.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ dev: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getDev(req, res) {
  Dev.findOne({ devid: req.params.devid }).exec((err, dev) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ dev });
  });
}

/**
 * Delete a post
 * @param req
 * @param res
 * @returns void
 */
export function deleteDev(req, res) {
  Dev.findOne({ devid: req.params.devid }).exec((err, dev) => {
    if (err) {
      res.status(500).send(err);
    }

    dev.remove(() => {
      res.status(200).end();
    });
  });
}
