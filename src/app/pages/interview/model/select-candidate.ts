import { Candidate } from "../../search-engine/model/candidate";
import { InterviewPreCandidate } from "./interview-pre-candidate";
import { Key } from "./key";

export class SelectCandidate {
  constructor(
    public key: Key,
    public candidate: Candidate,
    public pre_interview: InterviewPreCandidate,
  ) {}
}


