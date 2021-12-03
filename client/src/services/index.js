import axios from "axios";

export const BASE_URL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/quizzes`
export const confirguration = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  }
}

export const grabQuestions = async () => {
  const res = await axios.get(BASE_URL, confirguration);
  return res.data.records;
}

export const postQuestion = async (body) => {
  const res = await axios.post(BASE_URL, { fields: body }, confirguration);
  return res.data;
}