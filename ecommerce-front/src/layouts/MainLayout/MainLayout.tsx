import { Container } from "react-bootstrap";
import style from "./styles.module.css";
import Header from "../../components/common/Header/Header";
const { container, wrapper } = style;

export default function MainLayout() {
  return (
    <Container className={container}>
        <Header />
      <div className={wrapper}></div>
    </Container>
  );
}
