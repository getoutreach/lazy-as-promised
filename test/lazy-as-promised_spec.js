const expect = require('chai').expect;
const lazyAsPromised = require('../lib/lazy-as-promised');

describe('lazy-as-promised', function() {

  describe('example usage', function() {

     describe('a promised truth', function() {

       subject(function() {
         return Promise.resolve(this.truth);
       });

       context('when true', function() {

         lazy('truth', function() {
           return true;
         });

         it('should be true', function() {
           return lazyAsPromised(this, 'subject').then((_) => {
             expect(_.subject).to.be.true;
           });
         });

       });

       context('when false', function() {

         lazy('truth', function() {
           return false;
         });

         it('should be false', function() {
           return lazyAsPromised(this, 'subject').then((_) => {
             expect(_.subject).to.be.false;
           });
         });

       });

     });

  });

});
