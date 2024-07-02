import { getBaseUrl } from "@/utils/getUrl";
import axios from "axios";

export const BASE_URL = `${getBaseUrl()}/api`;

export const axiosClient = axios.create({ baseURL: BASE_URL });
