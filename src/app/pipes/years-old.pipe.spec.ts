import { YearsOldPipe } from './years-old.pipe';

describe('YearsOldPipe', () => {
  it('create an instance', () => {
    const pipe = new YearsOldPipe();
    expect(pipe).toBeTruthy();
  });

  it('', () => {
    const pipe = new YearsOldPipe();
    expect(pipe.transform(45)).toBe('45 years old');
  });
});
