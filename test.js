const request = require('supertest');
const app = require('./app');

describe('POST /tasks', () => {
  it('should add a new task', (done) => {
    const newTask = { title: 'New Task' };

    request(app)
      .post('/tasks')
      .send(newTask)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);

        const { id, title, completed } = res.body;
        // You may add more assertions based on your requirements
        if (!id || title !== newTask.title || completed !== false) {
          return done(new Error('Invalid response body'));
        }

        done();
      });
  });

  it('should return 400 if title is missing', (done) => {
    request(app)
      .post('/tasks')
      .send({})
      .expect(400, done);
  });
});

