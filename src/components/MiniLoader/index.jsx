import { Bars } from "react-loader-spinner";
import {Container} from './styles/MiniLoader'

function MiniLoader() {
  return (
    <Container>
    <Bars
      height="80"
      width="80"
      color="#d3d3d3"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
    </Container>
  );
}


export default MiniLoader
