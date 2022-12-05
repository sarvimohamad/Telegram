import { useNavigate } from "react-router-dom";

export const useNavigation  = (initial) => {

    const navigation = useNavigate(initial);

    return navigation;
}