import { expect } from 'chai';
import { TestService } from '../src/test-service';

describe('TestService', () => {
  it('should say Hello World', () => {
    const result = new TestService().test();
    expect(result).to.equal('Hello world!');
  });
});
