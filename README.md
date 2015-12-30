# lazyAsPromised

Designed for use with Mocha Lazy BDD.

This function ensures that all lazy-loaded objects within a spec are
resolved prior to running the spec's expectations.

## Example Usage

    describe('a promised truth', function() {
    
      subject(function() {
        return Promise.resolve(this.truth);
      });
    
      context('when true', function() {
    
        lazy('truth', function() {
          return true;
        });
    
        it('should be true', function() {
          return lazyAsPromised(this, 'subject').then(({subject}) => {
            expect(subject).to.be.true;
          });
        });
    
      });
    
      context('when false', function() {
    
        lazy('truth', function() {
          return false;
        });
    
        it('should be false', function() {
          return lazyAsPromised(this, 'subject').then(({subject}) => {
            expect(subject).to.be.false;
          });
        });
    
      });
    
    });
    
## License

The MIT License (MIT)

Copyright (c) 2015 Outreach

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
