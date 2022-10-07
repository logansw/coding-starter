import "css/global/Global.css";

import { Route, Routes as RoutesImport, BrowserRouter } from "react-router-dom";
import EXAMPLE_SUBMISSIONS, { Submission } from "ExampleSubmissions";
import styles from "css/App.module.css";
import getLocalStorage from './utils/local-storage/getLocalStorage';
import setLocalStorage from './utils/local-storage/setLocalStorage';
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const USER_ID = 0;
let remainingSubmissions = EXAMPLE_SUBMISSIONS;

// EXAMPLE_SUBMISSION.filter(submission => submission != )

function VotePage(): JSX.Element {
  const [idx, setIdx] = useState(0);
  const [curSubmission, setCurSubmission] = useState(remainingSubmissions[idx]);

  function Vote(user: number, submission: number, up: boolean): void {
    let votes: any = getLocalStorage<Object[]>("Votes");
    if (votes == null) {
      setLocalStorage("Votes", [{user: user, submission: submission, up: up}]);
    } else {
      console.log(votes);
      votes.push({user: user, submission: submission, up: up});
    }
    setLocalStorage("Votes", votes);
    setIdx(idx + 1);
  }

  return (
    <div className={styles.container}>
      <div className={styles.name}>
        {curSubmission["name"]}
      </div>
      <div className={styles.images}>
        <img src={curSubmission["assets"][0]["src"]} />
        <img src={curSubmission["assets"][1]["src"]} />
        <img src={curSubmission["assets"][2]["src"]} />
      </div>
      <button onClick={() => Vote(USER_ID, idx, false)}>Downvote</button>
      <button onClick={() => Vote(USER_ID, idx, true)}>Upvote</button>
    </div>
  );
}

function App() {
  let votes: any = getLocalStorage<Object[]>("Votes");
  votes = votes?.filter(vote => vote["user"] === USER_ID);
  remainingSubmissions = EXAMPLE_SUBMISSIONS.filter(submission => votes?.find(vote => vote.submission == submission.id) === null);

  return (
    <BrowserRouter>
      <RoutesImport>
        <Route path="/" element={<VotePage />} />
      </RoutesImport>
    </BrowserRouter>
  );
}

export default App;

/*

Votes
  User
  Submission
  Upvote/Downvote

*/