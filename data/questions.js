import { Question } from "../models/Question.js";
import { data } from "./data.js";

export const questions = data.map( q => new Question(q.question, q.choices, q.answer))

