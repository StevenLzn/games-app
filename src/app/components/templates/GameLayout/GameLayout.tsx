import { GameMenu } from "../../organisms/GameMenu/GameMenu";
import styles from "./GameLayout.module.css";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const GameLayout = ({ children, title }: LayoutProps) => {
  return (
    <div>
      <GameMenu title={title} />
      <div className={styles.gameContainer}>{children}</div>
    </div>
  );
};

export default GameLayout;
