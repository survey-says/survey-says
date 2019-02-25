import { ssContext } from "./ss.context";

const ssBaseContext = 'survey_says';

export const ssClient = {
  findAll() {
    return ssContext.get(ssBaseContext);
  },
  findById(id: number) {
    return ssContext.get(ssBaseContext + `/${id}`);
  },
  findByUsernameAndPassword(credentials: {}) {
    return ssContext.post(ssBaseContext + '/login', credentials);
  }
}