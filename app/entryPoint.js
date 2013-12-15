

var self = module.exports = {
  app_start: function() {
    self.log.info("Entry point invoked");
  }
};

module.exports.__module =  {
  properties: {
    log: 'log'
  },
  provides: 'app_start'
};