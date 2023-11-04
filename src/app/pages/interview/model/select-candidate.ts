import { Candidate } from "../../search-engine/model/candidate";
import { InterviewPreCandidate } from "./interview-pre-candidate";

export class SelectCandidate {
  constructor(
    public key: Key,
    public candidate: Candidate,
    public pre_interview: InterviewPreCandidate,
  ) {}
}

export class Key {
  constructor(
    public kind: string,
    public id: number,
  ) {}
}
