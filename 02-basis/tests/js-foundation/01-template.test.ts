import { emailTemplate } from '../../src/js-foundation/01-template';

describe('Test in 01-template.ts', () => {
  it('emailtemplate should contain a greeting', () => {
    expect(emailTemplate).toContain('Hello, ');
  });

  it('emailTemplate should contain {{name}} and {{orderId}}', () => {
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toContain('{{orderId}}');
  });
});
