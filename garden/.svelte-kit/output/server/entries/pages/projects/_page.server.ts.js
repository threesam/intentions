import { b as fetchProjects } from "../../../chunks/client.js";
const load = async () => {
  const projects = await fetchProjects();
  return { projects };
};
export {
  load
};
