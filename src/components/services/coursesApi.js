import axios from 'axios';

const TOKENS =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmNDEyM2NhNC1kOTc1LTRmODMtODU1Yi0wZjdmNzFiNWIzMWUiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg4NjM2MjgsImV4cCI6MTY3OTc2MzYyOH0.mwvNPSRjnKAGKRCZH029KP8srW56oSLaLlrCNLvKbQc';
const BASE_URLS = 'https://api.wisey.app/api/v1/core/preview-courses';

export async function getCourses() {
  const options = {
    headers: {
      Authorization: `Bearer ${TOKENS}`,
      'Content-Type': 'application/json',
    },
  };
  const respons = await axios.get(`${BASE_URLS}`, options);
  return respons.data.courses;
}

export async function getCoursById(
  courseId = '352be3c6-848b-4c19-9e7d-54fe68fef183'
) {
  const options = {
    headers: {
      Authorization: `Bearer ${TOKENS}`,
      'Content-Type': 'application/json',
    },
  };

  const respons = await axios.get(`${BASE_URLS}/${courseId}`, options);
  return respons.data;
}
