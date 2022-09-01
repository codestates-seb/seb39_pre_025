import { rest } from 'msw';

// const users = [];
const questions = [
  { questionId: 1, title: '제목1', content: '테스트 목api 목데이터' },
];

export const handlers = [
  // 질문글 목록
  rest.get('/questions', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(questions));
  }),

  // 질문글 추가
  rest.post('/questions', (req, res, ctx) => {
    questions.push(req.body.data);
    return res(ctx.status(201));
  }),

  // 질문글 수정
  rest.put('/questions/:questionId', (req, res, ctx) => {
    questions.push(req.body.data);
    return res(ctx.status(201));
  }),
];
