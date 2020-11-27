import '../maketodos';

const formsubmit = require('./maketodos');
const {formSubmit} = formsubmit;
const page = global.wxPageInstance;
// mock 网络请求
jest.mock('./maketodos.js');

describe('新增事项表单提交', () => {
  beforeAll( () => {
    jest.spyOn(page, 'formSubmit');
    page.onload();
  });
});