import { useCurrentDate} from "./useCurrentDate";
import { ClockContainer } from "./styled";

export const Clock = () => {
 const date =  useCurrentDate();

 return (
  <ClockContainer>
    Dzisiaj jest 
    {" "}
    {useCurrentDate(date)}
    </ClockContainer>
);
};
