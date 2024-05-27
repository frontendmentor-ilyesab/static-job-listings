import jobData from "../data.json";

type State = typeof jobData;
type Job = State[number];

export {jobData};
export type {State, Job}