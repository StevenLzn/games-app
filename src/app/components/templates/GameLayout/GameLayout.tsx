import StyledComponentsRegistry from "@/lib/styled-components/registry";
import { GameMenu } from "../../organisms/GameMenu/GameMenu";
import styles from "./GameLayout.module.css";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const GameLayout = ({ children, title }: LayoutProps) => {
  return (
    <StyledComponentsRegistry>
      <div>
        <GameMenu title={title} />
        <div className={styles.gameContainer}>{children}</div>
      </div>
    </StyledComponentsRegistry>
  );
};

export default GameLayout;
