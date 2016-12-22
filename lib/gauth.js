'use strict'

const JWT = require('googleapis').auth.JWT

const defaults = {
  scope: null,
  cert: {
    client_email: null,
    private_key: null
  }
}

const Gauth = module.exports = function (opts) {
  if (!(this instanceof Gauth)) {
    return new Gauth(opts)
  }

  this.opts = Object.assign({}, defaults, opts)
  this.connected = false
  this.client = null
}

Gauth.prototype.auth = function (done) {
  if (this.connected) {
    return done(null, this.client)
  }

  const scope = this.opts.scope
  const key = this.opts.cert.private_key
  const email = this.opts.cert.client_email
  const client = new JWT(email, null, key, scope, null)

  client.authorize((err) => {
    if (err) return done(err)

    this.client = client
    this.connected = true

    done(null, this.client)
  })
}
