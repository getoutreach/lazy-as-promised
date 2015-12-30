'use strict';

/**
 * lazyAsPromised
 *
 * Designed for use with Mocha Lazy BDD.
 *
 * This function ensures that all lazy-loaded objects within a spec are
 * resolved prior to running the spec's expectations.
 *
 * Example Usage:
 *
 *     describe('a promised truth', function() {
 *       subject(function() {
 *         return Promise.resolve(this.truth);
 *       });
 *       context('when true', function() {
 *         lazy('truth', function() {
 *           return true;
 *         });
 *         it('should be true', function() {
 *           return lazyAsPromised(this, 'subject').then(({subject}) => {
 *             expect(subject).to.be.true;
 *           });
 *         });
 *       });
 *       context('when false', function() {
 *         lazy('truth', function() {
 *           return false;
 *         });
 *         it('should be false', function() {
 *           return lazyAsPromised(this, 'subject').then(({subject}) => {
 *             expect(subject).to.be.false;
 *           });
 *         });
 *       });
 *     });
 *
 */
module.exports = function(promisedObject) {
  const lazyAttributes = [];
  for(let i = 1; i < arguments.length; i++) {
    let lazyAttribute = arguments[i];
    lazyAttributes.push(lazyAttribute);
  }
  return new Promise(function(resolve, reject) {
    const promises = lazyAttributes.map(function(lazyAttribute) {
      return promisedObject[lazyAttribute];
    });
    return Promise.all(promises).then(function(resolvedPromises) {
      const resolvedObject = {};
      for(let i = 0; i < resolvedPromises.length; i++) {
        let lazyAttribute = lazyAttributes[i];
        resolvedObject[lazyAttribute] = resolvedPromises[i];
      }
      return resolve(resolvedObject);
    }, reject);
  });
};
