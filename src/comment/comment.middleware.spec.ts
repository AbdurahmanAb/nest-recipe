import { CommentMiddleware } from './comment.middleware';

describe('CommentMiddleware', () => {
  it('should be defined', () => {
    expect(new CommentMiddleware()).toBeDefined();
  });
});
