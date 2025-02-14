import BuildError from './BuildError';
import { DiagnosticTarget } from '../diagnostics.js';

describe('is()', () => {
  it('returns false if error is not a BuildError', () =>
    expect(BuildError.is(new Error())).toBe(false));

  it('returns true if error is a BuildError', () =>
    expect(BuildError.is(new BuildError())).toBe(true));
});

describe('toDiagnostic()', () => {
  it('returns an error diagnostic', () =>
    expect(new BuildError('uh oh!').toDiagnostic()).toMatchSnapshot());

  it('returns an error diagnostic with a target set', () => {
    const err = new BuildError('uh oh!');
    err.target = DiagnosticTarget.Companion;
    expect(err.toDiagnostic()).toMatchSnapshot();
  });
});
