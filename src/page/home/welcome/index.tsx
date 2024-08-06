import { Await, useLoaderData } from "react-router-dom";
import React from "react";

interface Question {
  id: number;
  title: string;
}

export async function loader() {
  //   卡住2秒
  const a = new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "问题1" },
        { id: 2, title: "问题2" },
        { id: 3, title: "问题3" },
      ]);
    }, 2000);
  });

  return { questions: a };
}

function Index() {
  const { questions } = useLoaderData() as { questions: Array<Question> };
  return (
    <div>
      <h1>欢迎来到首页</h1>
      <p>这是首页的欢迎页面</p>

      <React.Suspense fallback={<div>加载中...</div>}>
        <Await resolve={questions}>
          {(questions) => {
            return (
              <ul>
                {questions.map((question: Question) => (
                  <li key={question.id}>{question.title}</li>
                ))}
              </ul>
            );
          }}
        </Await>
      </React.Suspense>
    </div>
  );
}

export default Index;
