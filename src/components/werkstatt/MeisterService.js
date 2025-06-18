import { api } from "../utils/api";

export async function getWerkstatt() {
  try {
    const result = await api.get("/werkstatt/get-all-werkstatt");
    console.log("The result ", result);
    console.log("The result ", result.data);
    return result.data;
  } catch (error) {
    throw error;
  }
}

export async function findWerkstattMeister (searchParams) {
  try {
    const queryParams = new URLSearchParams(searchParams);

    const result = await api.get(
      `/veterinarians/search-veterinarian?${queryParams}`
    );
    return result.data;
  } catch (error) {
    throw error;
  }
}
