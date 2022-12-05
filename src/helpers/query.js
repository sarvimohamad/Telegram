import axios from "axios";
import { configs } from "../configs/configs";

export const query = ({ uri, ...other }) => {
  axios({
    url: configs.BASE_URL + uri,
    ...other,
  });
};
